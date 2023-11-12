import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {BiUserCircle} from "react-icons/bi"
import {AiOutlineEdit} from "react-icons/ai"
import axios from 'axios'
// import { url } from '../api'

export const PurchaseCourses = () => {

  const url = "https://tech-wave-backend-server.onrender.com"
  
  const [registerUsersData,setRegisterUsersData] = useState([]);

    const getUsers = async() => {
        try {
            let res = await axios.get(`${url}/users/`)
            console.log(res.data)
            setRegisterUsersData(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    const getPurchasedData = async() => {
      try {
        let res = await axios.get(`${url}/courses/getfrompurchased`)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(()=>{
      getUsers()
      getPurchasedData()
    },[])
  return (
    <ShowData>
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Purchased Courses</th>
                </tr>
              </thead>
              <tbody>
                {registerUsersData.length>0 && registerUsersData?.map((item,i)=>(
                  <tr key={item._id}>
                  <td className='common'>{`${i+1} )`}</td>
                  <td className='common'>{item.userName}</td>
                  <td className='common'>{item.email}</td>
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
tbody{
    .common{
        text-align: center;
    }
  }
}

`