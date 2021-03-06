import React, { useEffect, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

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
  };

  return (
    <Jumbotron style={{ marginBottom: "0px" }}>
      {items.map(item => (
        <h1 key={item._id}>{item.name}</h1>
      ))}
    </Jumbotron>
  );
};

export { CategoryItem };
