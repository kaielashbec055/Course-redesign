import { Link } from "react-router-dom";
import { degreePrograms } from "../data/courses";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container-custom">

        {/* Heading */}
        <div className="hero-title">
          <h1>Advance Your Career with</h1>

          <h2>
            <span style={{ color: "#8b5cf6" }}>MBA</span>
            {" "} &
            <span style={{ color: "#2563eb" }}> PGDM</span>
            {" "}Programs
          </h2>

          <p>
            Industry-focused learning. Practical exposure. Career growth.
          </p>
        </div>

        {/* MBA + PGDM Cards */}
        <div className="degree-grid">

          {degreePrograms.map((program) => (
            <div
              key={program.id}
              className="degree-card"
            >
              <div>
                <div
                  className={`degree-icon ${
                    program.title === "MBA"
                      ? "mba-icon"
                      : "pgdm-icon"
                  }`}
                >
                  {program.icon}
                </div>

                <h2>{program.title}</h2>

                <p className="degree-description">
                  {program.description}
                </p>

                <ul className="feature-list">
                  {program.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <Link
                to={`/courses/${program.type}`}
                className={`explore-btn ${
                  program.title === "MBA"
                    ? "mba-btn"
                    : "pgdm-btn"
                }`}
              >
                {program.buttonText}
              </Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HeroSection;
