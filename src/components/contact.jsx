
import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import { FaMapMarker, FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './contact.css';

const initializeEmailJS = () => {
  emailjs.init('bgdBD4UzirC1EIzt-');
};

const SendMail = () => {
  initializeEmailJS();
  var params = {
    from_name: document.getElementById("fullname").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value
  };
  emailjs.send("service_zjj6z7b", "template_1lb8sxh", params).then(function (res) {
    alert("Success!" + res.status)
  });
};

const Contact = () => {
  useEffect(() => {
    initializeEmailJS();
  }, []);
  const iconSize=30;

  return (
    <div className="contact-container">
      <div className="contact-inner-container">
        <div className="contact-info-container">
          <h3 className="contact-heading">Contact Us</h3>
          <p className="contact-description">
            We're open for any suggestion or just to have a chat.
          </p>
          <div className="line"></div>

          <div className="contact-details">
            <h3><FaMapMarker /> Address</h3>
            <p>IIIT LUCKNOW</p>
          </div>
          <hr />

          <div className="contact-details">
            <h3><FaEnvelope /> Email</h3>
            <p>yaminireddy2023@mail.com</p>
          </div>
          <hr />

          <div className="contact-details">
            <h3><FaPhone /> Lets Talk</h3>
            <p>+91 2337543210</p>
          </div>
          <hr />
          
          <div className="social-link-container">
            {/* <divFaInstagram />
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin /> */}
            {/* <FaInstagram style={{ marginRight: '13px' }} />
      <FaFacebook style={{ marginRight: '13px' }} />
      <FaTwitter style={{ marginRight: '13px' }} />
      <FaLinkedin /> */}
       <FaInstagram style={{ marginRight: '13px', fontSize: iconSize }} />
      <FaFacebook style={{ marginRight: '13px', fontSize: iconSize }} />
      <FaTwitter style={{ marginRight: '13px', fontSize: iconSize }} />
      <FaLinkedin style={{ fontSize: iconSize }} />
          </div>
        </div>

        <div className="contact-form">
          <form className="form">
            <div className="form-group">
              <input type="text" name="name" id="fullname" className="input-field form-input" placeholder="Name" />
            </div>
            <div className="form-group">
              <input type="email" name="email" id="email_id" className="input-field form-input" placeholder="Email" />
            </div>
            <div className="form-group">
              <textarea name="message" id="message" rows="5" className="input-field form-input" placeholder="Message"></textarea>
            </div>
            <div className="form-group">
              <input type="button" onClick={SendMail} className="input-field submit-btn" value="Send Email" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

