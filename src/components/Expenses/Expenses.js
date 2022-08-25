import uuid from "react-uuid";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

import { useState } from "react";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterSelect, setFilterSelect] = useState("2022");

  const saveFilter = (value) => {
    setFilterSelect(value);
  };

  let filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filterSelect;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterSelect} onChangeFilter={saveFilter} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
