import styled from "styled-components";
import {  BsCheckLg } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import {Box, Heading} from "@chakra-ui/react";
// import {css} from "./previewVideos/css1.mp4"

const SingleCourseExt = ({id, title, category, course_includes, description, discounted_price, original_price, fullvideo, hours, image, instructor, language, learnings, rating, students, requirements}) => {
  
  return (
    <DIV>
      <div className="Course_outerDiv">
        <div className="Course_innerDiv1">
          <h1>{title}</h1>
      <Box m={"20px 0"}>
            <h4 style={{lineHeight:"1.5"}}>{rating} ⭐⭐⭐⭐</h4> 
            <h4 style={{lineHeight:"1.5"}}>{students}+ Students</h4> 
            <h4 style={{lineHeight:"1.5"}}>Created by {instructor}</h4> 
          <div style={{display:"flex",alignItems:"center"}}>
          <TbWorld className="world" size={"1.1rem"}/><h4>{language}</h4>
          </div>
          </Box>
          <Box m={"20px 0"}>  <p>{description}</p></Box>
        
    
          <div  key={Math.random()}>
            <Box w={"90%"} border={"1px solid black"}  p={"20px"} borderRadius={"0px"} m={"20px auto"}>
           
              <Heading textTransform={"capitalize"} mb={"20px"} >What you'll learn</Heading>
              
              {learnings && learnings.map((ele) => (
                <Box m={"10px 0"}>
                <div className="tickandtext">
                    <BsCheckLg className="tick" /> 
                    <p key={ele}>{ele}</p>
                </div>
                </Box>
              ))}
            </Box>
          </div>

          <div  key={Math.random()}>
            <Box w={"90%"} border={"1px solid black"}  p={"20px"} borderRadius={"0px"} m={"20px auto"}>
           
              <Heading textTransform={"capitalize"} mb={"20px"}>Requirements</Heading>
              
              {requirements &&requirements.map((ele) => (
                <Box m={"10px 0"}>
                <div className="tickandtext">
                    <BsCheckLg className="tick" /> 
                    <p key={ele}>{ele}</p>
                </div>
                </Box>
              ))}
            </Box>
         
          </div>

          <div  key={Math.random()}>
            <Box w={"90%"} border={"1px solid black"}  p={"20px"} borderRadius={"0px"} m={"20px auto"}>
           
              <Heading textTransform={"capitalize"} mb={"20px"}>Requirements</Heading>
              
              { course_includes && course_includes.map((ele) => (
                <Box m={"10px 0"}>
                <div className="tickandtext">
                    <BsCheckLg className="tick" /> 
                    <p key={ele}>{ele}</p>
                </div>
                </Box>
              ))}
            </Box>
         
          </div>
          
        </div>

        <div className="Course_innerDiv2">
          <video width="640" height={"360"} controls >
            <source src="" type="video/mp4" />
          </video>
          <h1>{category}</h1>
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
    /* border: 2px solid red; */
  }
  .Course_innerDiv1 {
    width: 58%;
    border: 2px solid black;
  }
  .Course_innerDiv2 {
    width: 35%;
    height: 100px;
    border: 2px solid black;
    /* margin: auto; */
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
`
