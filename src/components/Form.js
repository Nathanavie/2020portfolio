import React from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      emailSent: false,
      emailSuccess: null,
    }
  }

  sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_UAlwakRP', e.target, 'user_zW5A3HCHvYgRpgseVZ7bO')
      .then((result) => {
          console.log('Email sent', result.text);
          this.setState({
            emailSuccess: true,
            name: '',
            email: '',
            message: '',
          })
      }, (error) => {
          console.log(error.text);
          this.setState({
            emailSuccess: false,
          })
      });
    }

    handleChange = event => {
      const { name, value } = event.target

      this.setState({
        [name]: value,
      })
    }

    onChange = (value) => {
      console.log('captcha val ', value)
    }


  render() {
    let emailSuccessMessage = null;
    let emailMessageColour;

    if (this.state.emailSuccess) {
      emailSuccessMessage = "Email sent successfully! You should hear back from me soon.";
      emailMessageColour = "green";
    }

    if (!this.state.emailSuccess){
      emailSuccessMessage = "Error sending email, please try again!";
      emailMessageColour = "red";
    }

    if (this.state.emailSuccess === null) {
      emailSuccessMessage = null;
    }

    return(
        <form  onSubmit={this.sendEmail}>
          <div className="leftfield">
            <label>Name</label>
            <input
              name="name"
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
              required
            />
          </div>
          <div className="leftfield">
            <label>Email</label>
            <input
              name="email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
              required
            />
          </div>
          <div className="leftfield captcha">
            <ReCAPTCHA
              sitekey="6LeM5voUAAAAAEOd9jSAjiUsqDshsKSWMnfvIMjC"
              onChange={this.onChange}
            />
          </div>
          <div className="textarea">
            <label>Your Message</label>
            <textarea
              name="message"
              onChange={this.handleChange}
              value={this.state.message}
              required
            />
          </div>
          <input
            type="submit"
            value="Submit"
          />
          <p className="validationMessage"
              style={{
                textAlign: 'center',
                color: `${emailMessageColour}`
              }}
          >
              {emailSuccessMessage}
          </p>
        </form>
    )
  }
}

export default Form
