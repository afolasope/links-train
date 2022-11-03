import React from 'react';

const Contact = () => {
  return (
    <>
      <div>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <form action="">
        <div>
          <label htmlFor="firstName"> First Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="lastName"> Last Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="email"> Email</label>
          <input type="email" />
        </div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <p>You agree to providing your data to  who may contact you.</p>
        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </>
  );
};

export default Contact;
