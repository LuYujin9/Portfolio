import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import React, { useState, useEffect, useRef } from "react";
import "./About.css";

function About() {
  const [shouldRender, setShouldRender] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
  }, []);

  return (
    <main>
      <h3>ABOUT ME</h3>
      <section className="description-container">
        <p className="my-description">
          Ich bin Yujin Lu und schon 4 Jahren in Deutschland gewohnt. Diese Jahr
          habe dieses Jahr erfolgreich einen Intensivkurs in Vollzeit für Web
          Development erfolgreich abgeschlossen und will meine ganze
          Leidenschaft für das Programmieren in eine berufliche Chance
          umwandeln. Die Herausforderung und die Möglichkeit, mich
          kontinuierlich weiterzuentwickeln, faszinieren mich ungemein.
        </p>
        <img src="/images/my-foto.jpg" alt="my foto" className="my-foto" />
      </section>
      <h3>INFOMATIONEN</h3>
      <section className="informations-container">
        <p className="information">
          <strong>Geburtsdatum: </strong>18.04.1984
        </p>
        <p className="information">
          <strong>Stadt: </strong>Dresden
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

      <div ref={targetRef} className="slow-element">
        {shouldRender && (
          <div>
            <section>
              <h3>SKILLS</h3>
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
            <section>
              <h3>SPRACHE</h3>
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
                  <p>Chinesisch:</p>
                  <p> Muttersprache</p>
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
        )}
      </div>
    </main>
  );
}
export default About;
