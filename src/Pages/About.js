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
      <section className="more-informations-container">
        <img src="/images/my-foto.jpg" alt="my-foto" className="my-foto" />
        <div>
          <h3>Mehre Infomationen</h3>
          <ul>
            <li>
              <p>
                <strong>Geburtsdatum:</strong>18.04.1984
              </p>
            </li>
            <li>
              <p>
                <strong>Stadt:</strong>Dresden
              </p>
            </li>
            <li>
              <p>
                <strong>Bildung:</strong>Bechelor
              </p>
            </li>
            <li>
              <p>
                <strong>Tel:</strong>0160 3427599
              </p>
            </li>
            <li>
              <p>
                <strong>Email:</strong>wuwujane@hotmail.com
              </p>
            </li>
            <li>
              <p>
                <strong>Githup:</strong>https://github.com/LuYujin9
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h2>SKILLS</h2>
        <ul className="skill-container">
          <li>
            <p className="skill">Javascript ES8+</p>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar">
                80%
              </div>
            </div>
          </li>
          <li>
            <p className="skill">React 18.2</p>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar">
                80%
              </div>
            </div>
          </li>
          <li>
            <p className="skill">Next.js</p>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar">
                80%
              </div>
            </div>
          </li>
          <li>
            <p className="skill">HTML 5</p>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar">
                80%
              </div>
            </div>
          </li>
          <li>
            <p className="skill">CSS 3</p>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar">
                80%
              </div>
            </div>
          </li>
          <li>
            <p className="skill">MongoDB</p>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar">
                80%
              </div>
            </div>
          </li>
          <li>
            <p className="skill">illustrator</p>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar">
                40%
              </div>
            </div>
          </li>
          <li>
            <p className="skill">Auto CAD</p>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar">
                80%
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section>
        <h2>Sprachen</h2>
        <ul className="language-container">
          <li>
            <p className="skill">Deutsch</p>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar">
                C1
              </div>
            </div>
          </li>
          <li>
            <p className="skill">English</p>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar">
                B2
              </div>
            </div>
          </li>
          <li>
            <p className="skill">Chinesisch</p>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar">
                Muttersprache
              </div>
            </div>
          </li>
          <li>
            <p className="skill">HTML 5</p>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar">
                80%
              </div>
            </div>
          </li>
          <li>
            <p className="skill">CSS 3</p>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar">
                80%
              </div>
            </div>
          </li>
          <li>
            <p className="skill">MongoDB</p>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar">
                80%
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
export default About;
