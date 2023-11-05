import React from "react";
import Styled from "styled-components";
import "../Css/utils.css";
import { Link } from "react-router-dom";

function MyLearning() {
  const item = [
    {
      id: 1,
      image:
        "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dy3h07a5tygirigsiv3y.png",
      title: "React JS- Complete Guide for Frontend Web Development",
      description:
        "Learn the fundamentals of React and build interactive user interfaces and Become an expert React JS Developer. Learn HTML, CSS, JavaScript, ES6, React JS and jQuery..",
      instructor: "John Doe",
      original_price: 2999,
      discounted_price: 499,
      rating: 4.8,
      category: "React",
      students: 25000,
      hours: 20,
      demovideo: "react-demo.mp4",
      fullvideo:
        "https://www.youtube.com/embed/u6gSSpfsoOQ?si=hUV1cc2nTWifMDrn",
      language: "English",
      learnings: [
        "Understand the core concepts of React",
        "Build reusable components for web applications",
        "Manage state and props in React",
        "Create a complete React application from scratch",
        "Integrate with APIs and external data sources",
      ],
      course_includes: [
        "20 hours on-demand video",
        "10 coding exercises",
        "30 articles",
        "Access on mobile and TV",
        "Certificate of completion",
      ],
      requirements: [
        "Basic knowledge of HTML, CSS, and JavaScript",
        "A code editor like Visual Studio Code",
        "Access to the internet for resources and libraries",
      ],
    },
    {
      id: 2,
      image: "https://i.ytimg.com/vi/oP571toXMqc/maxresdefault.jpg",
      title: "Modern JavaScript Mastery",
      description:
        "Become a JavaScript expert and learn the latest features and best practices.",
      instructor: "Jane Smith",
      original_price: 179,
      discounted_price: 39,
      rating: 4.6,
      category: "JavaScript",
      students: 32000,
      hours: 18,
      demovideo: "js-demo.mp4",
      fullvideo:
        "https://www.youtube.com/embed/jS4aFq5-91M?si=LZCY-cAfgGFEfmxM",
      language: "English",
      learnings: [
        "Master JavaScript's core concepts and features",
        "ES6 and modern JavaScript syntax",
        "Asynchronous programming with Promises and async/await",
        "Working with DOM and handling events",
        "Creating interactive web applications",
      ],
      course_includes: [
        "18 hours on-demand video",
        "15 coding exercises",
        "25 articles",
        "Access on mobile and TV",
        "Certificate of completion",
      ],
      requirements: [
        "Basic knowledge of HTML and CSS",
        "A modern web browser",
        "Access to a computer with an internet connection",
      ],
    },
    {
      id: 3,
      image:
        "https://www.venturelessons.com/wp-content/uploads/2020/03/angular-js-online-courses-scaled.jpg",
      title: "Angular Web Development",
      description: "Build modern web applications with Angular and TypeScript.",
      instructor: "Maria Rodriguez",
      original_price: 229,
      discounted_price: 59,
      rating: 4.7,
      category: "Angular",
      students: 18000,
      hours: 24,
      demovideo: "angular-demo.mp4",
      fullvideo:
        "https://www.youtube.com/embed/3qBXWUpoPHo?si=jaWO33YoH9mJ5IAj",
      language: "English",
      learnings: [
        "Master Angular's components, services, and modules",
        "Create reactive web applications with Angular",
        "Routing and navigation in Angular",
        "REST API integration and data retrieval",
        "Deployment and testing of Angular apps",
      ],
      course_includes: [
        "24 hours on-demand video",
        "12 coding exercises",
        "40 articles",
        "Access on mobile and TV",
        "Certificate of completion",
      ],
      requirements: [
        "Basic knowledge of HTML, CSS, and JavaScript",
        "A code editor like Visual Studio Code",
        "Node.js and npm installed on your computer",
      ],
    },
  ];

  return (
    <DIV>
      <div className="parent-mylearning">
        <div className="parent-mylearning-top-heading">
          <h1>My Learning</h1>
        </div>
        <div className="mylearning-course">
          {item.map((ele) => {
            return <Link to={`/mylearning/${ele.id}`} key={ele.id} className="link">
            <div className="mylearning-course-card">
                <div className="mylearning-course-card-img">
                    <img src={ele.image} alt="img" />
                </div>
                <div className="mylearning-course-card-title">
                    <h2>{ele.title}</h2>
                    <p>{ele.instructor}</p>
                    <h6>Reating : {ele.rating}</h6>
                </div>
            </div>
            </Link>
          })}
        </div>
      </div>
    </DIV>
  );
}

export default MyLearning;

const DIV = Styled.div`
    font-family : var(--primary-font-family);
    .parent-mylearning{
        width : 90%;
        margin : 2.5rem auto;
    }
    .parent-mylearning-top-heading{
        display : flex;
        height : 200px;
        background-color : var(--dark-color);
        border-radius : 10px; 
        justify-content : center;
        align-items : center;
    }
    .parent-mylearning-top-heading h1{
        color : var(--secondary-color);
    }
    .mylearning-course{
        margin : 2.5rem auto;
        display : grid;
        grid-template-columns : 23% 23% 23% 23%;
        /* border : 1px solid red; */
        justify-content : space-between;
    }
    .link{
        text-decoration : none;
    }
    .mylearning-course-card{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .mylearning-course-card-img{
        width : 100%;
    }
    .mylearning-course-card-img img{
        width : 100%;
    }
    .mylearning-course-card-title h2 {
        color : var(--dark-color);
        font-weight : 500;
    }
    .mylearning-course-card-title p , .mylearning-course-card-title h6{
        color : var(--dark-color);
    }
`;
