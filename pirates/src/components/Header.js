import "../assets/css/Header.css";
import logo from "../assets/img/anchor.svg";

// function Header({props}) {
function Header({ title }) {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
      {/* using props to replace below */}
      {/* <h1>Foobar</h1> */}
      {/* destructuring so we don't need props.title */}
      {/* <h1>{props.title}</h1> */}
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
