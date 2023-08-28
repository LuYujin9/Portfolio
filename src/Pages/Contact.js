import { AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import { BsTelephone, BsMailbox } from "react-icons/bs";
import styled from "styled-components";

function Contact() {
  return (
    <main>
      <h3>KONTAKT</h3>
      <ContactList>
        <StyledListItem>
          <p>
            <AiOutlineMail />
            <strong> Schreibe mir eine Email:</strong>
          </p>
          <StyledLink
            href="mailto: wuwujane@hotmail.com"
            aria-label="link to write an email"
          >
            wuwujane@hotmail.com
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <p>
            <AiOutlineMessage />
            <strong> Schreibe mir eine Nachright:</strong>
          </p>

          <StyledLink
            href="https://www.linkedin.com/in/yujin-lu-119556267/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <p>
            <BsTelephone />
            <strong> Rufe mich an:</strong>
          </p>
          <StyledLink href="tel:+491603427599">0160 3427599</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <p>
            <BsMailbox />
            <strong> Sende mir einen Berief: </strong>
          </p>
          <Styledparagraph>PutjatinPlatz 2, 01259 Dresden</Styledparagraph>
        </StyledListItem>
      </ContactList>
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
