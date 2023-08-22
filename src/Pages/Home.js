import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section class="homepage">
        <div class="homepage-context-container">
          <img class="my-foto" alt="my foto" src="/images/my-foto.jpg" />

          <h2>Yujin Lu</h2>
          <h2>卢昱锦</h2>
          <h3>Ich bin eine Web-Entwicklerin in Dresden.</h3>
          <Link class="about-me-link" to="/about">
            ABOUT ME
          </Link>
        </div>
      </section>
    </main>
  );
}
export default Home;
