import Header from "./components/Header";
import Pirate from "./components/Pirate";
import piratesFile from "./data/sample-pirates-array";
// import React from "react";
import React, { userState, useEffect } from "react";
import AddPirate from "./components/AddPirate";

// import React from "react";     //Not needed.

// function App() {
//   return <Pirate tagline="Ahoy from the pirate component" />; //this is the same as ->  <Pirate></Pirate>
// }

const pirateCalls = [
  "Aaarg, belay that!",
  "Avast me hearties!",
  "Shiver me timbers!",
];

// transform into an arrow function (function expression)
// function randomize() {
//   return pirateCalls[Math.floor(Math.random() * pirateCalls.length)];
// }

// const addPirate = (pirate) => {  console.log(" from the App component ::: ", pirate);};

// function expression
const randomize = () =>
  pirateCalls[Math.floor(Math.random() * pirateCalls.length)];

function passPirateData(data) {
  return data;
}

function App() {
  const [pirates, setPirates] = React.useState(piratesFile);
  // let [pirates, setPirates] = React.useState(piratesFile);

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
        /*This didn't work:  setPirates=data;
         Probably due to the fact that this is a REACT Component??? So confusing???
         
         */
        setPirates(data);
      })
      .catch((err) => console.error(`Fetch problem: ${err.message}`));
  }, []);

  console.log(`after const`);
  console.log(pirates);

  //This is common pattern, you make a copy of the data, then you modify it and then you update the original data with the new data.
  // const addPirate = (pirate) => {
  //   const newPirates = [...pirates]; //spread operator ... creates a copy of pirates into newPirates
  //   newPirates.unshift(pirate); //unshift adds a pirate to the front of the list in newPirates
  //   setPirates(newPirates); //Now we update setPirates with newPirates
  // };

  // const addPirate = (pirate) => {
  //   const newPirates = [pirate, ...pirates];
  //   setPirates(newPirates);
  // };

  const addPirate = (pirate) => {
    console.log(pirate);
    pirate.image = "avatar.png";
    setPirates((prev) => [pirate, ...prev]);
  };

  return (
    <div>
      <Header title={randomize()} />
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
