// FoodList.js

import React, { useState } from "react";
import "./PopList.css";

const PopList = () => {
  const [foodItems, setFoodItems] = useState([
    { name: "Lemon", quantity: 10 },
    { name: "BlueBerry", quantity: 15 },
    { name: "Orange", quantity: 19 },
    { name: "Cola", quantity: 22 },
    { name: "Jeera", quantity: 40 },
    { name: "Pineapple", quantity: 25 },
    { name: "Grape", quantity: 35 },
    { name: "American", quantity: 15 },
    { name: "American Salt", quantity: 20 },
    { name: "Coffee", quantity: 30 },
  ]);

  // const foodItems = [
  //   { name: "Lemon", quantity: 10 },
  //   { name: "BlueBerry", quantity: 15 },
  //   { name: "Orange", quantity: 19 },
  //   { name: "Cola", quantity: 22 },
  //   { name: "Jeera", quantity: 40 },
  //   { name: "Pineapple", quantity: 25 },
  //   { name: "Grape", quantity: 35 },
  //   { name: "American", quantity: 15 },
  //   { name: "American Salt", quantity: 20 },
  //   { name: "Coffee", quantity: 30 },
  // ];

  const totalQuantity = foodItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const handleQuantityChange = (index, newQuantity) => {
    const updatedFoodItems = [...foodItems];
    updatedFoodItems[index].quantity = newQuantity;
    setFoodItems(updatedFoodItems);
  };

  return (
    // <div className="card">
    //   <h2>Pop</h2>
    //   <ul>
    //     {foodItems.map((item, index) => (
    //       <li key={index}>
    //         <strong>{item.name}</strong> - {item.quantity}
    //       </li>
    //     ))}
    //   </ul>
    //   <h3>Total Quantity: {totalQuantity}</h3>
    // </div>
    <div className="card">
      <h2>Pop</h2>
      <ul>
        {foodItems.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> -{" "}
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
      <h3>Total Quantity: {totalQuantity}</h3>
      <div>
        <button class="btn">Update</button>
      </div>
    </div>
  );
};

export default PopList;
