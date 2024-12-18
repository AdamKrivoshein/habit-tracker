'use client'

import { useReducer } from 'react'

interface State {
  success: boolean
  date: Date
}

type DayAction =
  | { type: "reset" }
  | { type: "setSuccess"; value: State["success"] }

const initialState: State = { success: false, date: new Date(2024, 1, 1) };

function stateReducer(state: State, action: DayAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setSuccess":
      return { ...state, success: action.value };
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
        <p>{state.date.toDateString()}: {state.success.toString()}</p>
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
