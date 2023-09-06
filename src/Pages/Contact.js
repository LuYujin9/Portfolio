import "../components/style/Contact.css";
import { useState, useEffect } from "react";
import { BsTelephone, BsMailbox } from "react-icons/bs";
import { AiOutlineMail, AiOutlineMessage } from "react-icons/ai";

function Contact() {
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    setIsStart(true);
  }, []);

  return (
    <main>
      <div className={`${isStart ? "slide-up" : "slide-up-active"}`}>
        <h3>KONTAKT</h3>
        <ul className="contacts-list">
          <li className="contact">
            <h5>
              <AiOutlineMail />
              <strong> Schreibe mir eine Email:</strong>
            </h5>
            <a
              className="contact-link"
              href="mailto: wuwujane@hotmail.com"
              aria-label="link to write an email"
            >
              wuwujane@hotmail.com
            </a>
          </li>
          <li className="contact">
            <h5>
              <AiOutlineMessage />
              <strong> Schreibe mir eine Nachright:</strong>
            </h5>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/yujin-lu-119556267/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li className="contact">
            <h5>
              <BsTelephone />
              <strong> Rufe mich an:</strong>
            </h5>
            <a className="contact-link" href="tel:+491603427599">
              0160 3427599
            </a>
          </li>
          <li className="contact">
            <h5>
              <BsMailbox />
              <strong> Sende mir einen Berief: </strong>
            </h5>
            <p className="address">PutjatinPlatz 2, 01259 Dresden</p>
          </li>
        </ul>
      </div>
    </main>
  );
}
export default Contact;
