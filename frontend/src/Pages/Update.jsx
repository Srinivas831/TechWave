import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {IoMdClose} from "react-icons/io"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { url } from '../api'


export  const Update = () => {
  
    const {id} = useParams()
    const navigate = useNavigate()
    const [updateCourse,setUpdateCourse] = useState({})

  const getCourseById = async() => {
    try {
      let res = await axios.get(`${url}/courses/updateData/${id}`)
      setUpdateCourse(res.data)
    } catch (error) {
     console.log("dont Get",error) 
    }
  }
  const putCourse = async (obj) => {
      try {
        let res = await axios.put(`${url}/courses/update/${id}`,obj);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
  };
  useEffect(()=>{
    getCourseById()
  },[])
    
  const handleChange = (e, index, field) => {
        if (field === "learnings") {
          const updatedLearning = [...updateCourse.learnings];
          updatedLearning[index] = e.target.value;
          setUpdateCourse({ ...updateCourse, learnings: updatedLearning });
        } else if (field === "course_includes") {
            const updatedCourseLearning = [...updateCourse.course_includes];
            updatedCourseLearning[index] = e.target.value;
            setUpdateCourse({ ...updateCourse, course_includes: updatedCourseLearning });
          }
          else if (field === "requirements") {
            const updatedRequirements = [...updateCourse.requirements];
            updatedRequirements[index] = e.target.value;
            setUpdateCourse({ ...updateCourse, requirements: updatedRequirements });
          }
           else {
          const { name, value } = e.target;
          setUpdateCourse({ ...updateCourse, [name]: value });
        }
  };

  const addInputField = (field) => {
        if (field === "learnings") {
          setUpdateCourse({
            ...updateCourse,
            learnings: [...updateCourse.learnings, ""],
          });
        } else if (field === "course_includes") {
          setUpdateCourse({ ...updateCourse, course_includes: [...updateCourse.course_includes, ""] });
        }
        else if (field === "requirements") {
          setUpdateCourse({ ...updateCourse, requirements: [...updateCourse.requirements, ""] });
        }
  };
  const removeInputField = (index, field) => {
        if (field === "learnings") {
          const updatedLearnings = [...updateCourse.learnings];
          updatedLearnings.splice(index, 1);
          setUpdateCourse({ ...updateCourse, learnings: updatedLearnings });
        } else if (field === "course_includes") {
          const updatedCourseIncludes = [...updateCourse.course_includes];
          updatedCourseIncludes.splice(index, 1);
          setUpdateCourse({ ...updateCourse, course_includes: updatedCourseIncludes });
        }
        else if (field === "requirements") {
          const updatedRequirements = [...updateCourse.requirements];
          updatedRequirements.splice(index, 1);
          setUpdateCourse({ ...updateCourse, requirements: updatedRequirements });
        }
  };

  const handleSubmit = (e)  => {
        e.preventDefault();
        putCourse(updateCourse)
        navigate("/admin")
  }

  return (
  <MainDiv>
    <h1>Update Course Data</h1>
    <form onSubmit={handleSubmit} key={updateCourse._id}>
            <input type="text" placeholder='Image' name='image' value={updateCourse.image} onChange={handleChange} required/>
            <input type="text" placeholder='Title' name='title' value={updateCourse.title} onChange={handleChange} required/>
            <input type="text" placeholder='Description' name='description' value={updateCourse.description} onChange={handleChange} required/>
            <input type="text" placeholder='instructor' name='instructor' value={updateCourse.instructor} onChange={handleChange} required/>
            <input type="number" placeholder='Original price' name='original_price' value={updateCourse.original_price} onChange={handleChange} required/>
            <input type="number" placeholder='Discounted price' name='discounted_price' value={updateCourse.discounted_price} onChange={handleChange} required/>
            <input type="number" placeholder='Rating' name='rating' value={updateCourse.rating} onChange={handleChange} required/>
            <input type="text" placeholder='category' name='category' value={updateCourse.category} onChange={handleChange} required/>
            <input type="number" placeholder='Students' name='students' value={updateCourse.students} onChange={handleChange} required/>
            <input type="number" placeholder='Hours' name='hours' value={updateCourse.hours} onChange={handleChange} required/>
            <input type="text" placeholder='Demovideo' name='demovideo' value={updateCourse.demovideo} onChange={handleChange} required/>
            <input type="text" placeholder='Fullvideo' name='fullvideo' value={updateCourse.fullvideo} onChange={handleChange} required/>
            <input type="text" placeholder='Language' name='language' value={updateCourse.language} onChange={handleChange} required/>

      {updateCourse?.learnings?.map((point, index) => (
         <div key={index} className='learning'>
           <input type="text" name="learnings" placeholder='Learnings' value={point}
             onChange={(e) => handleChange(e, index, "learnings")} />
           <IoMdClose onClick={() => removeInputField(index, "learnings")} required/>
        </div>))}
        <button type="button" onClick={() => addInputField("learnings")}>Add More</button>
      {updateCourse?.course_includes?.map((point, index) => (
        <div key={index} className='course-include'>
           <input type="text" name="course_includes" placeholder='Course Includes' value={point}
             onChange={(e) => handleChange(e, index, "course_includes")} required/>
           <IoMdClose onClick={() => removeInputField(index, "course_includes")} />
        </div>))}
        <button type="button" onClick={() => addInputField("course_includes")}>Add More</button>
        {updateCourse?.requirements?.map((point, index) => (
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