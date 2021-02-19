import React from "react";

import "./home.scss";
import netflix from "../../assets/netflix.svg";
import chevronRight from '../../assets/chevron-right.svg'

function Home() {
  return (
    <div className="wrapper">
      <header>
        <nav className="head">
          <div className="navbar">
            <div>
              <img src={netflix} className="logo" alt="netflix-logo" />
            </div>
            <div>
              <button>Sign in</button>
            </div>
          </div>
        </nav>
      </header>
      <div className="overlay"></div>

      <div className="home">
        <div className="body">
          <div>
            <div className="title">
              Unlimited movies, TV <br /> shows, and more.
            </div>
            <div className="sub-title">Watch anywhere. Cancel anytime.</div>
            <div className="signin">
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className='email-W'>
                <input type="email" placeholder="Email address" className='email'/>
                <div className='email-btn-W'>
                <button className='email-btn'>Get Started <span><img src={chevronRight} style={{width: '15px'}} alt='chevron-right'/></span></button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
