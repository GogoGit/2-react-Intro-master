import "../assets/css/AddPirateForm.css";
import React from "react";
import Button from "./Button";

const AddPirate = ({ addPirate }) => {
  const [name, setName] = React.useState("");
  const [vessel, setVessel] = React.useState("");
  const [weapon, setWeapon] = React.useState("");
  const [death, setDeath] = React.useState("");
  const [desc, setDesc] = React.useState("");
  //Can't be outside of AddPrite as the variables would be out of scope... forgot error message something about global variables
  const createPirate = (event) => {
    event.preventDefault();

    const pirate = {
      name: name,
      vessel: vessel,
      weapon: weapon,
      death: death,
      desc: desc,
    };
    addPirate(pirate);
    setName("");
    setVessel("");
    setWeapon("");
    setDeath("");
    setDesc("");
  };

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
      <label htmlFor="died">Died</label>
      <input
        id="died"
        type="text"
        placeholder="Date of death"
        value={death}
        onChange={(event) => setDeath(event.target.value)}
      />
      <label htmlFor="desc">Description</label>
      <textarea
        id="desc"
        placeholder="Pirate description"
        value={desc}
        onChange={(event) => setDesc(event.target.value)}
      />
      {/* replacing button */}
      {/* <button type="submit">Add Pirate</button> */}
      {/* use the Button component */}
      <Button text={"Add Pirate"} />
    </form>
  );
};

export default AddPirate;
