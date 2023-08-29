import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/style/Homepage.css";

function Home() {
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    setIsStart(true);
  }, []);
  return (
    <main>
      <section className="homepage">
        <div className={`${isStart ? "slide-up" : "slide-up-active"}`}>
          <div className="homepage-context-container">
            <h2>Yujin Lu</h2>
            <h5>
              <strong>
                Ich bin eine Web-Entwicklerin in Dresden mit chinesischen
                Wurzeln.
              </strong>
            </h5>
            <Link className="about-me-link" to="/about">
              ABOUT ME
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Home;
