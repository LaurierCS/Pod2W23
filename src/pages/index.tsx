import OverviewGraph from "../components/OverviewGraph/OverviewGraph";
import { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { app, db } from '../scripts/firebase/config';




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
    date?: Date;
    category?: string;
    details?: ExpenseDataDetails;
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
      amount: e.target.value
    }))
  }


  const setDate = (e) => {
    setExpenseData(curr => ({
      ...curr,
      date: e.target.value
    }))
  }


  const setCategory = (e) => {
    setExpenseData(curr => ({
      ...curr,
      category: e.target.value
    }))
  }


  const addExpense = () => {
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
        <option>Entertainment</option>
        <option>Food</option>
        <option>Rent</option>
        <option>Insurance</option>
      </select>
      <br />
      <button onClick={addExpense}>Add Expense</button>
      <br />
      <pre>{JSON.stringify(expenseData, null, 2)}</pre>
    </>
  );
}

