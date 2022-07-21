import React from 'react';

const ContactBlock: React.FC = () => {
  return (
    <div className="contact__wrapper">
      <div className="container">
        <div className="contact__block">
          <div className="content__block">
            <h3>Contact</h3>
            <p>I am currently based in Simferopol, Crimea.</p>
            <p>If you have any questions please don’t hesitate to contact me.</p>
            <p>+7 978 678 92 97</p>
            <p>Photographs on this website are available for purchase.</p>
          </div>
          <div className="form__block">
            <div className="name__block">
              <label>Name *</label>
              <input type="text" name="first-name" />
              <input type="text" name="last-name" />
              <p>
                First Name
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Last Name
              </p>
            </div>
            <div className="email__block">
              <label>Email Address *</label>
              <input type="text" name="mail" />
            </div>
            <div className="message__block">
              <label>Message *</label>
              <textarea name="message"> </textarea>
            </div>
            <button className="contact__button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
