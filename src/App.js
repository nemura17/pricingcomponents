import React, { useState, useEffect } from 'react';
import './App.css'
import PricingComponent from './components/PricingComponent'
import data from './assets/data.json'

function App() {

  const [plans, setPlans] = useState([]);

  useEffect(() => setPlans(data));

  console.log(plans);

  return (
    <div className = 'app'>
      <h1 className = 'headerText'> Our Pricing </h1>
      <div className = 'plansContainer'>
          {
            plans.length === 0 ? ( <p> Sorry, there are no plans! </p> ) : (
              plans.map((plan) => (
                <PricingComponent plan = {plan} key = {plan.id} />
              ))
            )
          }
        </div>
    </div>
  );
}

export default App;
