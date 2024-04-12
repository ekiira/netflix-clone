import React from "react";

import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_container">
          <p className="title">Questions? Contact us.</p>

          <div className="row">
            <div className="col">
              <ul>
                <li>FAQ</li>
                <li>Investor Relations</li>
                <li>Privacy</li>
                <li>Speed Test</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preerences</li>
                <li>Legal Notices</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Account</li>
                <li>Ways to Watch</li>
                <li>Corporate Information</li>
                <li>Netflix Originals</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Media Center</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <p className="bottom">Netflix Nigeria</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
