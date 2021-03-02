import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CreateExpense } from "./CreateExpense.js";
import { ExpenseListNew } from "./ExpensesListNew.js";
import "./ExpenseList.css";

const ExpenseList = () => {
  let history = useHistory();

  const redirect = () => {
    // eslint-disable-next-line no-restricted-globals
    history.push("/create");
  };

  const handleClick = (e) => {
    e.preventDefault();
    //isExpenseListButtonClicked = false;
    console.log("test button click");
    //console.log(isExpenseListButtonClicked);
  };

  return (
    <div>
      <div>
        <CardGroup>
          <Card
            className="categoryCard"
            as="a"
            onClick={redirect}
            style={{ cursor: "pointer" }}
          >
            <Card.Img variant="top" src="./images/housing.jpg" />
            <Card.Body>
              <Card.Title>Housing</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <Router>
                  <Route
                    to="/"
                    className="btn btn-primary"
                    exact
                    component={ExpenseList}
                  >
                    Explore
                  </Route>
                </Router>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card className="categoryCard">
            <Card.Img variant="top" src="./images/transportation.jpg" />
            <Card.Body>
              <Card.Title>Transportation</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="categoryCard">
            <Card.Img variant="top" src="./images/food.jpg" />
            <Card.Body>
              <Card.Title>Food</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card className="categoryCard">
            <Card.Img variant="top" src="./images/utilities.jpg" />
            <Card.Body>
              <Card.Title>Utilities</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="categoryCard">
            <Card.Img variant="top" src="./images/shopping.jpg" />
            <Card.Body>
              <Card.Title>Clothing</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="categoryCard">
            <Card.Img variant="top" src="./images/medical.jpg" />
            <Card.Body>
              <Card.Title>Medical/Healthcare</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export { ExpenseList };
