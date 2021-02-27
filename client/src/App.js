import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { NavBarComponent } from "./components/Navbar.js";
import { ExpenseList } from "./components/ExpenseList.js";
import { EditExpense } from "./components/EditExpense.js";
import { CreateExpense } from "./components/CreateExpense.js";
import { DeleteExpense } from "./components/DeleteExpense.js";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBarComponent />
        <br />
        <Route path="/" exact component={ExpenseList} />
        <Route path="/create" component={CreateExpense} />
        <Route path="/edit" component={EditExpense} />
        <Route path="/delete" component={DeleteExpense} />
      </div>
    </Router>
  );
};

export { App };

/*
Need to change the url paths - following example for now

*/
