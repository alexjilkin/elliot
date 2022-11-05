import "./App.css";
import { useEffect, useRef, useState } from "react";
import { app } from "./Game";
import { UI } from "./ui";
import { getData, setData } from "./data";
const App = () => {
  const ref = useRef();
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    if (ref.current.innerHTML === "") {
      ref.current.appendChild(app.view);
    }
  }, [ref]);

  const goals = getData("goals");
  return (
    <div className="container">
      <div ref={ref}></div>
      <UI currentState={currentState} setCurrentState={setCurrentState}></UI>
      <div
        style={{
          marginLeft: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <GoalsView />
        <span>
          {goals && <Journal />}
        </span>
      </div>
    </div>
  );
};

const GoalsView = () => {
  const goals = getData("goals") || [];
  if (!Array.isArray(goals) || !goals.length) {
    return;
  }

  return (
    <div className="goals-view">
      My goals for today:
      {goals.map((goal, i) => (
        <div key={i}>{goal}</div>
      ))}
    </div>
  );
};

const Journal = () => {
  return (
    <div
      className="journal-button"
      style={{
        width: 150,
        height: 60,
        backgroundImage: "url('/assets/button.png')",
        backgroundSize: "cover",
        cursor: "pointer",
        fontSize: 30,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Journal
    </div>
  );
};

export default App;
