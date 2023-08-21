import "./App.css";

function App() {
  return (
    <body>
      <header>
        <section>
          <h1 id="home">hello I'm Yujin Lu</h1>
          <p id="h1-2">
            "ndis eumt quibusdam. Facerevoluptate quibusdam cum perferendis{" "}
            <br />
            necessitatibus,earum suscipit sint voluptatem quasi porro sunt!
            Voluptates"
          </p>
          <p id="h1-3">I would like to be a WEB DESIGNER & DEVELOPER</p>
        </section>
        <nav id="guide">
          <a href="#home">Home</a>
          <a href="#aboutme">About me</a>
          <a href="#skills">Skills</a>
          <a href="#resume">Resume</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <article id="aboutme">
          <div class="sections__light">
            <h2>About Yujin</h2>
            <p class="describe">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              deserunt perferendis eum quidem earum ullam et quibusdam. Facere
              voluptate quibusdam cum perferendis necessitatibus, earum suscipit
              sint voluptatem niti soluta eius! Quasi nemo sint placeat libero,
              omnis neque quaerat repellat quae officiis tempora eaque hic harum
              simil
              <br />
              <br />
              ique non? Blanditiis sint, facere impedit officia, veritatis
              laborum dolore dolorum voluptatibus natus eveniet tiatur,
              nihaudantium, tenetur amet libero minima aut reprehenderit
              doloremque optio voluptate corporis nostrum qui quod expedita
              vitae eius error. Vel, neque laboriosam?
            </p>
            <a class="button_link" herf="#" target="_blank">
              Download CV
            </a>
          </div>
          <img class="pictures" src="/images/me.jpeg" alt="foto from Yujin" />
        </article>

        <article class="sections__dark" id="skills">
          <h2>Skills</h2>
          <br />
          <p>
            sljadlwqjd awjld wajlwkjd hafdkahioef alehfoieheneaifhalehahehwl
          </p>
          <br />
          <div class="each_skill">
            <div>
              <h3>deflajefa feal</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                deserunt perferendis eum quidem earum ullam et quibusdam. Facere
                voluptate quibusdam cum perferendis n
              </p>
            </div>
            <div>
              <h3>deflajefa feal</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                deserunt perferendis eum quidem earum ullam et quibusdam. Facere
                voluptate quibusdam cum perferendis n
              </p>
            </div>
            <div>
              <h3>deflajefa feal</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                deserunt perferendis eum quidem earum ullam et quibusdam. Facere
                voluptate quibusdam cum perferendis n
              </p>
            </div>
            <div>
              <h3>deflajefa feal</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                deserunt perferendis eum quidem earum ullam et quibusdam. Facere
                voluptate quibusdam cum perferendis n
              </p>
            </div>
            <div>
              <h3>deflajefa feal</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                deserunt perferendis eum quidem earum ullam et quibusdam. Facere
                voluptate quibusdam cum perferendis n
              </p>
            </div>
            <div>
              <h3>deflajefa feal</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                deserunt perferendis eum quidem earum ullam et quibusdam. Facere
                voluptate quibusdam cum perferendis n
              </p>
            </div>
          </div>
        </article>

        <article class="sections__light" id="resume">
          <div class="sections">
            <h2>Resume</h2>
            <p>
              djlefae aelfjae flaef aefjlejf aefjl Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Cupiditate laudantium, tenetur amet
              libero minima aut reprehenderit doloremque optio voluptate
              corporis nostrum qui quod expedita vitae eius error. Vel, neque
              laboriosam?
            </p>
          </div>
        </article>

        <article class="sections__dark" id="project">
          <div class="sections">
            <h2>Project</h2>
            <p>
              djlefae aelfjae flaef aefjlejf aefjl Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Cupiditate laudantium, tenetur amet
              libero minima aut reprehenderit doloremque optio voluptate
              corporis nostrum qui quod expedita vitae eius error. Vel, neque
              laboriosam?
            </p>
          </div>
        </article>

        <article class="sections__light" id="contact">
          <div class="sections">
            <h2>Contact</h2>
            <a href="https://www.linkedin.com" target="_blank">
              linkedln
            </a>
            <a href="https://www.facebook.com" target="_blank">
              facebook
            </a>
            <a href="https://twitter.com/?lang=zh" target="_blank">
              twitter
            </a>
          </div>
        </article>
      </main>
      <footer>
        <ul class="footerul">
          <li>Bildrechte</li>
          <li>Hilfe/Kontakt</li>
          <li>Newsletter</li>
          <li>RSS</li>
        </ul>
      </footer>
    </body>
  );
}

export default App;
