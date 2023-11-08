import React, { useState } from 'react'
import styled from 'styled-components'
import {IoMdClose} from "react-icons/io"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export  function AddCourses() {
    const [formDetail,setFormDetails] = useState({
image:"",
title:"",
description:"",
instructor:"",
original_price:0,
discounted_price:0,
rating:0,
category:"",
students:0,
hours:0,
demovideo:"",
fullvideo:"",
language:"",
learnings:[""],
course_includes:[""],
requirements:[""]
})
    const navigate = useNavigate()

  const postCourse = async (obj) => {
      try {
        let res = await axios.post("http://localhost:8080/courses/addCourses", obj);
      } catch (error) {
        console.error(error);
      }
  };

    
  const handleChange = (e, index, field) => {
        if (field === "learnings") {
          const updatedLearning = [...formDetail.learnings];
          updatedLearning[index] = e.target.value;
          setFormDetails({ ...formDetail, learnings: updatedLearning });
        } else if (field === "course_includes") {
            const updatedCourseLearning = [...formDetail.course_includes];
            updatedCourseLearning[index] = e.target.value;
            setFormDetails({ ...formDetail, course_includes: updatedCourseLearning });
          }
          else if (field === "requirements") {
            const updatedRequirements = [...formDetail.requirements];
            updatedRequirements[index] = e.target.value;
            setFormDetails({ ...formDetail, requirements: updatedRequirements });
          }
           else {
          const { name, value } = e.target;
          setFormDetails({ ...formDetail, [name]: value });
        }
  };

  const addInputField = (field) => {
        if (field === "learnings") {
          setFormDetails({
            ...formDetail,
            learnings: [...formDetail.learnings, ""],
          });
        } else if (field === "course_includes") {
          setFormDetails({ ...formDetail, course_includes: [...formDetail.course_includes, ""] });
        }
        else if (field === "requirements") {
          setFormDetails({ ...formDetail, requirements: [...formDetail.requirements, ""] });
        }
  };
  const removeInputField = (index, field) => {
        if (field === "learnings") {
          const updatedLearnings = [...formDetail.learnings];
          updatedLearnings.splice(index, 1);
          setFormDetails({ ...formDetail, learnings: updatedLearnings });
        } else if (field === "course_includes") {
          const updatedCourseIncludes = [...formDetail.course_includes];
          updatedCourseIncludes.splice(index, 1);
          setFormDetails({ ...formDetail, course_includes: updatedCourseIncludes });
        }
        else if (field === "requirements") {
          const updatedRequirements = [...formDetail.requirements];
          updatedRequirements.splice(index, 1);
          setFormDetails({ ...formDetail, requirements: updatedRequirements });
        }
  };

  const handleSubmit = (e)  => {
        e.preventDefault();
        postCourse(formDetail)
        setFormDetails({image:"",title:"",description:"",instructor:"", original_price:0,discounted_price:0, rating:0, category:"", students:0, hours:0,  demovideo:"",fullvideo:"", language:"",learnings:[""],course_includes:[""], requirements:[""]})
        navigate("/admin")
  }

  return (
  <MainDiv>
    <h1>Add Course Data</h1>
    <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Image' name='image' value={formDetail.image} onChange={handleChange} required/>
            <input type="text" placeholder='Title' name='title' value={formDetail.title} onChange={handleChange} required/>
            <input type="text" placeholder='Description' name='description' value={formDetail.description} onChange={handleChange} required/>
            <input type="text" placeholder='instructor' name='instructor' value={formDetail.instructor} onChange={handleChange} required/>
            <input type="number" placeholder='Original price' name='original_price' value={formDetail.original_price} onChange={handleChange} required/>
            <input type="number" placeholder='Discounted price' name='discounted_price' value={formDetail.discounted_price} onChange={handleChange} required/>
            <input type="number" placeholder='Rating' name='rating' value={formDetail.rating} onChange={handleChange} required/>
            <input type="text" placeholder='category' name='category' value={formDetail.category} onChange={handleChange} required/>
            <input type="number" placeholder='Students' name='students' value={formDetail.students} onChange={handleChange} required/>
            <input type="number" placeholder='Hours' name='hours' value={formDetail.hours} onChange={handleChange} required/>
            <input type="text" placeholder='Demovideo' name='demovideo' value={formDetail.demovideo} onChange={handleChange} required/>
            <input type="text" placeholder='Fullvideo' name='fullvideo' value={formDetail.fullvideo} onChange={handleChange} required/>
            <input type="text" placeholder='Language' name='language' value={formDetail.language} onChange={handleChange} required/>

      {formDetail.learnings.map((point, index) => (
         <div key={index} className='learning'>
           <input type="text" name="learnings" placeholder='Learnings' value={point}
             onChange={(e) => handleChange(e, index, "learnings")} />
           <IoMdClose onClick={() => removeInputField(index, "learnings")} required/>
        </div>))}
        <button type="button" onClick={() => addInputField("learnings")}>Add More</button>
      {formDetail.course_includes.map((point, index) => (
        <div key={index} className='course-include'>
           <input type="text" name="course_includes" placeholder='Course Includes' value={point}
             onChange={(e) => handleChange(e, index, "course_includes")} required/>
           <IoMdClose onClick={() => removeInputField(index, "course_includes")} />
        </div>))}
        <button type="button" onClick={() => addInputField("course_includes")}>Add More</button>
        {formDetail.requirements.map((point, index) => (
        <div key={index} className='requirements'>
           <input type="text" name="requirements" placeholder='Requirements' value={point}
             onChange={(e) => handleChange(e, index, "requirements")} required/>
           <IoMdClose onClick={() => removeInputField(index, "requirements")} />
        </div>))}
        <button type="button" onClick={() => addInputField("requirements")}>Add More</button>
        <input id="submit-btn" type="submit" />
    </form>
</MainDiv>
  )
}
const MainDiv = styled.div`
    border: 1px solid black;
    
    h1{
      text-align: center;
    }
    form{
        /* border: 1px solid black; */
        width: 35%;
        margin: auto;
        input{
          width: 96%;
          padding: .5rem;
          display: block;
          margin : .5rem 0;
          outline: none;
          &:hover{
            border :2px solid #0056d2
          }
        }
        button{
          display: inline;
          padding: .3rem .4rem;
          font-size: .8rem;
          border : none;
          border-radius: .2rem;
          &:hover{
            background: #0056d2;
            color : #fff;
          }
        }
        .learning{
          display: flex;
          align-items: center;
          
        }
        .course-include{
          display: flex;
          align-items: center;
          
        }
        .requirements{
          display: flex;
          align-items: center;
        }
        #submit-btn{
          /* background-color: #0056d2;
          color: #fff; */
          font-size: 1rem;
          font-weight: bolder;
          cursor: pointer;
          &:hover{
            background-color: #0056d2;
            color: #fff;
          }
        }
    }

@media screen and (max-width: 900px) {
    h1{
      font-size: 1.7rem;
    }
   form{
     width: 50%;
   }
 
}
@media screen and (max-width: 500px) {
  h1{
    font-size: 1.5rem;
  }
 form{
  width: 70%;
 }
 
}
`