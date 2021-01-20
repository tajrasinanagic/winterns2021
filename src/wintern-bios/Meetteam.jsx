import React from 'react';
import {Link} from "react-router-dom";
const Meetteam = ({bioToShow, color='red'}) => {
  const { useState } = React;

  const [showStateEx, setShowStateEx] = useState(false);

  const randomNum = Math.random();


  return (
     <> 
     <div className="biocards">
    <p>This is the team's page!</p>
    {/* CARD ONE */}
    <div className="cardtajra">
    <img className="tajrasimage" src="https://bit.ly/3bVDJQD"></img>
    <div className="container">
    <h4><b>Tajra Sinanagic</b></h4>
    <p className="introduction">Software Engineering Intern</p>
     <Link to="/Tajra">
     <button type="button">
          Click Me!
     </button>
     </Link>
  </div>
  </div>
  {/* CARD TWO */}
  <div className="cardandrea">
    <img className="andreasimage" src="https://bit.ly/3sJKaw8"></img>
    <div className="container">
    <h4><b>Andrea Cajamarca</b></h4>
    <p className="introduction">Software Engineering Intern</p>
    <Link to="/Andrea">
     <button type="button">
          Click Me!
     </button>
     </Link>
  </div>
  </div>
  {/* CARD THREE */}
  <div className="cardlara">
    <img className="larasimage" src="https://bit.ly/3qvm8mC"></img>
    <div className="container">
    <h4><b>Lara Choudhury</b></h4>
    <p className="introduction">Software Engineering Intern</p>
    <Link to="/Lara">
     <button type="button">
          Click Me!
     </button>
     </Link>
  </div>
  </div>
  {/* CARD FOUR */}
  <div className="carddana">
    <img className="danasimage" src="https://bit.ly/36131ZE"></img>
    <div className="container">
    <h4><b>Dana Fishman</b></h4>
    <p className="introduction">Software Engineering Intern</p>
    <Link to="/Dana">
     <button type="button">
          Click Me!
     </button>
     </Link>
  </div>
  </div>
  {/* CARD FIVE */}
  <div className="cardroma">
    <img className="romasimage" src="https://bit.ly/2Y05pLO"></img>
    <div className="container">
    <h4><b>Roma Cooper</b></h4>
    <p className="introduction">Software Engineering Intern</p>
    <Link to="/Roma">
     <button type="button">
          Click Me!
     </button>
     </Link>
  </div>
  </div>
  </div>
    </>
  );
}




export default Meetteam;