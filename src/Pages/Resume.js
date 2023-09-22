import "../components/style/Resume.css";
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
      </div>
    </main>
  );
}
export default Resume;
