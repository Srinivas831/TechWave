import React, { useEffect } from "react";
import Styled from "styled-components";
import "../Css/utils.css";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getMyLearning } from "../redux/mylearning/action";
import Navbar from "../Components/Navbar";

function MyLearning() {
  const dispatch = useDispatch();
  const userId = Cookies.get("userId");
  console.log("userr", userId);
  const { courseArray, loading, isError } = useSelector((store) => {
    return {
      courseArray: store.reducer.courseArray,
      loading: store.reducer.loading,
      isError: store.reducer.isError,
    };
  });

  // console.log("q",courseArray);

  useEffect(() => {
    dispatch(getMyLearning(userId));
  }, []);
  if (!courseArray || courseArray.length === 0) {
    return (
      <div>
        <Navbar />
        <div
        style={{
          textAlign: "center",
          height: "50vh",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>No items in your Learning Library</h1>
      </div>
      </div>
    );
  }

  // if (loading) {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100vh",
  //       }}
  //     >
  //       {" "}
  //       <img
  //         src="https://media.tenor.com/JBgYqrobdxsAAAAi/loading.gif"
  //         alt="Girl in a jacket"
  //         width="200"
  //         height="200"
  //         style={{ textAlign: "center" }}
  //       />
  //     </div>
  //   );
  //   // return <div>Loading....</div>
  // }
  return (
    <div>
      <Navbar />
      <DIV>
      <div className="parent-mylearning">
        <div className="parent-mylearning-top-heading">
          <h1>My Learning</h1>
        </div>
        <div className="mylearning-course">
          {courseArray.length > 0 &&
            courseArray?.map((ele) => {
              return (
                <div className="mylearning-course-card">
                  <div className="mylearning-course-card-img">
                    <iframe
                      width="100%"
                      height={"300px"}
                      src={ele.fullvideo}
                      title="YouTube video player"
                      frameborder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="mylearning-course-card-title">
                    <h2>{ele.title}</h2>
                    <p>{ele.instructor}</p>
                    <h6>Rating: {ele.rating}</h6>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </DIV>
    </div>
  );
}

export default MyLearning;

const DIV = Styled.div`
    font-family : var(--primary-font-family);
    .parent-mylearning{
        width : 90%;
        margin : 2.5rem auto;
    }
    .parent-mylearning-top-heading{
        display : flex;
        height : 200px;
        background-color : var(--dark-color);
        border-radius : 10px; 
        justify-content : center;
        align-items : center;
    }
    .parent-mylearning-top-heading h1{
        color : var(--secondary-color);
    }
    .mylearning-course{
        margin : 2.5rem auto;
        display : grid;
        grid-template-columns : repeat(3,1fr);
        gap:25px;
        justify-content : space-between;

    }
    .link{
        text-decoration : none;
    }
    .mylearning-course-card{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding:10px
    }
    .mylearning-course-card-img{
        width : 100%;
    }
    .mylearning-course-card-img img{
        width : 100%;
    }
    .mylearning-course-card-title h2 {
        color : var(--dark-color);
        font-weight : 500;
        height:80px;
        overflow:hidden;
        
    }
    .mylearning-course-card-desc p{
    }
    .mylearning-course-card-title p , .mylearning-course-card-title h6{
        color : var(--dark-color);
    }

    @media screen and (max-width:600px){
      .mylearning-course{
            grid-template-columns : repeat(1,1fr);
            
        }
    }
// `;
