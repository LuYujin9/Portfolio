import styled from "styled-components";

function Resume() {
  return (
    <main>
      <h3>LEBENSLAUF</h3>
      <StyledImag className="" src="/images/CV.png" alt="CV from Yujin" />
    </main>
  );
}
export default Resume;

const StyledImag = styled.img`
  margin: auto 10%;
  width: 80%;
`;
