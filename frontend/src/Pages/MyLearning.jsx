import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import "../Css/utils.css";
import { Link} from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

function MyLearning() {
const [item,setItem]=useState([]);
const [idd,setProductIds]=useState([]);
  const userId = Cookies.get("userId");

  const {courseArray,loading,isError}=useSelector((store)=>{
    return {
      courseArray: store.reducer.courseArray,
      loading: store.reducer.loading,
      isError: store.reducer.isError
    }
  })
  
  console.log("q",courseArray,loading);


  return (
    <DIV>
    <div className="parent-mylearning">
      <div className="parent-mylearning-top-heading">
        <h1>My Learning</h1>
      </div>
      <div className="mylearning-course">
        {courseArray?.map((ele) => {
   
          return (
            <Link to={`/mylearning/${ele._id}`} key={ele.id} className="link">
              <div className="mylearning-course-card">
                <div className="mylearning-course-card-img">
                <iframe width="400" height="315" src={ele.fullvideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="mylearning-course-card-title">
                  <h2>{ele.title}</h2>
                  <p>{ele.instructor}</p>
                  <h6>Rating: {ele.rating}</h6>
                </div>
              </div>
            </Link>
          );
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
// `;

