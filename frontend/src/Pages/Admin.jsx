import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import {FaRegUserCircle} from "react-icons/fa"
import{SiCoursera} from "react-icons/si"
import {BiAddToQueue} from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { Dashboard } from './Dashboard'
import { RegisterUser } from './RegisterUser'
import { PurchaseCourses } from './PurchaseCourses'



export const Admin = () => {

  const url = "https://tech-wave-backend-server.onrender.com"
  
  const [data,setData] = useState([])
  const [totalPage,setTotalPage] = useState(0);
  const [lastPage,setLastPage] = useState(0);
  const [usersData,setUsersData] = useState(0)
  const [selectTed , setSelectTed] = useState("dashboard")
  const [blocklistUsers,setBlocklistUsers] = useState(0)
  const navigate = useNavigate()

  const handleClick = (tab) => {
    setSelectTed(tab)
  }
  const getUsers = async() => {
    try {
        let res = await axios.get(`${url}/users/`)
        console.log(res.data)
        setUsersData(res.data.length)
    } catch (error) {
        console.log(error)
    }
}

  const fetchData = async() => {
    try {
      let res = await axios.get(`${url}/courses`)
        setTotalPage(res.data.totalPages)
        setData(res.data.courses.length);
    } catch (error) {
      console.log(error)
    }
  }
  const lastPageData = async() => {
    try {
      let res = await axios.get(`${url}/courses?limit=10&page=5`)
        setLastPage(res.data.courses.length);
    } catch (error) {
      console.log(error)
    }
  }
  const getBlockUsers = async() => {
    try {
      let res = await axios.get("http://localhost:8080/users/blockUsers");
      setBlocklistUsers(res.data.length)
    } catch (error) {
      console.log({"msg":error.message})
    }
  }
  useEffect(() => {
    getUsers()
    fetchData()
    lastPageData()
    getBlockUsers()
  }, [data]);

  const navigateToHome = () => {
    navigate("/")
  }

  return (
    <MainDiv>
      <Left>
        <div className='home-btn' onClick={navigateToHome}><button>Home</button></div>
        <div className='overview'>
          <Button selected={selectTed === "dashboard"} onClick={()=>{handleClick("dashboard")}}>Dashboard</Button>
          <Button selected={selectTed === "registerUser"} onClick={()=>{handleClick("registerUser")}}>Register Users</Button>
          <Button selected={selectTed === "purchasecourse"} onClick={()=>{handleClick("purchasecourse")}}>Purchased Course</Button>
          <Button selected={selectTed === "report"} onClick={()=>{handleClick("report")}}>Reports</Button>
        </div>
      </Left>
        <Right>
        <NavDiv>
            <div className='add-logout-btn'>
              <button><Link to={"/addCourses"} className='add-btn'>Add</Link></button>
              <button id='logout'>Logout</button>
            </div>
        </NavDiv>
        <div className='overview-heading'>
          <div>
            <FaRegUserCircle className='icon' />
            <h1 id="count">{usersData}</h1>
            <h3 id="user">Register Users</h3>
          </div>
          <div>
            <SiCoursera className='icon'/>
            <h1 id="count">{data && lastPage && totalPage && (data*(totalPage-1) + lastPage)}</h1>
            <h3 id="user">Total Courses</h3>
          </div>
          <div>
            <BiAddToQueue className='icon'/>
            <h1 id="count">{blocklistUsers}</h1>
            <h3 id="user">Blocklist User</h3>
          </div>
        </div>
        {selectTed === "dashboard" && <Dashboard count={data} update={setData}/>}
        {selectTed === "registerUser" && <RegisterUser user={usersData} update={setUsersData} updateBlockusers={getBlockUsers}/>}
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
    font-weight: bold;
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
      margin-top: 1rem;
      margin-bottom: 3rem;
      button{
        padding: .2rem;
        width:100%;
        font-size: 1.2rem;
        font-weight: bolder;
        border: none;
        background-color: #0056d2;
        color: #fff;
        cursor: pointer;
        &:hover{
        background: #fff;
        color: #0056d2;
        border-radius: .5rem ;
      }
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
    .add-logout-btn{
        display: flex;
        justify-content: end;
        align-items: center;
        button{
          padding: .4rem .9rem;
          margin-right: 1rem;
          /* width: 5rem; */
          font-size: 1.1rem;
          font-weight: bold;
          border: none;
          border-radius: .5rem;
          background-color: #0056d2;
          color: #fff;
          cursor: pointer;
          &:hover{
            color: #0056d2;
            background-color: #fff;
          }
        }
        .add-btn{
            text-decoration: none;
            color: #fff;
            &:hover{
            color: #0056d2;
            background-color: #fff;
          }
        }

    }
`
