import React from 'react'
import {AiOutlineEdit} from "react-icons/ai"
import {MdDeleteOutline} from "react-icons/md";
import axios from "axios"
import { useState,useEffect } from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'



export const Dashboard = ({count,update}) => {

  const url = "https://tech-wave-backend-server.onrender.com"
  
  const [data,setData] = useState([])
  const [currentPage,setCurrentPage] = useState(1);
  const [totalPage,setTotalPage] = useState(0);

  const fetchData = async(currentPage) => {
    try {
      let res = await axios.get(`${url}/courses?limit=10&page=${currentPage}`)
          setData(res.data.courses);
          setTotalPage(res.data.totalPages);
    } catch (error) {
    }
  }
  useEffect(() => {
    fetchData(currentPage)
  },[currentPage]);

  

const handleDelete = async(id) => {
        try {
          await axios.delete(`${url}/courses/delete/${id}`)
          fetchData(currentPage)
          update(count-1)
        } catch (error) {
          console.log(error)
        }
}

  return (
    <MainDiv>
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
    <PaginationDiv>
      <button className='prev-button' disabled={currentPage===1} onClick={()=>setCurrentPage(currentPage-1)}>Pre</button>
      <pre>    {currentPage}  </pre>
      <button className='next-button' disabled={currentPage===totalPage} onClick={()=>setCurrentPage(currentPage+1)}>Next</button>
    </PaginationDiv>
    </MainDiv>
  )
}
const MainDiv = styled.div`
  
`
const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  .prev-button, .next-button {
  background-color: #0056d2;
  color: white;
  font-weight: bolder;
  padding: .5rem 1.5rem; 
  border: none; 
  border-radius: 5px; 
  cursor: pointer;
}
.next-button {
  background-color: #0056d2;
}
.next-button {
  margin-left: 10px;
}
.prev-button:hover, .next-button:hover {
  background-color: #efeeee;
  color: #0056d2;
}

`
const ShowData = styled.div`
margin: 1rem;
height: 50vh;
  overflow-y: auto ;
table{
  border-collapse: collapse;
  width: 100%;
  
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