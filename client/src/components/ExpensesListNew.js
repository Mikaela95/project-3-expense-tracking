import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CreateExpense } from "./CreateExpense.js";
import "./ExpenseList.css";

const ExpenseListNew = (props) => {
  // const [categoryTitle, setCategoryTitle] = useState("")
  // const [categoryId, setCategoryId] = useState("")

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log("test button click")
  // } 
  return (
    <div>
      {/* <h2>{props.categoryTitle}</h2>
      <ul>
        <li>{props.expenses[0].amt}</li>
      </ul> */}
      <h1>Sup</h1>
    </div>
  );
};

export { ExpenseListNew };
