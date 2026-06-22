import ProgramCard from "./ProgramCard";
import { careerPrograms } from "../data/courses";

function ProgramSection() {
  return (
    <section className="program-section">
      <div className="container-custom">
        <h2 className="program-heading">
          Career Development Programs
        </h2>
        <div className="program-grid">
          {careerPrograms.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramSection;
