//////////PART 2: WORKING SWITCH /////////////
// import React, { useState } from "react";
// import "./Switch.css";
// function Switch() {
//   const [isOn, setIsOn] = useState("OFF");
//   const [background, setBackground] = useState("off");

//   function toggle() {
//     if (isOn === "OFF") {
//       setIsOn("ON");
//       setBackground("on");
//     } else {
//       setIsOn("OFF");
//       setBackground("off");
//     }
//   }

//   function turnOn() {
//     setIsOn("ON");
//     setBackground("on");
//   }

//   function turnOff() {
//     setIsOn("OFF");
//     setBackground("off");
//   }

//   function getBackgroundColor() {
//     return isOn === "ON" ? "on" : "off";
//   }

//   return (
//     <div className={"switch " + getBackgroundColor()}>
//       <h1> Switch </h1>
//       <h2>{isOn}</h2>
//       <div className="btns">
//         <button onClick={turnOn}> On </button>
//         <button onClick={turnOff}> Off </button>
//       </div>
//     </div>
//   );
// }

// export default Switch;

////////////////PART 3: OPTIMIZED SWITCH//////////////////
import React, { useState } from "react";
import "./Switch.css";
export default function Switch() {
  const [isOn, setIsOn] = useState(true);

  function toggle() {
    if (isOn) {
      setIsOn(false);
    } else {
      setIsOn(true);
    }
  }

  function getBackgroundColor() {
    return isOn ? "off" : "on";
  }

  function getButtonText() {
    return isOn ? "Turn On" : "Turn Off";
  }

  function getLabelText() {
    return isOn ? "OFF" : "ON";
  }
  return (
    <div className={"switch " + getBackgroundColor()}>
      <h1> Switch </h1>
      <h2>{getLabelText()}</h2>
      <div className="btns">
        <button onClick={toggle}> {getButtonText()} </button>
      </div>
    </div>
  );
}
