import React, { useState } from 'react'
import styled from 'styled-components'
import {IoMdClose} from "react-icons/io"

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
language:"",
learnings:[""],
course_includes:[""],
requirements:[""],
    })

    // const postCourse = async(obj) => {
    //     try {
    //         let res = await fetch("https://techwave-test.onrender.com/courses/add",{
    //           method : "POST",
    //           headers : {"Content-Type" : "application/json"},
    //           body : JSON.stringify(obj)
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    console.log(formDetail)

    const handleChange = (e, index, field) => {
        if (field === "learnings") {
          const updatedLearning = [...formDetail.learnings];
          updatedLearning[index] = e.target.value;
          setFormDetails({ ...formDetail, learnings: updatedLearning });
        } else if (field === "course_includes") {
            const updatedCourseLearning = [...formDetail.course_includes];
            updatedCourseLearning[index] = e.target.value;
            setFormDetails({ ...formDetail, course_includes: updatedCourseLearning });
          } else {
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
      };

  return (
  <MainDiv>
    <form>
            <input type="text" placeholder='Image' name='image' value={formDetail.image} onChange={handleChange}/>
            <input type="text" placeholder='Title' name='title' value={formDetail.title} onChange={handleChange}/>
            <input type="text" placeholder='Description' name='description' value={formDetail.description} onChange={handleChange}/>
            <input type="text" placeholder='instructor' name='instructor' value={formDetail.instructor} onChange={handleChange}/>
            <input type="number" placeholder='Original price' name='original_price' value={formDetail.original_price} onChange={handleChange}/>
            <input type="number" placeholder='Discounted price' name='discounted_price' value={formDetail.discounted_price} onChange={handleChange}/>
            <input type="number" placeholder='Rating' name='rating' value={formDetail.rating} onChange={handleChange}/>
            <input type="text" placeholder='category' name='category' value={formDetail.category} onChange={handleChange}/>
            <input type="number" placeholder='Students' name='students' value={formDetail.students} onChange={handleChange}/>
            <input type="number" placeholder='Hours' name='hours' value={formDetail.hours} onChange={handleChange}/>
            <input type="text" placeholder='Demovideo' name='demovideo' value={formDetail.demovideo} onChange={handleChange}/>
            <input type="text" placeholder='Language' name='language' value={formDetail.language} onChange={handleChange}/>

      {formDetail.learnings.map((point, index) => (
         <div key={index}>
           <input type="text" name="learnings" value={point}
             onChange={(e) => handleChange(e, index, "learnings")} />
           <IoMdClose onClick={() => removeInputField(index, "learnings")} />
        </div>))}
        <button type="button" onClick={() => addInputField("learnings")}>Add More</button>
      {formDetail.course_includes.map((point, index) => (
        <div key={index}>
           <input type="text" name="course_includes" value={point}
             onChange={(e) => handleChange(e, index, "course_includes")} />
           <IoMdClose onClick={() => removeInputField(index, "course_includes")} />
        </div>))}
        <button type="button" onClick={() => addInputField("course_includes")}>Add More</button>
      {formDetail.requirements.map((point, index) => (
        <div key={index}>
           <input type="text" name="requirements" value={point}
            onChange={(e) => handleChange(e, index, "requirements")} />
          <IoMdClose onClick={() => removeInputField(index, "requirements")} />
       </div>))}
        <button type="button" onClick={() => addInputField("requirements")}>Add More</button>
    </form>
</MainDiv>
  )
}
const MainDiv = styled.div`
    form{
        border: 2px solid black;
        input{
          width: 40%;
          display: block;
        }
        button{
          display: inline;
        }
    }
`


