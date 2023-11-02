import React, { useState, useEffect } from "react";
import { CourseCard } from "../Components/CourseCard";


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
    <div>
      <h1>Welcome to the Courses</h1>
      <div>
        {courses.length > 0 &&
          courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
      </div>
    </div>
  );
};