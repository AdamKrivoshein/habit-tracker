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
  | { type: "setSuccess"; value: State["days"][0]["success"] }

const initialState: State = { days: [ { success: false, date: new Date(2024, 1, 1) } ] };

function stateReducer(state: State, action: DayAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setSuccess":
      return {
        ...state,
        days: [...state.days, { success: action.value, date: new Date() }] 
      };
    default:
      throw new Error("Unknown action");
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const markSuccess = (successValue: boolean) => dispatch({ type: "setSuccess", value: successValue })
  const reset = () => dispatch({ type: "reset" })  

  return (
    <div>
      <main>
        {state.days.map((day, index) => (
          <p key={index}>{day.date.toDateString()}: {day.success.toString()}</p>
        ))}
        <button onClick={() => markSuccess(true)}>Completed!</button>
        <br />
        <button onClick={() => markSuccess(false)}>Mission failed!</button>
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
