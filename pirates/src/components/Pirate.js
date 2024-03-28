import Button from "./Button";
import "../assets/css/Pirate.css";
import avatar from "../assets/img/avatar.png";
// Destructuring 3
function Pirate({
  pirate: { name, year, weapon, vessel, desc },
  tagline,
  removePirate,
}) {
  return (
    <section>
      <summary>
        <img src={avatar} alt="pirate" />
        <h3>{name}</h3>
        <ul>
          <li>Died: {year}</li>
          <li>Weapon: {weapon}</li>
          <li>Vessel: {vessel}</li>
        </ul>
      </summary>
      <article>
        <h2>{tagline}</h2>
        <p>{desc}</p>
        {/* <Button onClick={removePirate()} text="Remove Pirate" /> */}
        {/* if you don't setup it up like below it will triger the function to run automatically! */}
        <Button onClick={() => removePirate(name)} text="Remove Pirate" />
      </article>
    </section>
  );
}

export default Pirate;
