import { Link } from "react-router-dom";

function ProgramCard({ program }) {
  // If the data object has a string slug (like "career-bootcamp"), use it. 
  // Otherwise, fallback to a safe path parameter structure.
  const uniqueRouteTarget = program.slug || program.id;

  return (
    <div className="program-card">
      <div className="program-icon">
        {program.icon}
      </div>
      
      <h3>{program.title}</h3>
      
      <p>{program.description}</p>
      
      {/* ⚡ UPDATED: Swapped the static button for a fully functional navigation link */}
      <Link 
        to={`/course/${uniqueRouteTarget}`} 
        className="learn-btn"
        style={{ display: "inline-block", textDecoration: "none", textAlign: "center" }}
      >
        Learn More
      </Link>
    </div>
  );
}

export default ProgramCard;
