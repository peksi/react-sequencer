import { useEffect, useState } from "react";
import Switch from "./Switch";

const Row = (props) => {
  const stepcount = 8;

  const steps = new Array(stepcount).fill(false);
  const [playingStep, setPlayingStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (props.playing) {
        setPlayingStep((playingStep + 1) % stepcount);
      }
    }, (60 / props.tempo / 2) * 1000);

    return () => clearInterval(interval);
  }, [playingStep, props.playing, props.tempo]);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "3rem",
        }}
      >
        {props.name}
      </div>

      {steps.map((step, index) => {
        return (
          <Switch
            key={("switch-", index)}
            active={step}
            playing={index === playingStep}
            soundFile={props.soundFile}
          />
        );
      })}
    </div>
  );
};

export default Row;
