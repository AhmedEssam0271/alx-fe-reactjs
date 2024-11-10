import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#333", padding: "10px" }}>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: "0px",
          overflow: "hidden",
          backgroundColor: "#333",
        }}
      >
        <li style={{ float: "left", marginLeft: "5px" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ float: "left", marginLeft: "5px" }}>
          <Link to="/about">About</Link>
        </li>
        <li style={{ float: "left", marginLeft: "5px" }}>
          <Link to="/services">Services</Link>
        </li>
        <li style={{ float: "left", marginLeft: "5px" }}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
