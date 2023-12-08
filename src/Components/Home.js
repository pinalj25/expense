
import React from 'react'
import './balance.css';
import Navbar from './Navbar';

export default function Home() {
  return (
    <>
     <Navbar/>
    <div className="home-page">
      
  <header>
    <h1>Expense Tracker</h1>
    <p>Take control of your finances with our intuitive expense tracking app.</p>
  </header>
  <section className="features">
    <div className="feature">
      <h2>Track Expenses</h2>
      <p>Record and categorize your expenses effortlessly.</p>
    </div>
    <div className="feature">
      <h2>Set Budgets</h2>
      <p>Create budgets for different categories to manage your spending.</p>
    </div>
    <div className="feature">
      <h2>Visualize Spending</h2>
      <p>View charts and graphs to analyze your spending patterns.</p>
    </div>
  </section>
  <section className="call-to-action">
    <p>Ready to take control of your finances?</p>
    <button className="cta-button">Get Started</button>
  </section>
</div>
</>

  )
}
