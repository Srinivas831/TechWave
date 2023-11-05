import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CourseCard = ({ course }) => {
  return (
    <CourseWrapper>
      <CourseLeft>
        <img src={course.image} alt={course.title} />
      </CourseLeft>

      <CourseMid>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <p style={{ color: "gray" }}>{course.instructor}</p>
        <p>Ratings: {course.rating}</p>
      </CourseMid>

      <CourseRight>
        <p style={{ textDecoration: "line-through" }}>
          Rs.{course.original_price}
        </p>
        <p style={{ fontSize: "24px" }}>Rs.{course.discounted_price}</p>
        <button>
          <Link to={`/courses/${course._id}`} className="explore_link">
            Explore
          </Link>
        </button>
      </CourseRight>
    </CourseWrapper>
  );
};

const CourseWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 2px solid lightgrey;
  padding-bottom: 0.7em;
`;

const CourseLeft = styled.div`
  flex: 3;
  margin-right: 20px;

  img {
    width: 300px;
  }
`;

const CourseMid = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  text-align: left;
  margin: 0;
  gap: 0.2em;
`;

const CourseRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 0.3em;

  button {
    border: #0056d2;
    border-radius: 0.6em;
    background-color: #0056d2;
    text-decoration: none;
    padding: 1em 2em;
    cursor: pointer;

    .explore_link {
      text-decoration: none;
      color: white;

      &:hover {
        color: #0056d2;
      }
    }

    &:hover {
      background-color: white;
      border: 1px solid #0056d2;
      color: #0056d2 !important;
    }
  }
`;
