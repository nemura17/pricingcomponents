import React from 'react'
import '../App.css'

function PricingComponent({ plan: { planName, annualPrice, monthlyPrice, storage, usersAllowed, sendingUsage, learnMore} }) {
    return (
        <div className = 'pricingComponent'>
            <h4> {planName} </h4>
            <p> <span className = 'monthly' > &#36; {monthlyPrice} </span> </p> 
            <ul>
                <li> {storage} </li>
                <li> {usersAllowed} </li>
                <li> {sendingUsage} </li>
            </ul>
            <button> { learnMore } </button>
        </div>
    )
}

export default PricingComponent
