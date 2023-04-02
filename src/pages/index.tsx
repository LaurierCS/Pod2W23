import OverviewGraph from "../components/OverviewGraph/OverviewGraph";
import { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../scripts/firebase/config';
import categoryToColor from "../tools/categoryToColor";

export default function Home() {
  return (
    <>
      <div><OverviewGraph /></div>
      <div style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}><TestingPieGraph /></div>
    </>
  );
}

const TestingPieGraph = () => {
  interface ExpenseData {
    name?: string;
    amount?: number;
    date?: string;
    category?: CategoryDetails;
    details?: ExpenseDataDetails;
  }

  interface CategoryDetails {
    name?: string;
    color?: string;
  }

  interface ExpenseDataDetails {
    recurring: boolean;
    interval: number;
    timePeriod: string;
  }

  const [expenseData, setExpenseData] = useState<ExpenseData>({});

  const setName = (e) => {
    setExpenseData(curr => ({
      ...curr,
      name: e.target.value
    }))
  }

  const setAmount = (e) => {
    setExpenseData(curr => ({
      ...curr,
      amount: Number(e.target.value)
    }))
  }

  const setDate = (e) => {
    setExpenseData(curr => ({
      ...curr,
      date: e.target.value
    }))
  }

  const setCategory = (e) => {
    const categoryColor = categoryToColor(e.target.value);
    setExpenseData(curr => ({
      ...curr,
      category: {name: e.target.value, color: categoryColor}
    }))
  }

  const addExpense = () => {
    console.log(expenseData);
    addDoc(collection(db, "expenses"), expenseData);
  }
  return(
    <>
      <h3>Expense Name</h3>
      <input onChange={setName}></input>
      <br />
      <h3>Amount $</h3>
      <input onChange={setAmount} type="number" min="0.01" step="0.01"></input>
      <br />
      <h3>Date</h3>
      <input onChange={setDate} type="date"></input>
      <br />
      <h3>Category</h3>
      <select onChange={setCategory}>
        <option>Food</option>
        <option>Travel</option>
        <option>Entertainment</option>
        <option>Shopping</option>
        <option>Health</option>
        <option>Bills</option>
        <option>Other</option>

      </select>
      <br />
      <button onClick={addExpense}>Add Expense</button>
      <br />
      <pre>{JSON.stringify(expenseData, null, 2)}</pre>
    </>
  );
}

