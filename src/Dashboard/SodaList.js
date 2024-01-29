// FoodList.js

import React, { useState } from "react";
import "./SodaList.css";

const SodaList = () => {
  //   const [total, setTotal] = useState(0);
  const [foodItems, setFoodItems] = useState([
    { name: "Orange", quantity: 10 },
    { name: "Lemon", quantity: 15 },
    { name: "BlueBerry", quantity: 12 },
    { name: "Cola", quantity: 22 },
    { name: "Jeera", quantity: 40 },
    { name: "Pineapple", quantity: 25 },
    { name: "Grape", quantity: 35 },
    { name: "American", quantity: 15 },
    { name: "American Salt", quantity: 20 },
    { name: "Coffee", quantity: 30 },
  ]);

  //   let totalQty = 0;
  //   const foodItems = [
  //     { name: "Orange", quantity: 10 },
  //     { name: "Lemon", quantity: 15 },
  //     { name: "BlueBerry", quantity: 12 },
  //     { name: "Cola", quantity: 22 },
  //     { name: "Jeera", quantity: 40 },
  //     { name: "Pineapple", quantity: 25 },
  //     { name: "Grape", quantity: 35 },
  //     { name: "American", quantity: 15 },
  //     { name: "American Salt", quantity: 20 },
  //     { name: "Coffee", quantity: 30 },
  //   ];

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
    //   <h2>Seetimar</h2>
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
      <h2>Seetmar</h2>
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

export default SodaList;
