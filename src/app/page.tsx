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
  const habits = [];
  let habit: Day[] = [];
  habit.push({ date: new Date(2024, 1, 1), status: false, id: 1 })
  habit.push({ date: new Date(2024, 1, 2), status: false, id: 2 })
  habit.push({ date: new Date(2024, 1, 3), status: false, id: 3 })

  // const day: Day = {
  //   date: new Date(2024, 1, 1),
  //   status: false
  // }
  
  return (
    <div>
      <main>
        <Habit aHabit={habit} />
      </main>
      <br />
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}
