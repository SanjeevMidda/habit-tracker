import React, { useState } from "react";

const Habit = ({
  color,
  amount,
  name,
  keyValue,
  setHabit,
  habits,
  updateAmount,
}) => {
  const [habitNumber, setHabitNumber] = useState(0);

  return (
    <div className="habitContainer" onClick={() => updateAmount(keyValue)}>
      <p>{name}</p>
      <div
        className="circle"
        style={{ background: `linear-gradient(45deg, ${color}, ${color})` }}
      >
        <p>{amount}</p>
      </div>
    </div>
  );
};

export default Habit;
