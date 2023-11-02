import React from "react";
import styled from "styled-components";

export const CourseCard = ({ course }) => {
  return (
    <DIV>
      <div style={{ marginRight: "20px" }}>
        <img src={course.image} alt={course.title} style={{ width: 300 }} />
      </div>
      <div style={{ flex: 1, textAlign: "left"}}>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <p>Instructor: {course.instructor}</p>
        <p>Ratings: {course.rating}</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ textDecoration: "line-through" }}>
          Rs.{course.original_price}
        </p>
        <p style={{ fontSize: "24px" }}>Rs.{course.discounted_price}</p>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
    display: flex;
    margin-bottom: 20px;
    border: "1px solid red"
`
