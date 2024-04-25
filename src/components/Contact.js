import cc from "./images/cc.webp";
import "./contact.css";
function Contact() {
  return (
    <>
      <h1>Contact page</h1>
      <div className="container">
        <div className="cc-content">
          <div className="cc-img">
            <img src={cc}></img>
          </div>
          <div className="cc-details">
            <ul>
              <li>Contact Number: +91-9738484xxx</li>
              <li>email: sportsmania123@gmail.com</li>
              <li>instagram handle: sports_mania</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
