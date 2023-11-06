
import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import {FaRegUserCircle} from "react-icons/fa"
import{SiCoursera} from "react-icons/si"
import {BiAddToQueue} from "react-icons/bi"
import {Update} from "./Update"
import { Link, useNavigate} from "react-router-dom"
import {AiOutlineEdit} from "react-icons/ai"
import {MdDeleteOutline} from "react-icons/md"

export function Admin() {
  const [data,setData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch("https://techwave-test.onrender.com/courses")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(data)

  const handleDelete = async(item) => {
    try {
      let res = await fetch(`https://calm-gold-slug-toga.cyclic.app/courses/delete/${item}`,{
        method : "DELETE",
      })
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <MainDiv>
      <Left>
        <div className='home-btn'><button>Home</button></div>
        <div className='overview'>
          <button>Dashboard</button>
          <button>Orders</button>
          <button>Products</button>
          <button>Reports</button>
        </div>
      </Left>
        <Right>
        <NavDiv>
            <div className='logout-btn'>
              <button><Link style={{color:"#fff",textDecoration:"none"}} to={"/addCourses"}>Add</Link></button>
              <button>Logout</button>
            </div>
        </NavDiv>
        <div className='overview-heading'>
          <div>
            <FaRegUserCircle className='icon' />
            <h1 id="count">5</h1>
            <h3 id="user">Register Users</h3>
          </div>
          <div>
            <SiCoursera className='icon'/>
            <h1 id="count">5</h1>
            <h3 id="user">Register Users</h3>
          </div>
          <div>
            <BiAddToQueue className='icon'/>
            <h1 id="count">5</h1>
            <h3 id="user">Register Users</h3>
          </div>
        </div>
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
                {data?.map((item,i)=>(
                  <tr>
                  <td>{`${i+1} )`}</td>
                  <td className='edit-course'>
                    <MdDeleteOutline id='delete-btn' onClick={()=>{handleDelete(item.id)}} />
                    </td>
                  <td className='delete-course'><Link to={`/update/${item.id}`}>
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
        </Right>
    </MainDiv>
  )
}

const  MainDiv = styled.div`
box-sizing: border-box;
margin: 0;
padding: 0;
display: flex;
`
const Left = styled.div`
width: 20%;
background-color: #0056d2;
.overview{
  text-align: center;
  button{
    display: block;
    padding: .5rem;
    width:100% ;
    background-color: #0056d2;
    color: #fff;
    border: none;
    margin: .8rem auto ;
  }
  button: hover {
    background-color: #fff ;
    color: #0056d2;
    cursor: pointer;
  }
}
.home-btn{
      width: 30%;
      margin: auto;
      button{
        margin-top: 1rem;
        margin-bottom: 3rem;
        padding: .7rem .5rem;
        width:100%;
        font-size: 1.1rem;
        font-weight: bolder;
        border: none;
        background-color: #0056d2;
        color: #fff;
      }
    }
`
const Right = styled.div`
width: 80%;
.overview-heading{
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 1rem;
      margin: 1rem;
      .icon{
        font-size:3rem;
      }
      div{
        width: 100%;
        border-radius: 1rem;
        padding: 1rem;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        h3{
          margin-top: .5rem;
        }
        h1{
          margin-top: 1rem;
        }
      }
      div:hover {
        background-color: #0056d2;
        color : #fff;
      }
    }

`
const NavDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    padding: 1rem 0rem;
    margin-bottom: 1rem;
    .logout-btn{
        width: 40%;
        display: flex;
        justify-content: end;
        align-items: center;
        button{
          padding: .7rem .5rem;
        margin-right: .5rem;
        width: 20%;
        font-size: 1.1rem;
        font-weight: bolder;
        border: none;
        border-radius: 1.3rem;
        background-color: #0056d2;
        color: #fff;
        cursor: pointer;
      }

    }
`
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
