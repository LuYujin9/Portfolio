import { useState, useEffect } from "react";

import "../components/style/Resume.css";
function Resume() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main>
      <div className={`${isVisible ? "slide-up" : "slide-up-active"}`}>
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
