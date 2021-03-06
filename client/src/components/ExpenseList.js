import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CategoryItem } from "./CategoryItem.js";
import "./ExpenseList.css";

const ExpenseList = () => {
  const categoryNames = ["Housing", "Transportation", "Food", "Utilities", "Clothing", "Healthcare"];

  return (
    <div>
      <div>
        <CardGroup>
          <Card className="categoryCard">
            <Link to={`/category/${categoryNames[0].toLowerCase()}`}>
              <Card.Img variant="top" src="./images/housing.jpg" />
              <Card.Body>
                <Card.Title>{categoryNames[0]}</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Link>
          </Card>

          <Card className="categoryCard">
            <Card.Img variant="top" src="./images/transportation.jpg" />
            <Card.Body>
              <Card.Title>{categoryNames[1]}</Card.Title>
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
              <Card.Title>{categoryNames[2]}</Card.Title>
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
              <Card.Title>{categoryNames[3]}</Card.Title>
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
              <Card.Title>{categoryNames[4]}</Card.Title>
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
              <Card.Title>{categoryNames[5]}</Card.Title>
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
