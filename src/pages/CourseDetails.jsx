import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
// ⚡ UPDATED: Included careerPrograms in the data import pool
import { mbaCourses, pgdmCourses, careerPrograms } from "../data/courses";

function CourseDetails({ onAddToCart }) {
  const { slug } = useParams();
  const navigate = useNavigate();

  // ⚡ UPDATED: Merged careerPrograms so their slugs resolve without a "Course Not Found" error
  const allCourses = [...mbaCourses, ...pgdmCourses, ...careerPrograms];

  // Convert parameters to strings and check against item.id OR item.slug
  const course = allCourses.find(
    (item) => String(item.slug) === String(slug) || String(item.id) === String(slug)
  );

  // States to control the dynamic success text beneath the buttons
  const [cartSuccess, setCartSuccess] = useState(false);
  const [enrollSuccess, setEnrollSuccess] = useState(false);

  const handleAddToCart = () => {
    if (course && typeof onAddToCart === "function") {
      onAddToCart(course);
    }
    setCartSuccess(true);
    setTimeout(() => setCartSuccess(false), 4000); // clear message after 4 seconds
  };

  const handleEnrollNow = () => {
    setEnrollSuccess(true);
    setTimeout(() => setEnrollSuccess(false), 4000); // clear message after 4 seconds
  };

  if (!course) {
    return (
      <div className="container-custom" style={{ padding: "80px 24px", textAlign: "center" }}>
        <button 
          onClick={() => navigate(-1)} 
          style={{ background: "none", border: "none", color: "#2563eb", fontWeight: "600", cursor: "pointer", marginBottom: "20px", fontSize: "1rem" }}
        >
          ← Go Back
        </button>
        <h1 style={{ color: "#ef4444", fontSize: "2rem", fontWeight: "700" }}>
          Course Not Found
        </h1>
        <p style={{ color: "#64748b", marginTop: "12px" }}>
          We could not fetch data for identifier: "{slug}"
        </p>
      </div>
    );
  }

  return (
    <div className="container-custom" style={{ padding: "40px 24px" }}>
      
      {/* ⬅️ GLOBAL BACK NAV BUTTON */}
      <button 
        onClick={() => navigate(-1)} 
        style={{
          background: "#ffffff",
          border: "1px solid #cbd5e1",
          color: "#334155",
          padding: "8px 16px",
          borderRadius: "8px",
          fontWeight: "600",
          fontSize: "0.95rem",
          cursor: "pointer",
          marginBottom: "24px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          transition: "0.2s"
        }}
        onMouseOver={(e) => (e.target.style.background = "#f8fafc")}
        onMouseOut={(e) => (e.target.style.background = "#ffffff")}
      >
        ← Back
      </button>

      {/* Header Block */}
      <div style={{ background: "white", padding: "32px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#1d4ed8" }}>
          {course.title}
        </h1>
        
        <p style={{ color: "#64748b", fontSize: "1.1rem", marginTop: "8px" }}>
          {course.university || "MBAAR Partner University"}
        </p>

        {/* Categories Badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "20px" }}>
          <span style={{ background: "#dbeafe", color: "#1e40af", padding: "6px 14px", borderRadius: "20px", fontWeight: "600", fontSize: "0.9rem" }}>
            📚 {course.category}
          </span>
          <span style={{ background: "#dcfce7", color: "#166534", padding: "6px 14px", borderRadius: "20px", fontWeight: "600", fontSize: "0.9rem" }}>
            ⏳ {course.duration}
          </span>
          <span style={{ background: "#f3e8ff", color: "#6b21a8", padding: "6px 14px", borderRadius: "20px", fontWeight: "600", fontSize: "0.9rem" }}>
            🎓 {course.eligibility}
          </span>
          {course.exam && (
            <span style={{ background: "#fef9c3", color: "#854d0e", padding: "6px 14px", borderRadius: "20px", fontWeight: "600", fontSize: "0.9rem" }}>
              📝 {course.exam}
            </span>
          )}
          <span style={{ background: "#fce7f3", color: "#9d174d", padding: "6px 14px", borderRadius: "20px", fontWeight: "600", fontSize: "0.9rem" }}>
            💻 {course.mode || "Online"}
          </span>
        </div>
      </div>

      {/* Overview Section */}
      <div style={{ background: "white", padding: "32px", borderRadius: "16px", border: "1px solid #e2e8f0", marginTop: "24px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "12px", color: "#1e293b" }}>
          Overview
        </h2>
        <p style={{ color: "#334155", lineHeight: "1.7", fontSize: "1.05rem" }}>
          {course.description}
        </p>
      </div>

      {/* Detail Grid Layout */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginTop: "24px" }}>
        
        {/* Curriculum Card */}
        <div style={{ background: "white", padding: "32px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "14px", color: "#1e293b" }}>
            Program Highlights
          </h2>
          <ul style={{ paddingLeft: "20px", color: "#475569", lineHeight: "1.8" }}>
            <li>Phase 1: Fundamental Concepts &amp; Theories</li>
            <li>Phase 2: Core Domain Deep-Dives</li>
            <li>Phase 3: Real-World Case Interpretations</li>
            <li>Phase 4: Final Capstone Integrations</li>
          </ul>
        </div>

        {/* Inclusions Card */}
        <div style={{ background: "white", padding: "32px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "14px", color: "#1e293b" }}>
            Program Inclusions &amp; Logistics
          </h2>
          <ul style={{ paddingLeft: "20px", color: "#475569", lineHeight: "1.8" }}>
            <li><strong>Resources:</strong> Continuous Resource Updates Provided</li>
            <li><strong>Materials:</strong> Complete Digital Study Kits Included</li>
            <li><strong>Network:</strong> Access to Domain Community Infrastructure</li>
            <li><strong>Inquiries:</strong> Dedicated Placement Desk Support Channels</li>
          </ul>
        </div>
      </div>

      {/* Career Placements List */}
      {course.careers && course.careers.length > 0 && (
        <div style={{ background: "white", padding: "32px", borderRadius: "16px", border: "1px solid #e2e8f0", marginTop: "24px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "16px", color: "#1e293b" }}>
            Key Milestones &amp; Outcomes
          </h2>
          <ul style={{ paddingLeft: "20px", color: "#334155", lineHeight: "1.8", fontSize: "1.05rem" }}>
            {course.careers.map((career, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>{career}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Action Buttons Panel */}
      <div style={{ marginTop: "32px" }}>
        <div style={{ display: "flex", gap: "16px" }}>
          <button
            onClick={handleAddToCart}
            style={{
              background: "#ffffff",
              border: "2px solid #2563eb",
              color: "#2563eb",
              padding: "14px 28px",
              borderRadius: "10px",
              fontWeight: "600",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "0.2s"
            }}
            onMouseOver={(e) => (e.target.style.background = "#f0f5ff")}
            onMouseOut={(e) => (e.target.style.background = "#ffffff")}
          >
            Add To Cart
          </button>

          <button
            onClick={handleEnrollNow}
            style={{
              background: "#2563eb",
              border: "none",
              color: "#ffffff",
              padding: "14px 28px",
              borderRadius: "10px",
              fontWeight: "600",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "0.2s"
            }}
            onMouseOver={(e) => (e.target.style.background = "#1d4ed8")}
            onMouseOut={(e) => (e.target.style.background = "#2563eb")}
          >
            Enroll Now
          </button>
        </div>

        {/* Action Success Alerts Banner System */}
        <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
          {cartSuccess && (
            <div style={{ background: "#dcfce7", color: "#166534", padding: "12px 20px", borderRadius: "8px", fontWeight: "600", display: "inline-block", width: "fit-content" }}>
              Course added successfully ✅
            </div>
          )}
          {enrollSuccess && (
            <div style={{ background: "#dbeafe", color: "#1e40af", padding: "12px 20px", borderRadius: "8px", fontWeight: "600", display: "inline-block", width: "fit-content" }}>
              Course enrolled successfully 🎉
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default CourseDetails;
