// This is a React COMPONENT

import Header from "./components/Header";
import Pirate from "./components/Pirate";
import piratesFile from "./data/sample-pirates-array";
// import React from "react";
import React, { useState, useEffect } from "react";
import AddPirate from "./components/AddPirate";

const pirateCalls = [
  "Aaarg, belay that!",
  "Avast me hearties!",
  "Shiver me timbers!",
];

const randomize = () =>
  pirateCalls[Math.floor(Math.random() * pirateCalls.length)];

function passPirateData(data) {
  return data;
}

function App() {
  // const [pirates, setPirates] = React.useState(piratesFile);
  const [pirates, setPirates] = useState(piratesFile);

  useEffect(() => {
    fetch(`http://localhost:3001/pirates`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.length);
        //This is a FUNCTION
        setPirates(data);
      })
      .catch((err) => console.error(`Fetch problem: ${err.message}`));
  }, []);

  const addPirate = (pirate) => {
    console.log(pirate);
    pirate.image = "avatar.png";
    setPirates((prev) => [pirate, ...prev]);
  };

  return (
    <div>
      <Header title={randomize()} />

      {/* AddPirate is a component!!! Note naming structure */}
      <AddPirate addPirate={addPirate} />
      {/* {piratesFile.map((pirate, index) => ( */}
      {pirates.map((pirate, index) => (
        // <Pirate key={index} name={pirate.name} tagline={randomize()} />
        <Pirate key={index} pirate={pirate} tagline={randomize()} />
      ))}
    </div>
  );
}

//you can get rid of props and DeStructuring it so you don't need to type props.tagline
// function Pirate(props) {
//   return <p>{props.tagline}</p>;
// }

export default App;
