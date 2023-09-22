import "../styles/About.css";
import { useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function About() {
  useEffect(() => {
    const slideInItems = document.querySelectorAll(".slide-up-item");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-up");
          entry.target.classList.remove("slide-up-active");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    slideInItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <div className="slide-up-item slide-up-active">
        <h3>ABOUT ME</h3>
        <section className="description-container">
          <p className="my-description">
            Ich bin Yujin Lu und lebe bereits seit 4 Jahren in Deutschland.
            Diese Jahr habe ich erfolgreich einen Intensivkurs in Vollzeit für
            Web Development erfolgreich abgeschlossen und will jetzt meine ganze
            Leidenschaft für das Programmieren in eine berufliche Chance
            umwandeln. Diese neue Herausforderungen und die Möglichkeit, mich
            kontinuierlich weiterzuentwickeln, faszinieren mich dabei ungemein.
          </p>
          <img src="/images/my-photo.png" alt="me" className="my-photo" />
        </section>
      </div>
      <div className="slide-up-item slide-up-active">
        <h4>INFOMATIONEN</h4>
        <section className="informations-container">
          <p className="information">
            <strong>Geburtsdatum: </strong>18.04.1984
          </p>
          <p className="information">
            <strong>Wohnort: </strong>Dresden
          </p>
          <p className="information">
            <strong>Bildung: </strong>Bechelor
          </p>
          <p className="information">
            <strong>Tel: </strong>0160 3427599
          </p>
          <p className="information">
            <strong>Email: </strong>wuwujane@hotmail.com
          </p>
          <p className="information">
            <strong>Github:</strong>https://github.com/LuYujin9
          </p>
        </section>
      </div>
      <div className="slide-up-item slide-up-active">
        <section>
          <h4>SKILLS</h4>
          <ul className="skills-container">
            <li className="skill">
              <p>Javascript ES8+</p>
              <div className="rates">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </li>
            <li className="skill">
              <p>React 18.2</p>
              <div className="rates">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </li>
            <li className="skill">
              <p>Next.js</p>
              <div className="rates">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </li>
            <li className="skill">
              <p>HTML 5</p>
              <div className="rates">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </li>
            <li className="skill">
              <p>CSS 3</p>
              <div className="rates">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </li>
            <li className="skill">
              <p>MongoDB</p>
              <div className="rates">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </li>
            <li className="skill">
              <p>illustrator</p>
              <div className="rates">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </li>
            <li className="skill">
              <p>Auto CAD</p>
              <div className="rates">
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
      </div>
      <div className="slide-up-item slide-up-active">
        <section>
          <h4>SPRACHE</h4>
          <ul className="languages-container">
            <li className="language">
              <p>Deutsch: C1</p>
              <div className="rates">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </li>
            <li className="language">
              <p>English: B2</p>
              <div className="rates">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            </li>
            <li className="language">
              <p>Chinesisch: MS</p>
              <div className="rates">
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
      </div>
    </main>
  );
}
export default About;
