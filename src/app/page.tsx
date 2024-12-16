interface Day {
  date: Date;
  status: boolean
}

function Day({ text }: { text: Day}) {
  return (
    <div>
      <p>{text.date.toDateString()}</p>
    </div>
  )
}

function Habit({ aDay }: { aDay: Day }) {
  return (
    <ul>
      <Day text={aDay} />
      <Day text={aDay} />
    </ul>
  )
}

export default function Home() {
  const day: Day = {
    date: new Date(2024, 1),
    status: false
  }
  const habit = []
  const habits = []
  return (
    <div>
      <main>
        <Habit aDay={day} />
        <Habit aDay={day} />
      </main>
      <br />
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}
