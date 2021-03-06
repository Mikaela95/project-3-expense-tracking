import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const CategoryItem = () => {
  // Fetch the category -> currently all
  useEffect(() => {
    fetchItem();
  }, []);

  const [items, setItem] = useState([]);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      "http://localhost:4000/api/categories/all-categories",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const items = await fetchItem.json();
    setItem(items);
    console.log(items);
    console.log(items[0]);
  };

  return (
    <div>
      <CardGroup>
        
        {items.map((item) => (
          <Card className="categoryCard" key={item._id}>
            <Link to={`/category/${item.name}`}>
              <Card.Img variant="top" src={`../images/${item.name}.jpg`} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
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
        ))}
      </CardGroup>
    </div>
  );
};

export { CategoryItem };
