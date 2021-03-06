import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const CategoryItem = ({ match }) => {
  // Fetch the category -> currently all
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  // Category
  const [items, setItem] = useState([]);

  //Expenses
  const [expense, setExpense] = useState([]);

  // Get the category from the id passed from Link to
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `http://localhost:4000/api/categories/one-category/${match.params.id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const items = await fetchItem.json();
    setItem(items);
    console.log(items);
  };

  //Get the expenses associated with the category

  return (
    <div>
      <h1>Category: {items.name}</h1>
      <p>{items.description}</p>
    </div>
  );
};

export { CategoryItem };
