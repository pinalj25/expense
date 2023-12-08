import React, { useState } from "react";
import Header from "./Header";
import Balance from "./Balance";
import AddTransaction from "./AddTransaction";
import "./Ov.css";

export default function OverviewComponent() {
  const [transcations, setTransactions] = useState([]);
  const addTransaction = (newTransaction) => {
    setTransactions([...transcations, newTransaction]);
  };

  return (
    <div className="-container3">
      <div className=" bl">
        <Balance />
        <AddTransaction addTransaction={addTransaction} />
      </div>
    </div>
  );
}
