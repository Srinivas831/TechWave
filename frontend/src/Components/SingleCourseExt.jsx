import styled from "styled-components";
import {  BsCheckLg } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import {Box, Button, Heading} from "@chakra-ui/react";
import css from "../previewVideos/css1.mp4";
import angular from "../previewVideos/angular.mp4";
import asp from "../previewVideos/asp.net.mp4";
import javascript from "../previewVideos/javascript.mp4";
import node from "../previewVideos/node.js.mp4";
import react from "../previewVideos/react.mp4";
import redux from "../previewVideos/redux.mp4";
import ts from "../previewVideos/typescript.mp4";
import Cookies from 'js-cookie';
import axios from "axios";

const SingleCourseExt = ({id, title, category, course_includes, description, discounted_price, original_price, fullvideo, hours, image, instructor, language, learnings, rating, students, requirements}) => {
  let src=null;
 
  const userId=Cookies.get("userId");
  console.log(userId);

  const categoryToSrc = {
    "React": react,
    "Node.js": node,
    "ASP.NET Core": asp,
    "TypeScript": ts,
    "HTML/CSS": css,
    "Redux": redux,
    "JavaScript": javascript,
    "Angular": angular,
  };
  if (category && categoryToSrc.hasOwnProperty(category)) {
    src = categoryToSrc[category];
  }

  const handleAddToCart=()=>{
    const cartData={
      productId:id,
      userId:userId,
      image:image,
      title:title,
      instructor:instructor,
      rating:rating,
      fullvideo:fullvideo,
      original_price:original_price,
      discounted_price:discounted_price,
      hours:hours

    }
    axios.post("http://localhost:8080/courses/addtocart",cartData)
  }
  
  return (
    <DIV>
      <div className="Course_outerDiv">
        <div className="Course_innerDiv1">
          <h1 className="h1">{title}</h1>
      <Box m={"20px 0"}>
            <h4 style={{lineHeight:"1.5"}}>{rating} ⭐⭐⭐⭐</h4> 
            <h4 style={{lineHeight:"1.5"}}>{students}+ Students</h4> 
            <h4 style={{lineHeight:"1.5"}}>Created by <span style={{color:"rgb(0,86,210)"}}>{instructor}</span></h4> 
          <div style={{display:"flex",alignItems:"center",lineHeight:"1.5"}}>
          <TbWorld className="world" size={"1.1rem"}/><h4>{language}</h4>
          </div>
          </Box>
          <Box m={"20px 0"} w={["85%","95%"]} className="description">  <p>{description}</p></Box>
        
    
          <div  key={id}>
            <Box className="box1" >
           
              <Heading textTransform={"capitalize"} mb={"20px"} color={"rgb(0,86,210)"}>What you'll learn</Heading>
              
              {learnings && learnings.map((ele) => (
                <Box m={"10px 0"}>
                <div className="tickandtext">
                    <BsCheckLg className="tick" /> 
                    <p key={ele} className="fontofPtag">{ele}</p>
                </div>
                </Box>
              ))}
            </Box> 
          </div>


          <div  key={Math.random()}>
            <Box className="box1">
           
              <Heading textTransform={"capitalize"} mb={"20px"} color={"rgb(0,86,210)"}>This course includes</Heading>
              
              { course_includes && course_includes.map((ele) => (
                <Box m={"10px 0"}>
                <div className="tickandtext">
                    <BsCheckLg className="tick" /> 
                    <p key={ele} className="fontofPtag">{ele}</p>
                </div>
                </Box>
              ))}
            </Box>
         
          </div>

          <div  key={Math.random()}>
            <Box className="box1">
           
              <Heading textTransform={"capitalize"} mb={"20px"} color={"rgb(0,86,210)"}>Requirements</Heading>
              
              {requirements &&requirements.map((ele) => (
                <Box m={"10px 0"}>
                <div className="tickandtext">
                    <BsCheckLg className="tick" /> 
                    <p key={ele} className="fontofPtag">{ele}</p>
                </div>
                </Box>
              ))}
            </Box>
         
          </div>
          
        </div>

        <div className="Course_innerDiv2">
          <div className="video-container">

            <video width="100%" controls>
              <source src={src} type="video/mp4" />
            </video>
            <div className="video-text">
              <h3>Preview this course</h3> {/* Updated text here */}
            </div>
          </div>
          <div className="additional-content">
            <div className="additional-content1">
            <h2 style={{lineHeight:"1.5"}}>Subscribe to TechWave's top courses</h2>
            <p style={{lineHeight:"1.5"}}>Get this course, plus 10,500+ of our top-rated courses, with Personal Plan. <a href="#">Learn more</a></p>
            <Button className="extra_big_dark_button" style={{margin:"5px 0"}}>Start subscription</Button>
            <p style={{lineHeight:"1.5"}}>Starting at ₹750 per month</p>
            <p style={{lineHeight:"1.5"}}>or</p>
            </div>
           
            <div className="price_adjustment"><h2>₹{discounted_price}</h2> <h3 className="strike_price">₹{original_price}</h3></div>
            <Button className="extra_big_dark_button" onClick={handleAddToCart}>Add to cart</Button>
          </div>
        </div>
      </div>
    </DIV>
  );
};

export default SingleCourseExt;

const DIV = styled.div`

  .Course_outerDiv {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    /* border: 2px solid red; */
  }
  .Course_innerDiv1 {
    width: 58%;
    /* border: 2px solid black; */
  }
  .Course_innerDiv2 {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    padding: 10px;
    width: 35%;
    height: 90vh;
    /* border: 2px solid black; */
    margin: auto;
    margin-top: 0px;
    position: sticky;
    top: 5rem;
    right: 4vw;
  }
  .tick {
  margin-right: 8px; 
}
.tickandtext{
    display: flex;
}
.world{
    margin-right: 10px;
}
.rightDiv{
  text-align: center;
  line-height: 1.5;
}
.fontofPtag{
  font-size: larger;
}
.description{
  font-size: larger;
}
.video-container {
    position: relative;
  }

  .video-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.6); 
    color: white;
    padding: 10px;
  }
  .extra_big_dark_button{
    line-height: 1.5;
    padding: 10px;
  }
  .additional-content {
    text-align: center;
    padding: 20px;
  }
  .box1{
    /* border: 1px solid black; */
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    transition: transform 0.5s;
    width: 80%;
    padding: 20px;
    margin: 20px;
  }
  .box1:hover{
    cursor: pointer;
    transform: translate(-25px, 0px);

  }
  .price_adjustment{
    width: 40%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .strike_price{
    text-decoration: line-through;
  }

  @media screen and (max-width:600px){
    .Course_outerDiv{
      flex-direction: column-reverse;
      width: 100%;
    }
    .Course_innerDiv1 {
      width: 90%;
      text-align: justify;
    }
    .Course_innerDiv2 {
    width: 90%;
    /* height: 38vh; */
    height: auto;
    margin: auto;
    margin-top: 0px;
    position: relative;
    top: 0;
    right: 0;
    box-shadow: none;
  }
  .box1{
    width: 95%;
    margin: 20px 0;
    text-align: start;
    font-size: 18px;
  }
  .h1{
    font-size: 1.5rem;
    width: 95%;
    text-align: left;
  }
  .additional-content1 {
    display: none;
  }
  .fontofPtag{
  font-size:medium;
}
.description{
  font-size: medium;
}
  }

`
