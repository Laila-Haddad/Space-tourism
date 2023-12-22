import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [exploreBg, setExploreBg] = useState(false);

  const handleBgOpen = () => setExploreBg(true);
  const handleBgClose = () => setExploreBg(false);

  const onMouseStyle = {
    opacity: exploreBg ? 1 : 0,
  };

  return (
    <section className="home">
      <div className="overlay-container">
        <article className="home-text-container">
          <h5>So, you want to travel to</h5>
          <h1>Space</h1>
          <p className="description">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <article className="explore-btn-container">
          <div onMouseOver={handleBgOpen} onMouseOut={handleBgClose}>
            <div className="explore-btn-bg" style={onMouseStyle}></div>
            <Link to="/destination">
              <button className="explore-btn">EXPLORE</button>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
