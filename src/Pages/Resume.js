import "../styles/Resume.css";
import { useState, useEffect } from "react";

function Resume() {
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    setIsStart(true);
  }, []);

  return (
    <main>
      <div className={`${isStart ? "slide-up" : "slide-up-active"}`}>
        <h3>LEBENSLAUF</h3>
        <img
          className="resume-photo"
          src="/images/Lebenslauf-page-one.png"
          alt="CV from Yujin"
        />
        <img
          className="resume-photo"
          src="/images/Lebenslauf-page-two.png"
          alt="CV from Yujin"
        />
      </div>
    </main>
  );
}
export default Resume;
