import "../assets/css/Pirate.css";
import avatar from "../assets/img/avatar.png";
// function Pirate(props) {
//   return (
//     <section>
//       <h1>{props.foo}</h1>{" "}
//       {/* Note that this doesn't break, it creates the H1 element but with no data between the tag  */}
//       {/* <h2>{props.name}</h2> */}
//       <h2>{props.pirate.name}</h2>
//       <p>Favorite saying: {props.tagline}</p>;
//     </section>
//   );
// }

// function Pirate(props) {
//   return (
//     <section>
//       <summary>
//         <img src={avatar} alt="pirate" />
//         <h3>{props.pirate.name}</h3>
//         <ul>
//           <li>Died: {props.pirate.year}</li>
//           <li>Weapon: {props.pirate.weapon}</li>
//           <li>Vessel: {props.pirate.vessel}</li>
//         </ul>
//       </summary>
//       <article>
//         <h2>{props.tagline}</h2>
//         <p>{props.pirate.desc}</p>
//       </article>
//     </section>
//   );
// }

// Destructuring 1

// function Pirate(props) {
//     const { name, year, weapon, vessel, desc } = props.pirate;
//     const { tagline } = props;

// Destructuring 2
// function Pirate({ pirate, tagline }) {
//   const { name, year, weapon, vessel, desc } = pirate;

// Destructuring 3
function Pirate({ pirate: { name, year, weapon, vessel, desc }, tagline }) {
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
      </article>
    </section>
  );
}

export default Pirate;
