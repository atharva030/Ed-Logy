import React from 'react'
import './Style/Team.css'
import Men1 from "./Images/Men1.jpg"
import Girl from "./Images/Girl.jpg"
import Girl2 from "./Images/Girl2.jpg"
import Girl3 from "./Images/Girl3.jpg"
import Men2 from "./Images/Men2.jpg"
export default function Team() {
  return (
    <section id="team" className="team">

<h1 className="heading">our team</h1>

<div className="row">

<div className="card">
  <div className="image">
    <img src={Men1} alt=""/>
  </div>
  <div className="info">
    <h3>Johnson</h3>
    
    <div className="icons">
      <a href="#" className="fab fa-facebook-f"></a>
      <a href="#" className="fab fa-twitter"></a>
      <a href="#" className="fab fa-instagram"></a>
    </div>
  </div>
</div>

<div className="card">
  <div className="image">
    <img src={Girl} alt=""/>
  </div>
  <div className="info">
    <h3>Karry</h3>
    <div className="icons">
      <a href="#" className="fab fa-facebook-f"></a>
      <a href="#" className="fab fa-twitter"></a>
      <a href="#" className="fab fa-instagram"></a>
    </div>
  </div>
</div>

<div className="card">
  <div className="image">
    <img src={Girl2} alt=""/>
  </div>
  <div className="info">
    <h3>Mery</h3>
 
    <div className="icons">
      <a href="#" className="fab fa-facebook-f"></a>
      <a href="#" className="fab fa-twitter"></a>
      <a href="#" className="fab fa-instagram"></a>
    </div>
  </div>
</div>

<div className="card">
  <div className="image">
    <img src={Girl3} alt=""/>
  </div>
  <div className="info">
    <h3>Jane</h3>
    <div className="icons">
      <a href="#" className="fab fa-facebook-f"></a>
      <a href="#" className="fab fa-twitter"></a>
      <a href="#" className="fab fa-instagram"></a>
    </div>
  </div>
</div>

<div className="card">
  <div className="image">
    <img src={Men2} alt=""/>
  </div>
  <div className="info">
    <h3>Markin</h3>
    <div className="icons">
      <a href="#" className="fab fa-facebook-f"></a>
      <a href="#" className="fab fa-twitter"></a>
      <a href="#" className="fab fa-instagram"></a>
    </div>
  </div>
</div>

</div>


</section>
  )
}
