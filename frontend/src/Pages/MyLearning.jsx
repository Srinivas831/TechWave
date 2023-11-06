import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import "../Css/utils.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function MyLearning() {

const [item,setItem]=useState([]);
const [idd,setProductIds]=useState([]);
  const userId = Cookies.get("userId");
  useEffect(()=>{
axios.get(`https://calm-gold-slug-toga.cyclic.app/courses/getfrompurchased?userId=${userId}`)

.then((res) => {
  console.log("Response data:", res.data); // Add this line to check the response data
  if (res.data && res.data.length > 0) {
    const productIdArray = res.data[0]; // Access the first element of the response data
    console.log("productIdArray:", productIdArray); // Add this line to check the productIdArray
    setProductIds(productIdArray);

    // Now productIdArray is an array of product IDs
    // Use productIds to fetch course details for each product
    Promise.all(
      productIdArray.map((productId) =>
        axios.get(`https://calm-gold-slug-toga.cyclic.app/courses/getpurchase?productId=${productId}`)
      )
    )
      .then((responses) => {
        // Combine the responses into a single array
        console.log("resss",responses)
        const courseDetails = responses.map((response) => response.data.product);
        setItem(courseDetails);
      })
      .catch((err) => console.log("Error fetching course details", err));
  } else {
    console.log("No purchased courses found for this user.");
  }
})
.catch((err) => console.log("lear",err));
  },[])
  if(item){
    console.log("aaa",item);
  }
  return (
    <DIV>
    <div className="parent-mylearning">
      <div className="parent-mylearning-top-heading">
        <h1>My Learning</h1>
      </div>
      <div className="mylearning-course">
        {item?.map((ele) => {
          const courseDetails = ele[0]; // Access the course details
          return (
            <Link to={`/mylearning/${courseDetails.id}`} key={courseDetails.id} className="link">
              <div className="mylearning-course-card">
                <div className="mylearning-course-card-img">
                <iframe width="560" height="315" src={courseDetails.fullvideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="mylearning-course-card-title">
                  <h2>{courseDetails.title}</h2>
                  <p>{courseDetails.instructor}</p>
                  <h6>Rating: {courseDetails.rating}</h6>
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

