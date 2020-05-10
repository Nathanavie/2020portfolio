import React from 'react';

const Form = props => {
  return(

      <form action="https://www.enformed.io/algg8tco" method="POST">
        <div className="top-fields">
          <div>
            <label>Name</label>
            <input
              name="first-name"
              type="text"
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              name="email-address"
              type="email"
              required
            />
          </div>
        </div>
        <div className="textarea">
          <label>Your Message</label>
          <textarea
            name="message"
            required
          />
        </div>
        <input
          type="submit"
          value="Submit"
        />
      </form>
  )
}
export default Form
