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
      <div className="App">
        <NavBarComponent />
        <Jumbotron style={{ marginBottom: "0px" }}>
          <h1>Categories</h1>
          <Route path="/" exact component={ExpenseList} />
        </Jumbotron>
        <br />
        <Route path="/category/:id" component={CategoryItem} />
        <Route path="/edit" component={EditExpense} />
        <Route path="/delete" component={DeleteExpense} />
        <NavbarFooter />
      </div>
    </Router>
  );
};

// const category = {
//   title: "Food",
//   id: "1"

// }
// const App = () => {

//   const fetchInfo = (categoryID) => {
//     // actually fetch stuff here instead
//     return [{
//     id: 1,
//     amt: 100
//       }]
//   }
//   return (
//     <Router>
//       <div className="App">
//         <ExpenseListNew categoryTitle={category.title} categoryId={category.id} expenses={[{
//           id: 1,
//           amt: 10
//         }]}></ExpenseListNew>
//       </div>
//     </Router>
//   );
// };

export { App };

/*
Need to change the url paths - following example for now

*/
