// FoodList.js

import React from "react";
import PopList from "./PopList";
import SodaList from "./SodaList";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <PopList />
      <SodaList />
    </div>
  );
};

export default Dashboard;
