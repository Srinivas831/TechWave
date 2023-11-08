import React from 'react'

import {AiOutlineEdit} from "react-icons/ai"
import {MdDeleteOutline} from "react-icons/md";
import axios from "axios"
import { useState,useEffect } from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'


export const Dashboard = () => {

    const [data,setData] = useState([])
const fetchData = async() => {
        try {
          let res = await axios.get("http://localhost:8080/courses")
            setData(res.data.courses);
        } catch (error) {
          console.log(error)
        }
}
      useEffect(() => {
        fetchData()
        }, []);
const handleDelete = async(id) => {
        try {
          let res = await axios.delete(`http://localhost:8080/courses/delete/${id}`)
          fetchData()
        } catch (error) {
          console.log(error)
        }
}

  return (
    <ShowData>
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Delete</th>
                  <th>Update</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Instructor</th>
                  <th>Original Price</th>
                </tr>
              </thead>
              <tbody>
                {data.length>0 && data.map((item,i)=>(
                  <tr key={item.id}>
                  <td>{`${i+1} )`}</td>
                  <td>
                    <MdDeleteOutline id='delete-btn' onClick={()=>{handleDelete(item._id)}} />
                    </td>
                  <td><Link to={`/update/${item._id}`}>
                    <AiOutlineEdit id='edit-btn'/>
                    </Link></td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.instructor}</td>
                  <td>{item.original_price}</td>
                </tr>))}
              </tbody>
            </table>
        </ShowData>
  )
}

const ShowData = styled.div`
margin: 1rem;
height: 50vh;
  overflow-y: auto ;
table{
  border-collapse: collapse;
  
  thead {
      tr {
        th {
          border: 2px solid black;
          padding: 0.5rem;
        } 
      }
    }
  td{
  border: 2px solid black;
  padding: .5rem;
}
#delete-btn{
  padding: .3rem;
  border-radius: .2rem;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  &:hover{
      background-color: #0056d2;
      color: white;
    }
}
#edit-btn{
    padding: .3rem;
    width: 100%;
    color: black;
    border-radius: .2rem;
    cursor: pointer;
    border: none;
    font-size: 2rem;
    &:hover{
      background-color: #0056d2;
      color: white;
    }
  }
}

`