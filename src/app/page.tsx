function Day({ text }: { text: string}) {
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

function Habit({ aDay }: { aDay: string }) {
  return (
    <ul>
      <Day text={aDay} />
      <Day text={aDay} />
    </ul>
  )
}

export default function Home() {
  interface Day {
    date: Date;
    status: boolean
  }

  const day: Day = {
    date: new Date(2024, 1),
    status: false
  }
  const habit = []
  const habits = []
  return (
    <div>
      <main>
        <Habit aDay="test1" />
        <Habit aDay="test2" />
      </main>
      <br />
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}
