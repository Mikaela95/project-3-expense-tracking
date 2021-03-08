import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import * as Icon from "react-bootstrap-icons";
import { AddExpense } from "./AddExpense";

const CategoryItem = ({ match }) => {
  const [category, setCategory] = useState([]);
  const [active, setActive] = useState();

  useEffect(() => {
    fetchCategory();
    console.log(match);
  }, []);

  const [expenses, setExpense] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchCategory = async () => {
    const fetchCategory = await fetch(
      `http://localhost:4000/api/categories/one-category/${match.params.id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const category = await fetchCategory.json();
    setCategory(category);
    console.log(category);
  };

  const fetchExpenses = async () => {
    const fetchExpenses = await fetch(
      `http://localhost:4000/api/expenses/one-category/all-expenses/${match.params.id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const expenses = await fetchExpenses.json();
    setExpense(expenses);
  };

  const renderExpenseItems = () => {
    return expenses.map((expense) => (
      <tr>
        <td>{expense.name}</td>
        <td>{expense.projectedExpense}</td>
        <td>{expense.actualExpense}</td>
        <td>difference value</td>
        <Button variant="warning" style={{ margin: "0rem 1rem" }} o>
          <Icon.Pencil />
        </Button>
        <Button variant="danger" expense={"test"}>
          <Icon.Trash inverted />
        </Button>
      </tr>
    ));
  };

  return (
    <div>
      <h1>Category: {category.name}</h1>
      <p>{category.description}</p>
      <div>
        Add a new expense item{" "}
        <Button variant="primary" onClick={() => setActive('add')}>
          <Icon.Plus />
        </Button>
      </div>
      <div>
        {active === 'add' && <AddExpense data={match.params.id}/>}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Expense Item</th>
              <th>Estimated</th>
              <th>Actual</th>
              <th>Difference</th>
              <th>Amendments</th>
            </tr>
          </thead>
          <tbody>{renderExpenseItems()}</tbody>
        </Table>
      </div>
    </div>
  );
};

export { CategoryItem };
