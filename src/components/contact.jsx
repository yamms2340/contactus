// import React,{useEffect} from 'react';
// // import { gsap } from 'gsap';
// import '../index.css'
// import { FaMapMarker, FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
// import './contact.css'
// const Contact = () => {

// //   useEffect(() => {
// //     gsap.from(".form-group", {
// //       duration: 1,
// //       delay: 0.2,
// //       opacity: 0,
// //       y: 20,
// //       stagger: 0.2,
// //       ease: "expo.inOut"
// //     });
    
// //     gsap.from(".contact-info-container > *", {
// //       duration: 1,
// //       delay: 0,
// //       opacity: 0,
// //       y: 20,
// //       stagger: 0.1,
// //       ease: "expo.inOut"
// //     });
// //   }, []);

// const EmailJSComponent = () => {
//   useEffect(() => {
//     // Create and append the external script
//     const script = document.createElement('script');
//     script.src = 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js';
//     script.type = 'text/javascript';
//     script.async = true;

//     // Define the initialization function
//     const initializeEmailJS = () => {
//       if (window.emailjs) {
//         window.emailjs.init('bgdBD4UzirC1EIzt-');
//         console.log('EmailJS initialized');
//       }
//     };

//     // Add event listener for script load
//     script.onload = initializeEmailJS;

//     // Append the script to the document body
//     document.body.appendChild(script);

//     // No cleanup function needed if you don't want to remove the script
//   }, []); // Empty dependency array ensures this effect runs only once after initial render

//   return (
//     <div>
//       <h1>EmailJS Initialization</h1>
//       <p>EmailJS has been initialized.</p>
//     </div>
//   );
// };


// const SendMail=()=>{
//   EmailJSComponent();
//   var params={
//     from_name:document.getElementById("fullname").value,
//     email_id:document.getElementById("emai_id").value,
//     message:document.getElementById("message").value
//     }
//     emailjs.send("service_zjj6z7b","template_1lb8sxh",params).then(function(res){
//     alert("Success!"+res.status)
//     })
// };
//   return (
//     <div className="contact-container">
//       <div className="contact-inner-container">
//         <div className="contact-info-container">
//           <h2 className="contact-heading">Contact_Us</h2>
//           <p className="contact-description">
//             We're open for any suggestion or just to have a chat.
//           </p>
//           <div className="line"></div>

//           <div className="contact-details">
//             <h3><FaMapMarker /> Address</h3>
//             <p>IIIT LUCKNOW</p>
//           </div>
//           <hr />

//           <div className="contact-details">
//             <h3><FaEnvelope /> Email</h3>
//             <p>mentalhealth@mail.com</p>
//           </div>
//           <hr />

//           <div className="contact-details">
//             <h3><FaPhone /> Lets Talk</h3>
//             <p>+91 9876543210</p>
//           </div>
//           <hr />

//           <div className="social-link-container">
//             <FaInstagram />
//             <FaFacebook />
//             <FaTwitter />
//             <FaLinkedin />
//           </div>
//         </div>

//         <div className="contact-form">
//           <form className="form">
//             <div className="form-group">
//               <input type="text" name="name" id="fullname" className="input-field form-input" placeholder="Name" />
//             </div>
//             <div className="form-group">
//               <input type="email" name="email" id="email_id" className="input-field form-input" placeholder="Email" />
//             </div>
//             <div className="form-group">
//               <textarea name="message" id="message" rows="5" className="input-field form-input" placeholder="Message"></textarea>
//             </div>
//             <div className="form-group">
//               <input type="submit" onclick={SendMail} className="input-field submit-btn" value="SendEmail" />
//             </div>
//           </form>
//         </div>
       
//       </div>
//     </div>


//   );
// }

// export default Contact;
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

  return (
    <div className="contact-container">
      <div className="contact-inner-container">
        <div className="contact-info-container">
          <h2 className="contact-heading">Contact Us</h2>
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
            <p>mentalhealth@mail.com</p>
          </div>
          <hr />

          <div className="contact-details">
            <h3><FaPhone /> Lets Talk</h3>
            <p>+91 9876543210</p>
          </div>
          <hr />

          <div className="social-link-container">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
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

