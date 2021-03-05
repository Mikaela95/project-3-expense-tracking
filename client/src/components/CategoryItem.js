import React, { useEffect, useState } from "react";

const CategoryItem = () => {
  // Fetch the category -> currently all
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      "http://localhost:4000/api/categories/all-categories",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    );

    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  return <h1>test</h1>;
};

export { CategoryItem };
