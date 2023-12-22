import { useState } from "react";
import "./pages.css";
import data from "../data.json";

export default function Crew() {
  const crews = data.crew;
  const [value, setValue] = useState(0);
  const { name, images, role, bio } = crews[value];

  return (
    <div className="crew">
      <section className="subpage-container">
        <h5 className="subpage-titile">
          {" "}
          <span>
            <b>02</b>
          </span>{" "}
          Meet your crew
        </h5>
        <div className="crew-responsiveness-wrap">
          <img className="crew-img" src={images.png} title={name} alt={name} />

          <div className="crew-btn-container">
            {crews.map((item, index) => (
              <button
                key={index}
                className="crew-btn "
                onClick={() => setValue(index)}
                style={{
                  backgroundColor: index === value ? "white" : "#979797",
                }}
              ></button>
            ))}
          </div>
          <div className="crew-info-container">
            <h4 className="crew-title">{role}</h4>
            <h1 className="crew-name">{name}</h1>
            <p className="description"> {bio}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
