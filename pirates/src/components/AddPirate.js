import "../assets/css/AddPirateForm.css";
import React from "react";
import Button from "./Button";

const AddPirate = ({ addPirate }) => {
  const initialFormState = {
    id: "",
    name: "",
    vessel: "",
    weapon: "",
    year: "",
    desc: "",
  };

  const [pirate, setPirate] = React.useState(initialFormState);

  // const [name, setName] = React.useState("");
  // const [vessel, setVessel] = React.useState("");
  // const [weapon, setWeapon] = React.useState("");
  // const [death, setDeath] = React.useState("");
  // const [desc, setDesc] = React.useState("");

  // This is how to collect the data that has changed in ONE PLACE
  // THIS is a good Pattern!!!
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPirate({ ...pirate, [name]: value });
  };

  //Can't be outside of AddPrite as the variables would be out of scope... forgot error message something about global variables
  const createPirate = (event) => {
    event.preventDefault();
    addPirate(pirate);
    setPirate(initialFormState);
  };
  return (
    <form onSubmit={createPirate}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Pirate name"
        name="name"
        value={pirate.name}
        onChange={handleInputChange}
      />
      <label htmlFor="vessel">Vessel</label>
      <input
        id="vessel"
        type="text"
        placeholder="Pirate vessel"
        name="vessel"
        value={pirate.vessel}
        onChange={handleInputChange}
      />
      <label htmlFor="weapon">Weapon</label>
      <input
        id="weapon"
        type="text"
        name="weapon"
        placeholder="Pirate weapon"
        value={pirate.weapon}
        onChange={handleInputChange}
      />
      <label htmlFor="died">Died</label>
      <input
        id="died"
        type="text"
        name="year"
        placeholder="Year of death"
        value={pirate.year}
        onChange={handleInputChange}
      />
      <label htmlFor="desc">Description</label>
      <textarea
        id="desc"
        name="desc"
        placeholder="Pirate description"
        value={pirate.desc}
        onChange={handleInputChange}
      />
      {/* replacing button */}
      {/* <button type="submit">Add Pirate</button> */}
      {/* use the Button component */}

      <Button text={"Add Pirate"} />
    </form>
  );
};

export default AddPirate;
