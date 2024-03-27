import "../assets/css/AddPirateForm.css";
import React from "react";

//useEffect is funky!!!!
/*
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
}

*/

/* Note we are create a reference... not calling the function...
functionName vs functionName() */

// Destructor react component
// const AddPirate = (props) => {

const AddPirate = ({ addPirate }) => {
  const [name, setName] = React.useState("");
  const [vessel, setVessel] = React.useState("");
  const [weapon, setWeapon] = React.useState("");

  //Can't be outside of AddPrite as the variables would be out of scope... forgot error message something about global variables
  function createPirate(event) {
    event.preventDefault();
    const pirate = {
      name: name,
      vessel: vessel,
      weapon: weapon,
    };

    addPirate(pirate); //Error here!

    // setName("");
    // setVessel("");
    // setWeapon("");
  }

  // Note if the Name: Value are the same you can write const = pirate as follows
  // const pirate = {
  //   name,
  //   vessel,
  //   weapon,
  // };

  return (
    <form onSubmit={createPirate}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Pirate name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="vessel">Vessel</label>
      <input
        id="vessel"
        type="text"
        placeholder="Pirate vessel"
        value={vessel}
        onChange={(event) => setVessel(event.target.value)}
      />
      <label htmlFor="weapon">Weapon</label>
      <input
        id="weapon"
        type="text"
        placeholder="Pirate weapon"
        value={weapon}
        onChange={(event) => setWeapon(event.target.value)}
      />
      <button type="submit">Add Pirate</button>
    </form>
  );
};

export default AddPirate;
