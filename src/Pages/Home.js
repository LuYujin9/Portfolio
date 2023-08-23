import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="homepage">
        <div className="homepage-context-container">
          <h2>Yujin Lu</h2>
          <h3>Ich bin eine Web-Entwicklerin in Dresden.</h3>
          <Link className="about-me-link" to="/about">
            ABOUT ME
          </Link>
        </div>
      </section>
    </main>
  );
}
export default Home;
