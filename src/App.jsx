import "./App.css";
import { useState } from "react";
import Row from "./components/Row";

function App() {
  const [playing, setPlaying] = useState(false);
  const [tempo, setTempo] = useState(120);
  return (
    <>
      <h1 className="logo">💿</h1>
      <h1>Sequencer</h1>
      <div className="container">
        <div className="App">
          <Row
            playing={playing}
            tempo={tempo}
            name="bass"
            soundFile="./kick.wav"
          />
          <Row
            playing={playing}
            tempo={tempo}
            name="snare"
            soundFile="./snare.wav"
          />
          <Row
            playing={playing}
            tempo={tempo}
            name="hihat"
            soundFile="./hh.wav"
          />
        </div>
        <button
          style={{
            margin: "1rem",
            fontSize: "2rem",
          }}
          onClick={() => {
            setPlaying(!playing);
          }}
        >
          {playing ? "⏸️" : "▶️"}
        </button>
        <div className="tempo-control">
          <label>Tempo: {tempo} BPM</label>
          <input
            type="range"
            min="60"
            max="200"
            value={tempo}
            onChange={(e) => {
              setTempo(parseInt(e.target.value));
            }}
            className="tempo-slider"
          />
        </div>
      </div>
    </>
  );
}

export default App;
