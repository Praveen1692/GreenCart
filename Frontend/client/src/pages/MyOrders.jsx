import React, { useEffect, useState } from "react";
import { dummyOrders } from "../assets/assets";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  const fetchMyOrders = async () => {
    setMyOrders(dummyOrders);
  };
  useEffect(() => {
    fetchMyOrders();
  }, [myOrders]);
  return (
    <div className="mt-16 pb-16">
      <div className="flex flex-col items-end w-max mb-8">
        <p className="text-2xl font-medium uppercase">My orders</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>
      {myOrders.map((order, index) => (
        <div>
          <p>
            <span></span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
