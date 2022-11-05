import React from 'react';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <form action="">
        <div className='names'>
          <div className="form-control">
            <label htmlFor="firstName"> First Name</label>
            <input type="text" placeholder="Enter your first name" id='first_name' />
          </div>
          <div className="form-control">
            <label htmlFor="lastName"> Last Name</label>
            <input type="text" placeholder="Enter your last name" id='last_name' />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="email" placeholder="Enter your email">
            Email
          </label>
          <input type="email" id='email' />
        </div>
        <div className="textarea">
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder={`Send me a message and I'll reply you as soon as possible...`}
          ></textarea>
        </div>
        <div className="agreement">
          <input type="checkbox" name="" id="" />
          <p>You agree to providing your data to who may contact you.</p>
        </div>
        <div className="contact-submit">
          <button type="submit" id='btn__submit'>Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
