import React from "react";
import "./Resources.css";

const Resources = () => {
  return (
    <section id="resources" className="resources-section">
      <h2>Resources</h2>
      <ul>
        <li>
          <a href="#plant-guide" className="resource-link">
            Seasonal Planting Guide
          </a>
        </li>
        <li>
          <a href="#hardscaping" className="resource-link">
            Hardscaping Basics
          </a>
        </li>
        <li>
          <a href="#maintenance" className="resource-link">
            Lawn Maintenance Tips
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Resources;
