'use client'

import { useReducer } from 'react'

interface State {
  startDate: Date,
  days: [
    {
      success: boolean
      date: Date
    }
  ]
}

type DayAction =
  | { type: "reset" }
  | { type: "addDay"; value: State["days"][0]["success"] }
  | { type: "toggleSuccess"; value: State["days"][0]["date"] }

const initialState: State = { startDate: new Date(), days: [ { success: false, date: new Date() } ] };

function stateReducer(state: State, action: DayAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "addDay":
      const newDay = state["startDate"].getTime() - 86400000;
      return {
        ...state,
        startDate: new Date(newDay),
        days: [...state.days, { success: action.value, date: new Date(newDay) }]
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
  const addDay = (successValue: boolean) => dispatch({ type: "addDay", value: successValue })
  const toggleSuccess = (dateValue: Date) => dispatch({ type: "toggleSuccess", value: dateValue })
  const reset = () => dispatch({ type: "reset" })  

  return (
    <div>
      <main>
        {state.days.map((day, index) => (
          <button key={index} onClick={() => toggleSuccess(day.date)}>|  {day.date.toDateString()}: {day.success.toString()}  |</button>
        ))}
        <br />
        <button onClick={() => addDay(true)}>Add Day</button>
      </main>
      <br />
      <footer>
        <p>A habit tracker</p>
      </footer>
    </div>
  );
}
