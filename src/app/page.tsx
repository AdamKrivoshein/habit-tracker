'use client'

import { useReducer } from 'react'

interface State {
  success: boolean
}

type DayAction =
  | { type: "reset" }
  | { type: "setSuccess"; value: State["success"] }

const initialState: State = { success: false };

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


interface Day {
  date: Date;
  status: boolean;
  id: number
}

function Habit({ aHabit }: { aHabit: Day }) {
  const daysList = aHabit.map(aHabit =>
    <li key={aHabit.id}>
      {aHabit.date.toDateString()} = {aHabit.status.toString()}
    </li>
  )

  return (
    <ul>
      {daysList}
      <li><button>+</button></li>
    </ul>
  )
}

export default function Home() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const markSuccess = () => dispatch({ type: "setSuccess", value: true })
  const reset = () => dispatch({ type: "reset" })


  const habits = [];
  const habit: Day[] = [];
  habit.push({ date: new Date(2024, 1, 1), status: false, id: 1 })
  habit.push({ date: new Date(2024, 1, 2), status: false, id: 2 })
  habit.push({ date: new Date(2024, 1, 3), status: false, id: 3 })

  function handleClick() {
    habit.push({ date: new Date(2024, 1, 4), status: false, id: 4 })
  }
  

  return (
    <div>
      <main>
        <p>Success: {state.success.toString()}</p>
        <button onClick={markSuccess}>Completed!</button>
        <br />
        <button onClick={reset}>Reset</button>
        <br />
        <br />
        <Habit aHabit={habit} />
      </main>
      <br />
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}
