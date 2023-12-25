// import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
// import axios from 'axios'


// export const PurchaseCourses = () => {
//   const url = "https://tech-wave-backend-server.onrender.com"
//   const [registerUsersData,setRegisterUsersData] = useState([]);
//   const [courseCount,setCourseCount] = useState('')

//     const getUsers = async() => {
//         try {
//             let res = await axios.get(`${url}/users/`)
//             console.log("user",res.data)
//             setRegisterUsersData(res.data)
//         } catch (error) {
//             console.log(error)
//         }
//     } 

//     const fetchCoursesCount = async() => {
//       try {
//           let res = await axios.get("http://localhost:8080/courses/getfrompurchased")
//           console.log("ress",res.data)
//       } catch (error) {
//           console.log(error)
//       }
//   }


  
//     const getPurchasedData = async() => {
//       try {
//         let res = await axios.get(`${url}/courses/getfrompurchased`)
//         console.log(res.data)
//       } catch (error) {
//         console.log(error)
//       }
//     }

//     useEffect(()=>{
//       getUsers()
//       getPurchasedData()
//       fetchCoursesCount()
//     },[])

//   return (
//     <ShowData>
//             <table>
//               <thead>
//                 <tr>
//                   <th>S.No</th>
//                   <th>Username</th>
//                   <th>Email</th>
//                   <th>Purchased Courses</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {registerUsersData.length>0 && registerUsersData?.map((item,i)=>(
//                   <tr key={item._id}>
//                   <td className='common'>{`${i+1} )`}</td>
//                   <td className='common'>{item.userName}</td>
//                   <td className='common'>{item.email}</td>
//                   {/* <td>{}</td> */}
//                 </tr>))}
//               </tbody>
//             </table>
//         </ShowData>
//   )
// }


// const ShowData = styled.div`
// margin: 1rem;
// height: 50vh;
//   overflow-y: auto ;
// table{
//   border-collapse: collapse;
//   width: 100%;
//   thead {
//       tr {
//         th {
//           border: 2px solid black;
//           padding: 0.5rem;
//         } 
//       }
//     }
//   td{
//   border: 2px solid black;
//   padding: .5rem;
// }
// tbody{
//     .common{
//         text-align: center;
//     }
//   }
// }

// `
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export const PurchaseCourses = () => {
  const url = "https://tech-wave-backend-server.onrender.com";
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