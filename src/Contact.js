import React from "react";
import "./css/Contact.css";

function Contact() {
  return (
    <main>
      <div className="page_block">
        <h3 className="page_title">Contact</h3>
        <p className="page_text">
          Interested in hiring me for your project or just want to say hi? You
          can fill in the contact form below or send me <br />
          an email to evans@yourwebsite.com .Want to get connected? Follow me on
          the social channels below.
        </p>
      </div>
      <div className="header_socialMedia">      
        <div className="header_socialMedia_edging">
          <a
            className="header_socialMedia_link"
            href="https://www.instagram.com/yuzefovych.alex/"
          >
            <svg
              className="header_socialMedia_link_svg"
              stroke="#5271ff"
              fill="#5271ff"
              stroke-width="0"
              viewBox="0 0 256 256"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
            </svg>
          </a>
        </div>
        <div className="header_socialMedia_edging">
          <a className="header_socialMedia_link" href="">
            <svg
              className="header_socialMedia_link_svg"
              stroke="#5271ff"
              fill="#5271ff"
              stroke-width="0"
              viewBox="0 0 256 256"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
            </svg>
          </a>
        </div>
        <div className="header_socialMedia_edging">
          <a
            className="header_socialMedia_link"
            href="https://www.linkedin.com/in/alex-yuzefovych-a3644b281/"
          >
            <svg
              className="header_socialMedia_link_svg"
              stroke="#5271ff"
              fill="#5271ff"
              stroke-width="0"
              viewBox="0 0 256 256"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
            </svg>
          </a>
        </div>
        <div className="header_socialMedia_edging">
          <a
            class="header_socialMedia_link"
            href="https://github.com/Yuzefovych-Alex"
          >
            <svg
              className="header_socialMedia_link_svg"
              stroke="#5271ff"
              fill="#5271ff"
              stroke-width="0"
              viewBox="0 0 256 256"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
            </svg>
          </a>
        </div>
        <div className="header_socialMedia_edging">
          <a
            class="header_socialMedia_link"
            href="https://github.com/Yuzefovych-Alex"
          >
            <svg
              className="header_socialMedia_link_svg"
              stroke="#5271ff"
              fill="#5271ff"
              stroke-width="0"
              viewBox="0 0 256 256"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="section"></div>
      <dir className="details">
        <h2 className="details_title">Contact Details</h2>
        <p className="details_text">
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything <br />
          embarrassing hidden in the middle of text.
        </p>
        <nav className="details_navigation">
          <div className="details_phone">
            <svg
              className="details_navigation_svg"
              stroke="#5271ff"
              fill="#5271ff"
              stroke-width="0"
              viewBox="0 0 256 256"
              height="1rem"
              width="1rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16Zm8,200a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8ZM140,60a12,12,0,1,1-12-12A12,12,0,0,1,140,60Z"></path>
            </svg>
            <div className="details_navigation_data">
              <span className="details_navigation_title">Phone</span>
              <p className="details_navigation_text">+421 952 170 295</p>
            </div>
          </div>
          <div className="details_location">
            <svg
              className="details_navigation_svg"
              stroke="#5271ff"
              fill="#5271ff"
              stroke-width="0"
              viewBox="0 0 256 256"
              height="1rem"
              width="1rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z"></path>
            </svg>
            <div className="details_navigation_data">
              <span className="details_navigation_title">Location</span>
              <p className="details_navigation_text">Slovakia, Kosice</p>
            </div>
          </div>
          <div className="details_email">
            <svg
              className="details_navigation_svg"
              stroke="#5271ff"
              fill="#5271ff"
              stroke-width="0"
              viewBox="0 0 256 256"
              height="1rem"
              width="1rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78Z"></path>
            </svg>
            <div className="details_navigation_data">
              <span className="details_navigation_title">Email</span>
              <p className="details_navigation_text">
                yuzefovych.alex@gmail.com
              </p>
            </div>
          </div>
        </nav>
      </dir>
      <div className="maps">
        <iframe
          className="maps_me"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210453.85086805013!2d21.074387611700747!3d48.69752394344597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee01b67c6957b%3A0x400f7d1c6978bd0!2z0JrQvtGI0LjRhtC1LCDQodC70L7QstCw0LrQuNGP!5e1!3m2!1sru!2sus!4v1739809955033!5m2!1sru!2sus"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <footer className="footer_data">Copyright &copy; 2024 Portfolify. All rights reserved.</footer>
    </main>
  );
}

export default Contact;
