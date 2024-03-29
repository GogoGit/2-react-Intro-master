// This is a React COMPONENT

import Header from "./components/Header";
import Pirate from "./components/Pirate";
// import piratesFile from "./data/sample-pirates-array";  //using JSON Server :
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
  const [pirates, setPirates] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/pirates`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.length); //note this happens twice!!!!  Why
        //This is a FUNCTION
        setPirates(data);
      })
      .catch((err) => console.error(`Fetch problem: ${err.message}`));
  }, []); //This is [] 'array' stops it from infinately looping.  It only runs once!!!  Need more information!

  const addPirate = (pirate) => {
    console.log(pirate);
    pirate.image = "avatar.png";
    setPirates((prev) => [pirate, ...prev]);
  };

  const removePirate = (name) => {
    console.log("removing a pirate");
    const newPirates = pirates.filter((pirate) => pirate.name != name);
    setPirates(newPirates);
  };

  return (
    <div>
      <Header title={randomize()} />

      {/* AddPirate is a component!!! Note naming structure */}
      <AddPirate addPirate={addPirate} />
      {/* {piratesFile.map((pirate, index) => ( */}
      {pirates.map((pirate, index) => (
        // <Pirate key={index} name={pirate.name} tagline={randomize()} />
        <Pirate
          key={index}
          pirate={pirate}
          tagline={randomize()}
          removePirate={removePirate}
        />
      ))}
    </div>
  );
}

//you can get rid of props and DeStructuring it so you don't need to type props.tagline
// function Pirate(props) {
//   return <p>{props.tagline}</p>;
// }

export default App;
