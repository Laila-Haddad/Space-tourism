import { useState, useEffect } from "react";
import "./pages.css";
import data from "../data.json";

export default function Technology() {
  const technologies = data.technology;
  const [value, setValue] = useState(0);
  const { name, images, description } = technologies[value];

  // window size
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowSize(window.innerWidth);
      // console.log(windowSize);
    });
  }, []);

  return (
    <div className="technology">
      <section className="subpage-container">
        <h5 className="subpage-titile">
          {" "}
          <span>
            <b>03</b>
          </span>{" "}
          Space launch 101
        </h5>

        {/* change src to {images.portrait} when screen width  > 1440 */}
        <div className="tech-responsiveness-wrap">
          <img
            className="tech-img"
            src={windowSize > 1440 ? images.portrait : images.landscape}
            title={name}
            alt={name}
          />

          <article className="tech-card">
            <div className="tech-btn-container">
              {technologies.map((item, index) => (
                <button
                  key={index}
                  className="tech-btn "
                  onClick={() => setValue(index)}
                  style={{
                    backgroundColor: index === value ? "white" : "transparent",
                    color: index === value ? "#0B0D17" : "white",
                  }}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="tech-info-wrap">
              <h4 className="tech-title">The terminology...</h4>
              <h1 className="tech-name">{name}</h1>
              <p className="description"> {description}</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
