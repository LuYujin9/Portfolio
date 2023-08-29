import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import React, { useState, useEffect, useRef } from "react";
import "../components/style/About.css";

function About() {
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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
          setIsVisible(true);
          setShouldRender(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    /*  // 观察你希望在滚动到时渲染的元素
    const targetElement = document.querySelector("#slide-in-skills");
    console.log(targetElement);
    if (targetElement) {
      observer.observe(targetElement);
    }

    // 清理函数，组件卸载时停止观察
    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    }; */

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
        <img src="/images/my-photo.jpg" alt="me" className="my-photo" />
      </section>
      <div
        ref={targetRef}
        className={`${isVisible ? "slide-up" : "slide-up-active"}`}
      >
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
      <div ref={targetRef} id="slide-in-skills">
        {shouldRender && (
          <div>
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
        )}
      </div>
    </main>
  );
}
export default About;
