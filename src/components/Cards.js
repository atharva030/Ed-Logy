import React from "react";
import "./Style/Cards.css";

export default function Cards() {
  return (
    <>
      <div className="container" id="course">
        <div className="wrapper">
          <div className="pricing-table">
            <div className="pricing-box">
              <h2>Silver</h2>
              <span className="price">Free Lifetime</span>
              <span className="pricing-table-divider"></span>
           
              <span className="pricing-table-divider"></span>
              <ul>
              <li>Free Online Lecture Access</li>
                <li>No Cashback </li>
                <li>Demo Doubt Sessions</li>
                <li>Demo Notes</li>
              </ul>
              <a className="btn" href="#">
                <b>Sign Up</b>
              </a>
            </div>
           
            <div className="pricing-box-big">
              <h2>Gold</h2>
              
              <span className="price">$50/year</span>
              <span className="pricing-table-divider"></span>
             
              <span className="pricing-table-divider"></span>
              <ul>
                <li>Free Online Lecture Access</li>
                <li>Extra 3% Cashback </li>
                <li>Doubt Sessions</li>
                <li>All Hand Written Notes</li>
              </ul>
              <a className="btn" href="#">
                <b>Sign Up</b>
              </a>
            </div>
            <div className="pricing-box pricing-table-best">
              <h2>Diamond</h2>
              <span className="price">$100/year</span>
              <span className="pricing-table-divider"></span>
            
              <span className="pricing-table-divider"></span>
              <ul>
              <li>Free Online Lecture Access</li>
                <li>Extra 5% Cashback </li>
                <li>Doubt Sessions(Online + Offline)</li>
                <li>All Hand Written Notes with CD</li>
              </ul>
              <a className="btn" href="#">
                <b>Sign Up</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
