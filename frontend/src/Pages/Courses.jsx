import React, { useState, useEffect } from "react";
import { CourseCard } from "../Components/CourseCard";
import styled from "styled-components";
import { CourseSidebar } from "../Components/CourseSidebar";

export const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://techwave-test.onrender.com/courses")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCourses(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <DIV>
      <div className="sidebar">
        <CourseSidebar />
      </div>

      <div className="course-list">
        {courses.length > 0 &&
          courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  margin: auto;
  width: 98%;

  .sidebar {
    width: 15%;
  }

  .course-list {
    width: 85%;
    margin: 0 auto;
  }
`;
