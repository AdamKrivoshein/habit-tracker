function Day() {
  return (
    <div>
      <p>Day</p>
    </div>
  )
}

function Habit() {
  return (
    <ul>
      <Day />
      <Day />
      <Day />
    </ul>
  )
}

export default function Home() {
  /*const day = {
    date: new Date(2024, 1),
    status: false
  }
  const habit = []
  const habits = []*/
  return (
    <div>
      <main>
        <Habit />
        <Habit />
        <Habit />
      </main>
      <br />
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}
