import { useEffect, useState } from "react";
import { Howl } from "howler";

const Switch = (props) => {
  const [active, setActive] = useState(props.active);

  useEffect(() => {
    const sound = new Howl({
      src: [props.soundFile],
    });

    if (props.playing && active) {
      sound.play();
    }
  }, [props.playing, active, props.soundFile]);

  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="switch"
        onClick={() => setActive(!active)}
        style={{
          cursor: "pointer",
          transitionDuration: "100ms",
          width: props.playing ? "30px" : "35px",
          height: props.playing ? "30px" : "35px",

          borderRadius: "15px",
          background: active ? "magenta" : "darkgray",
        }}
      ></div>
    </div>
  );
};

export default Switch;
