import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import {FaRegUserCircle} from "react-icons/fa"
import{SiCoursera} from "react-icons/si"
import {BiAddToQueue} from "react-icons/bi"
import { Link } from "react-router-dom"
import axios from "axios"
import { Dashboard } from './Dashboard'
import { RegisterUser } from './RegisterUser'
import { PurchaseCourses } from './PurchaseCourses'
// import { url } from '../api'


export const Admin = () => {

  const url = "https://tech-wave-backend-server.onrender.com"
  
  const [data,setData] = useState([])
  const [usersData,setUsersData] = useState([])
  const [selectTed , setSelectTed] = useState("dashboard")

  const handleClick = (tab) => {
    setSelectTed(tab)
  }
  const getUsers = async() => {
    try {
        let res = await axios.get(`${url}/users/`)
        console.log(res.data)
        setUsersData(res.data)
    } catch (error) {
        console.log(error)
    }
}

  const fetchData = async() => {
    try {
      let res = await axios.get(`${url}/courses`)
        setData(res.data.courses);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUsers()
    fetchData()
  }, []);
  

  return (
    <MainDiv>
      <Left>
        <div className='home-btn'><button>Home</button></div>
        <div className='overview'>
          <Button selected={selectTed === "dashboard"} onClick={()=>{handleClick("dashboard")}}>Dashboard</Button>
          <Button selected={selectTed === "registerUser"} onClick={()=>{handleClick("registerUser")}}>Register Users</Button>
          <Button selected={selectTed === "purchasecourse"} onClick={()=>{handleClick("purchasecourse")}}>Purchased Course</Button>
          <Button selected={selectTed === "report"} onClick={()=>{handleClick("report")}}>Reports</Button>
        </div>
      </Left>
        <Right>
        <NavDiv>
            <div className='logout-btn'>
              <button><Link style={{color:"#fff",textDecoration:"none"}} to={"/addCourses"}>Add</Link></button>
              <button id='logout'>Logout</button>
            </div>
        </NavDiv>
        <div className='overview-heading'>
          <div>
            <FaRegUserCircle className='icon' />
            <h1 id="count">{usersData?.length}</h1>
            <h3 id="user">Register Users</h3>
          </div>
          <div>
            <SiCoursera className='icon'/>
            <h1 id="count">{data?.length}</h1>
            <h3 id="user">Total Courses</h3>
          </div>
          <div>
            <BiAddToQueue className='icon'/>
            <h1 id="count">5</h1>
            <h3 id="user">Blocklist User</h3>
          </div>
        </div>
        {selectTed === "dashboard" && <Dashboard />}
        {selectTed === "registerUser" && <RegisterUser />}
        {selectTed === "purchasecourse" && <PurchaseCourses />}
        {selectTed === "report" &&  <Dashboard />}
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
const Button = styled.button`
  display: block;
    padding: .5rem;
    width:100% ;
    background-color: ${(props) =>
    props.selected ? "#fff" : "#0056d2"};
    color: ${(props) =>
    props.selected ? "#0056d2" : "#fff"};
    border: none;
    margin: .8rem auto ;
    &:hover {
      background-color: #fff ;
      color: #0056d2;
      cursor: pointer;
  }
`
const Left = styled.div`
width: 20%;
background-color: #0056d2;
.overview{
  text-align: center;
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
        .logout{
          padding: .7rem 1rem;
        }
        button{
          padding: .7rem .5rem;
        margin-right: .5rem;
        width: 5rem;
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