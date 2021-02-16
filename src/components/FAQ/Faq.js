import React from "react";

import "./faq.scss";
import { faqs } from "./faqs";
import chevronRight from "../../assets/chevron-right.svg";
import close from "../../assets/close.svg";

function Faq() {
  return (
    <div>
      <div className="faq">
        <div>
          <h3 className="title">Frequently Asked Questions</h3>
          <ul className="list">
            {faqs.map((q, i) => (
              <li key={i} className="item">
                <button
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {q.question}{" "}
                    <img src={close} className='click-img' alt="show" />
                </button>
              </li>
            ))}
          </ul>

          <div className="signin">
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div>
              <input type="email" placeholder="Email address" />
              <button>
                GET STARTED{" "}
                <span>
                  <img
                    src={chevronRight}
                    style={{ width: "15px" }}
                    alt="chevron-right"
                  />
                </span>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
