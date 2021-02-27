import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Expense Tracking</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Expenses</Nav.Link>
          <Nav.Link href="/create">Create</Nav.Link>
          <Nav.Link href="/edit">Edit</Nav.Link>
          <Nav.Link href="/delete">Delete</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export { NavBarComponent };
