import { useState } from "react";
import "./UI.css";
import { Welcome } from "./Welcome";
import { Goals } from "./Goals";
import { Speech } from "./Speech";
import { getData, setData } from "../data";

const endTaskText = [
  "Yay, thanks for sharing. For this you get a kitty badge!",
  3000,
  "Now you can view your goals for today on the right.",
  3000,
  "When you finish your day, you can fill a journal entry to get another badge",
  4000,
  "See you later friend"
];

export const UI = ({currentState, setCurrentState}) => {
  const handleGoalsEnd = () => {
    setData("badges", [1]);
    setCurrentState(2);
  };

  return (
    <div className="ui-container">
      {currentState === 0 && <Welcome onEnd={() => setCurrentState(1)} />}
      {currentState === 1 && <Goals onEnd={handleGoalsEnd} />}
      {currentState === 2 && (
        <span>
          {" "}
          <Badges />
          <Speech text={endTaskText} />
        </span>
      )}
      {currentState === 3 && (
        <span>
          <Badges />
          <Speech text={["Thanks for filling a journal. I hope it helped you understand your day a little better. Get another kitty badge!"]} />
        </span>
      )}
    </div>
  );
};

const Badges = () => {
  const badges = getData("badges") || [];
  if (!Array.isArray(badges)) {
    return;
  }

  return (
    <div className="badges">
      {badges.map((badge, i) => (
        <img key={i} src={`${process.env.PUBLIC_URL}/assets/badge.png`}></img>
      ))}
    </div>
  );
};
