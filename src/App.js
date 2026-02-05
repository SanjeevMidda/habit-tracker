import "./index.css";
import Habit from "./components/Habit";
import { useEffect, useState } from "react";

function App() {
  // current habits

  const [habits, setHabits] = useState([
    {
      key: 0,
      name: "morning yoga",
      amount: 0,
    },
    {
      key: 1,
      name: "Wim Hof",
      amount: 1,
    },
    {
      key: 2,
      name: "drink water",
      amount: 4,
    },
    {
      key: 3,
      name: "Go for run",
      amount: 4,
    },
    {
      key: 4,
      name: "Wake up early",
      amount: 4,
    },
    {
      key: 5,
      name: "Do poo",
      amount: 4,
    },
  ]);

  const [numberOfHabits, setNumberOfHabits] = useState(0);

  useEffect(() => {
    setNumberOfHabits(habits.length);
  }, [habits]);
  // input to add a habit
  //habit has a color, choice to increase or decrease and name
  //habit can be removed
  // Shows total number of habits

  //update amount
  const updateAmount = (habitKey) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.key === habitKey ? { ...habit, amount: habit.amount + 1 } : habit
      )
    );
  };

  console.log(habits);

  return (
    <div className="App">
      <div className="mainWrappingContainer">
        <input></input>

        <div className="titleContainer">
          <h1>HABITS</h1>
          <h1>({numberOfHabits})</h1>
        </div>

        <div className="mainHabitsContainer">
          {habits.map((habit) => {
            return (
              <Habit
                key={habit.key}
                color="green"
                amount={habit.amount}
                name={habit.name}
                keyValue={habit.key}
                setHabit={setHabits}
                habits={habits}
                updateAmount={updateAmount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
