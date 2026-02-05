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

  const colors = [
    "red",
    "green",
    "silver",
    "brown",
    "purple",
    "yellow",
    "orange",
    "pink",
  ];

  const [numberOfHabits, setNumberOfHabits] = useState(0);

  const [textEntered, setTextEntered] = useState("");

  const handleChange = (e) => {
    setTextEntered(e.target.value);
  };

  const addNewHabit = (keypress) => {
    if (keypress === "Enter") {
      setHabits([
        ...habits,
        {
          key: habits.length + 1,
          name: textEntered,
          amount: 0,
        },
      ]);

      setTextEntered("");
    }
  };

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
    <div className="App" onKeyDown={(e) => addNewHabit(e.key)}>
      <div className="mainWrappingContainer">
        <input
          type="text"
          value={textEntered}
          onChange={handleChange}
          placeholder="Enter your new habit"
        />

        <div className="titleContainer">
          <h1>HABITS</h1>
          <h1>({numberOfHabits})</h1>
        </div>

        <div className="mainHabitsContainer">
          {habits.map((habit) => {
            return (
              <Habit
                key={habit.key}
                color={[
                  colors[Math.floor(Math.random() * colors.length)],
                  colors[Math.floor(Math.random() * colors.length)],
                ]}
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
