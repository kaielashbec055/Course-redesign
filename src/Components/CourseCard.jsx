import { Link } from "react-router-dom";

function CourseCard({ course }) {
  // ⚡ FIX: Force using the unique string slug property instead of repetitive numerical IDs
  const uniqueRouteTarget = course.slug;

  return (
    <div className="course-card">
      <div>
        <h2 className="course-title">
          {course.title}
        </h2>

        <p className="course-university">
          MBAAR Partner University
        </p>

        <div className="course-meta">
          <span>📚 {course.category}</span>
          <span>⏳ {course.duration}</span>
          <span>🎓 {course.eligibility}</span>
        </div>

        <p className="course-description">
          {course.description}
        </p>
      </div>

      <Link
        to={`/course/${uniqueRouteTarget}`}
        className="view-btn"
      >
        View Details
      </Link>
    </div>
  );
}

export default CourseCard;
