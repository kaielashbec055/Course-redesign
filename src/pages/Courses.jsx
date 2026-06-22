/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useState } from "react";

import { mbaCourses, pgdmCourses } from "../data/courses";
import CourseCard from "../components/CourseCard";
import "./Courses.css";

function Courses() {
  const { type } = useParams();

  const courses = type === "mba" ? mbaCourses : pgdmCourses;

  // Active Filter States
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedExam, setSelectedExam] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // 1. Extract clean, individual categories
  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];

  // 2. Break down joined strings like "CAT / MAT" into distinct filter buttons
  const rawExams = courses.flatMap((course) => {
    if (!course.exam) return ["No Exam Required"];
    return course.exam.split(" / ").map((e) => e.trim());
  });
  
  const exams = ["All", ...new Set(rawExams)];

  // 3. Robust Combined Filtering Logic
  const filteredCourses = courses.filter((course) => {
    // Specialization Match
    const categoryMatch =
      selectedCategory === "All" || course.category === selectedCategory;

    // Exam Match (Checks if the selected exam string exists within the course string)
    const currentCourseExam = course.exam || "No Exam Required";
    const examMatch =
      selectedExam === "All" || currentCourseExam.includes(selectedExam);

    // Keyword Search Match (Title, Description, or Careers)
    const searchMatch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && examMatch && searchMatch;
  });

  return (
    <div className="courses-container">
      
      {/* 🧭 LEFT SIDEBAR FILTER PANEL */}
      <aside className="sidebar">
        <h2>Filters</h2>
        
        {/* Specialization Radio Section */}
        <div className="filter-group">
          <h3>Specializations</h3>
          <div>
            {categories.map((category) => (
              <label key={category} style={{ display: "block", margin: "10px 0" }}>
                <input
                  type="radio"
                  name="categoryFilter"
                  checked={selectedCategory === category}
                  onChange={() => setSelectedCategory(category)}
                  style={{ marginRight: "8px" }}
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Entrance Exams Radio Section */}
        <div className="filter-group" style={{ marginTop: "24px", borderTop: "1px solid #e2e8f0", paddingTop: "16px" }}>
          <h3>Entrance Exams</h3>
          <div>
            {exams.map((exam) => (
              <label key={exam} style={{ display: "block", margin: "10px 0" }}>
                <input
                  type="radio"
                  name="examFilter"
                  checked={selectedExam === exam}
                  onChange={() => setSelectedExam(exam)}
                  style={{ marginRight: "8px" }}
                />
                {exam}
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* 📑 RIGHT MAIN CONTENT VIEW AREA */}
      <main className="course-content">
        
        <h1 className="page-title">
          {type ? type.toUpperCase() : ""} Programs
        </h1>
        <p className="page-subtitle">
          Explore industry-relevant programs and specializations.
        </p>

        {/* Search Input */}
        <input
          type="text"
          className="search-box"
          placeholder="Search programs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Course Cards Grid */}
        <div className="course-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className="no-results" style={{ padding: "30px", background: "white", borderRadius: "12px", textAlign: "center" }}>
              No programs found matching your selected filters.
            </div>
          )}
        </div>

      </main>

    </div>
  );
}

export default Courses;
