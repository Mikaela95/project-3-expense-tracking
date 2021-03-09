import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import { NavBarComponent } from "./components/Navbar.js";
import { NavbarFooter } from "./components/NavbarFooter.js";
import { ExpenseList } from "./components/ExpenseList.js";
import { EditExpense } from "./components/EditExpense.js";
import { CategoryItem } from "./components/CategoryItem.js";
import { DeleteExpense } from "./components/DeleteExpense.js";

const App = () => {
  return (
    <Router>
      <div className="App" style={{backgroundColor: '#e9ecef'}}>
        <NavBarComponent />
        <Jumbotron style={{ marginBottom: "auto" }}>
          <Route path="/" exact component={ExpenseList} />
          <Route path="/category/:id" component={CategoryItem} />
          <Route path="/edit" component={EditExpense} />
          <Route path="/delete" component={DeleteExpense} />
        </Jumbotron>
        <NavbarFooter />
      </div>
    </Router>
  );
};

export { App };
