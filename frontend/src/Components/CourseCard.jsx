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
        <p className="descp">{course.description}</p>
        <p style={{ color: "gray" }}>{course.instructor}</p>
        <p>Ratings: {course.rating}</p>
      </CourseMid>

      <CourseRight>
        <p style={{ textDecoration: "line-through" }}>
          Rs.{course.original_price}
        </p>
        <p style={{ fontSize: "24px" }}>Rs.{course.discounted_price}</p>
        <a href={`/courses/${course._id}`} className="explore_link">
          Explore
        </a>
      </CourseRight>
    </CourseWrapper>
  );
};

const CourseWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 2px solid lightgrey;
  padding-bottom: 0.7em;

  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const CourseLeft = styled.div`
  flex: 3;
  margin-right: 20px;

  img {
    width: 100%;
  }

  @media screen and (max-width: 750px) {
    flex: 1.5;
  }
`;

const CourseMid = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  text-align: left;
  margin: 0;
  gap: 0.3em;

  @media screen and (max-width: 750px) {
    .descp {
      display: none;
    }
  }
`;

const CourseRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 0.3em;

  .explore_link {
    border: 1px solid #0056d2;
    border-radius: 0.6em;
    background-color: #0056d2;
    text-decoration: none;
    padding: 1em 2em;
    color: white;

    &:hover {
      background-color: white;
      color: #0056d2;
    }
  }

  @media screen and (max-width: 750px) {
    flex: 1.5;

    button {
      padding: 0.5em 1em;
    }
  }

  @media screen and (max-width: 450px) {
    margin-top: 1.2em;
    align-items: flex-start;
  }
`;
