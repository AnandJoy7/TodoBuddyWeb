import React from "react";

function Contact() {
  return (
    <div>
      <div className="cards">
        <div className="cards-details">
          <p className="text-title">Contact Us</p>
          <p className="text-body">
            {" "}
            We value your questions and feedback regarding our
            content. Please feel free to contact us directly at
            contact --<em>@todobuddyweb.com</em>
          </p>
        </div>
        <button className="cards-button">More info</button>
      </div>
      <p></p>
    </div>
  );
}

export default Contact;
