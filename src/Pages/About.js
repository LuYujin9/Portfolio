import { AiFillStar, AiOutlineStar } from "react-icons/ai";
function About() {
  return (
    <main>
      <h2>ABOUT ME</h2>
      <section className="description">
        <p className="about-me-context">
          Ich bin Yujin Lu und schon 4 Jahren in Deutschland gewohnt. Diese Jahr
          habe dieses Jahr erfolgreich einen Intensivkurs in Vollzeit für Web
          Development erfolgreich abgeschlossen und will meine ganze
          Leidenschaft für das Programmieren in eine berufliche Chance
          umwandeln. Die Herausforderung und die Möglichkeit, mich
          kontinuierlich weiterzuentwickeln, faszinieren mich ungemein.
        </p>
      </section>
      <section className="informations-container">
        <img src="/images/my-foto.jpg" alt="my foto" className="my-foto" />
        <div className="informations">
          <h3>Mehre Infomationen</h3>
          <ul>
            <li>
              <p>
                <strong>Geburtsdatum: </strong>18.04.1984
              </p>
            </li>
            <li>
              <p>
                <strong>Stadt: </strong>Dresden
              </p>
            </li>
            <li>
              <p>
                <strong>Bildung: </strong>Bechelor
              </p>
            </li>
            <li>
              <p>
                <strong>Tel: </strong>0160 3427599
              </p>
            </li>
            <li>
              <p>
                <strong>Email: </strong>wuwujane@hotmail.com
              </p>
            </li>
            <li>
              <p>
                <strong>Github:</strong>https://github.com/LuYujin9
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h3>SKILLS</h3>
        <ul className="skill-container">
          <li>
            <p className="skill">Javascript ES8+</p>
            <div className="rate-of-skills">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </li>
          <li>
            <p className="skill">React 18.2</p>
            <div className="rate-of-skills">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </li>
          <li>
            <p className="skill">Next.js</p>
            <div className="rate-of-skills">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </li>
          <li>
            <p className="skill">HTML 5</p>
            <div className="rate-of-skills">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </li>
          <li>
            <p className="skill">CSS 3</p>
            <div className="rate-of-skills">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </li>
          <li>
            <p className="skill">MongoDB</p>
            <div className="rate-of-skills">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </li>
          <li>
            <p className="skill">illustrator</p>
            <div className="rate-of-skills">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          </li>
          <li>
            <p className="skill">Auto CAD</p>
            <div className="rate-of-skills">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </li>
        </ul>
      </section>
      <section>
        <h3>Sprachen</h3>
        <ul className="language-container">
          <li>
            <p className="skill">Deutsch: C1</p>
            <div className="rate-of-skills">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </li>
          <li>
            <p className="skill">English: B2</p>
            <div className="rate-of-skills">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
          </li>
          <li>
            <p className="skill">Chinesisch: Muttersprache</p>
            <div className="rate-of-skills">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
export default About;
