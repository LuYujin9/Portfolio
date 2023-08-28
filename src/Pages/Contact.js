import { AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import { BsTelephone, BsMailbox } from "react-icons/bs";
import styled from "styled-components";
import "../components/style/Contact.css";

function Contact() {
  return (
    <main>
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
    </main>
  );
}
export default Contact;

const ContactList = styled.ul`
  margin: 2em auto 5em auto;
  width: 23em;
`;

const StyledListItem = styled.li`
  margin: 1em;
`;

const StyledLink = styled.a`
  padding: 0.3em 2em;
  color: white;
  background-color: var(--color-button);
  border-radius: 1em;
  &:hover {
    color: white;
    padding: 0.5em 2.2em;
  }
`;

const Styledparagraph = styled.p`
  padding: 0.3em 2em;
  color: white;
  background-color: var(--color-button);
  border-radius: 1em;
  &:hover {
    color: white;
    padding: 0.5em 2.2em;
  }
`;
