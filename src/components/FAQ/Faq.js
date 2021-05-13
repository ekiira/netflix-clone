import React, { useState } from "react";

import "./faq.scss";
import { faqs } from "./faqs";
import chevronRight from "../../assets/chevron-right.svg";
import close from "../../assets/close.svg";

function Faq() {
  const [iFaqs, setIFaqs] = useState(faqs);
  const onFaqClick = (id) => {
    const newFaqs = iFaqs.map((faq) => {
      if (faq.id === id) {
        const updatedFaq = {
          ...faq,
          isOpen: !faq.isOpen,
        };

        return updatedFaq;
      }
      return faq;
    });
    setIFaqs(newFaqs);
  };
  return (
    <div>
      <div className="faq">
        <div className='container'>
          <h3 className="title">Frequently Asked Questions</h3>
          <ul className="list">
            {iFaqs.map((faq) => (
              <li key={faq.id} className="item">
                <button onClick={() => onFaqClick(faq.id)}>
                  {faq.question}{" "}
                  <img
                    src={close}
                    className={`icon ${faq.isOpen ? `open-icon` : `close-icon`}`}
                    alt="show"
                  />
                </button>
                {faq.isOpen ? (
                  <div className="open-faq">
                    <p>{faq.answerOne}</p>
                    <p>{faq.answerTwo}</p>
                  </div>
                ) : null}
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
                Get Started{" "}
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
