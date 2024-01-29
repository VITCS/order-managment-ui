// FoodList.js

import React, { useState } from "react";

const Seetmar = () => {
  const [foodItems, setFoodItems] = useState([
    { name: "Apple", quantity: 3 },
    { name: "Banana", quantity: 5 },
    { name: "Pizza", quantity: 1 },
    { name: "Salad", quantity: 2 },
    { name: "Pasta", quantity: 4 },
    { name: "Burger", quantity: 2 },
    { name: "Ice Cream", quantity: 3 },
    { name: "Orange Juice", quantity: 1 },
    { name: "Chicken Sandwich", quantity: 2 },
    { name: "Coffee", quantity: 3 },
  ]);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedFoodItems = [...foodItems];
    updatedFoodItems[index].quantity = newQuantity;
    setFoodItems(updatedFoodItems);
  };

  return (
    <div>
      <h2>Food List</h2>
      <ul>
        {foodItems.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> - Quantity:{" "}
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                handleQuantityChange(index, parseInt(e.target.value, 10))
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Seetmar;
