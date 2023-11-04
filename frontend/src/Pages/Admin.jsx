import React, { useState,useEffect } from 'react'
import { AddCourses } from './AddCourses'
import styled from 'styled-components'

export function Admin() {
  const [data,setData] = useState([])
  useEffect(() => {
    fetch("https://techwave-test.onrender.com/courses")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <MainDiv>
        <NavDiv>
            <button>Home</button>
            <div className='logout-btn'>
              <button>Add</button>
              <button>Logout</button>
            </div>
        </NavDiv>
        <AddCourses />
    </MainDiv>
  )
}

const  MainDiv = styled.div`

`
const NavDiv = styled.div`
    margin-top: .9rem ;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .logout-btn{
        width: 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
const ShowData = styled.div`
table{
  border: 1px solid black;
  padding: 10px;
  th{
  border: 5px solid black;
  padding: 5px;
  margin: 5px;
  }
  td{
  border: 5px solid black;
  padding: 5px;
  }
}
    
`
