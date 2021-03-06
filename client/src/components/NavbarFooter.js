import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./NavbarFooter.css";

const NavbarFooter = () => {
  return (
    <Navbar
      className="navFooter"
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="bottom"
    >
      {/* <Navbar.Brand>Navbar</Navbar.Brand> */}
    </Navbar>
  );
};

export { NavbarFooter };
