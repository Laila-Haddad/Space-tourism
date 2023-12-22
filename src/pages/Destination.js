import { useState, useEffect } from "react";
import "./pages.css";
//? Note that JSON files only support default exports, not named exports.
import data from "../data.json";

export default function Destination() {
  const destinations = data.destinations;
  const [value, setValue] = useState(0);
  // Deconstruct the destinations object
  const { name, images, description, distance, travel } = destinations[value];

  return (
    <div className="destination">
      <section className="subpage-container">
        <h5 className="subpage-titile">
          {" "}
          <span>
            <b>01</b>
          </span>{" "}
          Pick your destination
        </h5>

        <img
          className="subpage-main-img"
          src={images.png}
          title={name}
          alt={name}
        />

        <article className="destination-card">
          {destinations.map((item, index) => (
            <button
              key={index}
              className="destination-btn "
              onClick={() => setValue(index)}
              style={{
                borderBottom:
                  index === value
                    ? "2px white solid"
                    : "2px rgba(255, 255, 255, 0) solid",
                color: index === value ? "white" : "#d0d6f9",
              }}
            >
              {item.name}
            </button>
          ))}

          <h1 className="destination-title">{name}</h1>
          <p className="description"> {description}</p>
          <div className="destination-stat">
            <div className="first-stat">
              <span className="stat-title">Avg. distance </span>
              <span className="stat-data">{distance}</span>
            </div>
            <div className="second-stat">
              <span className="stat-title">Est. travel time </span>
              <span className="stat-data">{travel}</span>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
