import { useState, useEffect } from "react";

import "../components/style/Resume.css";
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
          src="/images/CV.png"
          alt="CV from Yujin"
        />
      </div>
    </main>
  );
}
export default Resume;
