import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {AiOutlineEdit} from "react-icons/ai"
import {BiUserCircle} from "react-icons/bi"
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Popup from './Popup'
import { url } from '../api'


export const RegisterUser = ({user,update,updateBlockusers}) => {
  
    const [registerUsersData,setRegisterUsersData] = useState([]);
    const [popup, setPopup] = useState(false);
    const [object, setObject] = useState({})

    const getUsers = async() => {
        try {
            let res = await axios.get(`${url}/users/`)
            // console.log(res.data)
            setRegisterUsersData(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getUsers()
    },[])

    const showPopup = (item,i) => {
      setObject(item)
      // showCourses(id)
      setPopup(!popup);
      console.log(item,i)
    }
    const blockUser = async(email) => {
      let obj = {
        blockEmail : email,
      }
      // console.log(obj)
      try {
        let res = await axios.post(`${url}/users/userBlock`,obj)
        update(user-1)
        getUsers()
        updateBlockusers()
        // console.log(res.data.msg);
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
                  <th>UserDetails</th>
                  <th>Block</th>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
              {registerUsersData.length > 0 &&
  registerUsersData
    .filter((item) => item.email !== "admin@admin.com")
    .map((item, i) => (
      <tr key={item._id}>
        <td className="common">{`${i + 1} )`}</td>
        <td>
            <div className="userDetailBtn" onClick={() => showPopup(item, i)}>
              <BiUserCircle id="user-detail-btn" />
            </div>
        </td>
        <td>
          <div className="blockBtn">
            <button
              onClick={() => blockUser(item.email)}
              className="block-user"
            >
              <AiOutlineEdit id="block-btn" />
            </button>
          </div>
        </td>
        <td className="common">{item.userName}</td>
        <td className="common">{item.email}</td>
      </tr>
    ))}

              </tbody>
            </table>
            {popup ? <div>
              <Popup value={popup} fuc={setPopup} obj={object}/>
            </div> : ""}
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
    .userDetailBtn{
        display: flex;
        justify-content: center;
        #user-detail-btn{
            color: black;
            padding: .3rem;
            font-size: 2rem;
            border-radius: .2rem;
            &:hover{
              background-color: #0056d2;
              color: white;
            }
        } & :hover{
          cursor: pointer;
        }
    }
    .blockBtn{
        display: flex;
        justify-content: center;
        .block-user{
          background: none;
          border: none;
        }
        #block-btn{
          padding: .3rem;
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
}
}

`