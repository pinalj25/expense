import logo from './logo.svg';
import './App.css';

import Login from './Components/Login';
import Header from './Components/Header.js';
import Balance from './Components/Balance.js';
import IncomeExpense from './Components/IncomeExpense.js';
import TranscationList from './Components/TranscationList.js';
import AddTransaction from './Components/AddTransaction.js';
import Home from './Components/Home.js';
import React,{useState} from 'react';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import Registeration from './Components/Registeration.js';
import OverviewComponent from './Components/OverviewComponent.js';
function App() {
  // const [transcations, setTransactions] = useState([]);
  // const addTransaction = (newTransaction) => {
  //   // Update the transactions array with the new transaction
  //   setTransactions([...transcations, newTransaction]);
  // };

  return (
   <>
   
   <Router>
      <Routes>
        < Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Registeration/>}/>
        <Route path='/et' element={<OverviewComponent/>}/>
      </Routes>
  </Router>
  
   {/* <Login/> */}
   {/* <Header/>
   <div className=' container'>
    
    
    <Balance/>
    <AddTransaction  addTransaction={ addTransaction}   />
   </div> */}
   </>
  );
}

export default App;
