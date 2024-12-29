'use client'

import { useReducer } from 'react'

interface State {
  days: [
    {
      success: boolean
      date: Date
    }
  ]
}

type DayAction =
  | { type: "reset" }
  | { type: "addSuccess"; value: State["days"][0]["success"] }
  | { type: "toggleSuccess"; value: State["days"][0]["date"] }

const initialState: State = { days: [ { success: false, date: new Date(2024, 0, 1) } ] };

function stateReducer(state: State, action: DayAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "addSuccess":
      return {
        ...state,
        days: [...state.days, { success: action.value, date: new Date() }]
      }
    case "toggleSuccess":
      const updatedDays = state.days.map(day => {
        if (day.date.getTime() === action.value.getTime()) {
          return { ...day, success: !day.success };
        }
        return day;
      })

      return {
        ...state,
        days: updatedDays
      }
    default:
      throw new Error("Unknown action");
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const addSuccess = (successValue: boolean) => dispatch({ type: "addSuccess", value: successValue })
  const toggleSuccess = (dateValue: Date) => dispatch({ type: "toggleSuccess", value: dateValue })
  const reset = () => dispatch({ type: "reset" })  

  return (
    <div>
      <main>
        {state.days.map((day, index) => (
          <button key={index} onClick={() => toggleSuccess(day.date)}>- - {day.date.toDateString()}: {day.success.toString()} - -</button>
        ))}
        <br />
        <button onClick={() => addSuccess(true)}>Completed!</button>
        <br />
        <button onClick={() => addSuccess(false)}>Mission failed!</button>
        <br />
      </main>
      <br />
      <br />
      <footer>
        <p>A habit tracker</p>
      </footer>
    </div>
  );
}
