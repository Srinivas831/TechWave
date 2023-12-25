
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { url } from '../api';

export const PurchaseCourses = () => {
  const [registerUsersData, setRegisterUsersData] = useState([]);
  const [purchasedData, setPurchasedData] = useState([]);

  const getUsers = async () => {
    try {
      let res = await axios.get(`${url}/users/`);
      setRegisterUsersData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCoursesCount = async () => {
    try {
      let res = await axios.get(`${url}/courses/getfrompurchased`);
      setPurchasedData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
    fetchCoursesCount();
  }, []);

  const combinedData = registerUsersData.map((user) => {
    const purchasedCourses = purchasedData.find((purchase) => purchase.userId === user._id);
    return {
      userId: user._id,
      userName: user.userName,
      email: user.email,
      purchasedCourses: purchasedCourses ? purchasedCourses.productId : [],
    };
  });

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
          {combinedData.length > 0 &&
            combinedData.map((item, i) => (
              <tr key={item.userId}>
                <td className='common'>{`${i + 1} )`}</td>
                <td className='common'>{item.userName}</td>
                <td className='common'>{item.email}</td>
                <td className='common'>{item.purchasedCourses.length}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </ShowData>
  );
};
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