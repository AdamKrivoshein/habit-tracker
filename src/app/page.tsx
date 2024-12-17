interface Day {
  date: Date;
  status: boolean;
}

function Day({ aDay }: { aDay: Day}) {
  return (
    <div>
      <p>{aDay.date.toDateString()} = {aDay.status.toString()}</p>
    </div>
  )
}

function Habit({ aHabit }: { aHabit: Day }) {
  return (
    <ul>
      <Day aDay={aHabit[0]} />
      <Day aDay={aHabit[1]} />
      <Day aDay={aHabit[2]} />
      <button>+</button>
    </ul>
  )
}

export default function Home() {
  const habits = [];
  let habit: Day[] = [];
  habit.push({ date: new Date(2024, 1, 1), status: false })
  habit.push({ date: new Date(2024, 1, 2), status: false })
  habit.push({ date: new Date(2024, 1, 3), status: false })

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
