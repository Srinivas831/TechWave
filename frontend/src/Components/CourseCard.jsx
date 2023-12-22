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
        <p className="descp">{course.description.slice(0, 70) + `...`}</p>
        <p style={{ color: "gray" }}>{course.instructor}</p>
        <p>Ratings: {course.rating}</p>
      </CourseMid>

      <CourseRight>
        <div>
          <p className="og_price">Rs. {course.original_price}</p>
          <p className="dsc_price">Rs. {course.discounted_price}</p>
        </div>
        <div>
          <a href={`/courses/${course._id}`} className="explore_link">
            Explore
          </a>
        </div>
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
    width: 100%;
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
  gap: 1em;

  .explore_link {
    border: 1px solid #0056d2;
    border-radius: 0.4em;
    background-color: #0056d2;
    text-decoration: none;
    padding: 0.4em 0.6em;
    color: white;
    transition: all 0.3s ease-in;

    &:hover {
      background-color: white;
      color: #0056d2;
    }
  }

  .og_price {
    text-decoration: line-through;
    font-size: 0.8em;
    color: gray;
  }

  .dsc_price {
    font-size: 1.3em;
    font-weight: 600;
  }

  @media screen and (max-width: 750px) {
    flex: 1.5;
    font-size: 10px;

    .explore_link {
      padding: 0.5em 1em;
    }
  }

  @media screen and (max-width: 450px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1.2em;

    .og_price {
      font-size: 1em;
    }

    .dsc_price {
      font-size: 1.6em;
    }

    .explore_link {
      font-size: 1.6em;
    }
  }
`;
