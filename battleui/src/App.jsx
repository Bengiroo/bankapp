import React from "react";
import Grid from "./Grid";
import "./App.css";

export default function App() {
  const mode = "offense"; // or "defense"
  const handleFireOrAnchor = () => {
    alert(mode === "defense" ? "Anchoring..." : "Firing...");
  };

  return (
    <div className="app-container">
      <Grid />
      <div className="control-panel">
        <div className="flex-container">
          <button className="mode-btn">Mode</button>
          <button className="reset-btn">Reset</button>
        </div>
        <div className="slider-container">
          <button className="rot-btn">Rotate</button>

          <input type="range" className="slider" />
        </div>
        <button className="fire-btn" onClick={handleFireOrAnchor}>
          Fire
        </button>
      </div>
    </div>
  );
}
