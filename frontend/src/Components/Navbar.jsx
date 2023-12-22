import React, {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Styled from "styled-components";
import logo from "../Assets/logo_png.png";
import "../Css/utils.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function Navbar() {

  const url = "https://tech-wave-backend-server.onrender.com"
  
  const [menu, setmenu] = useState(false);

  const [alertMessage, setAlertMessage] = React.useState("");
  const [alertSeverity, setAlertSeverity] = React.useState("success");
  const [showAlert, setShowAlert] = React.useState(false);
  const [data, setData] = useState([]);
 

  const handelMenu = () => {
    setmenu((prev) => !prev);
  };
  const navigate = useNavigate();
  const isAuth = Cookies.get("token");
  const isUser = Cookies.get("userId");
  let userId = isUser;
  

 function handlLogout(){

  axios.post(`${url}/users/logout`,{
    headers:{
      Authorization:`Bearer ${isAuth}`
    }
  })
  .then((res) => {
    if (res.data.message === "Logged out Successfully") {
      Cookies.remove("token");
      Cookies.remove("user");
      Cookies.remove("userId");
      if(Cookies.get("isAdmin")){
        Cookies.remove("isAdmin");
      }
      setAlertSeverity('success');
      setAlertMessage('Logged out Successfully');
      navigate("/")

    } 
    else {
      setAlertSeverity('error');
      setAlertMessage(res.data.message);
    }
  })
}
  React.useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
        // if (alertSeverity === "success") {
          // navigate("/");
        // }
      }, 2000);
      return () => clearTimeout(timer);

    }
    axios
      .get(`${url}/courses/getfromcart?userId=${userId}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [showAlert]);
  const Admin = Cookies.get("isAdmin")

  console.log(data);

  return (
    <DIV>
      <div className="ham">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul className={`nav-menu ${menu ? "active" : ""}`}>
            <li className="nav-links home">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-links">
              <Link to="/courses">Course</Link>
            </li>
            <li className="nav-links">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="nav-links">
              <Link to="/about">About us</Link>
            </li>
           { Admin && <li className="nav-links">
               <Link to="/admin">Admin</Link>
            </li>}
           
           {isAuth && !Admin ? (
              <li className="nav-links">
                <Link to="/mylearning">My Learning</Link>
              </li>
            ) : null}
          </ul>
        </nav>
        <div className="login-signup">
          {!isAuth ? (
            <button
              className="light_button login"
              onClick={() => {
                navigate("/login");
              }}
            >
              LogIn
            </button>
          ) : null}
          {!isAuth ? (
            <button
              className="dark_button"
              onClick={() => {
                navigate("/signup");
              }}
            >
              SignUp
            </button>
          ) : null}
          {isAuth ? (
            <div
              className="shoping-cart"
              onClick={() => {
                navigate("/cart");
              }}
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ fontSize: "20px" }}
              />
              {/* <div className="inside-shoping-cart">
                <p>{data ? data.length.toString() : 0}</p>
              </div> */}
            </div>
          ) : null}
          {isAuth ? (
            <button className="light_button login" onClick={handlLogout}>
              LogOut
            </button>
          ) : null}
        </div>
        <div className={`menu ${menu ? "active" : ""}`} onClick={handelMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        {showAlert && (
          <Stack
            sx={{
              width: ["50%", "30%"],
              position: "fixed",
              top: ["10%"],
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            spacing={2}
          >
            <Alert variant="filled" severity={alertSeverity}>
              {alertMessage}
            </Alert>
          </Stack>
        )}
      </div>
    </DIV>
  );
}
  
export default Navbar;

const DIV = Styled.div`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family : var(--primary-font-family)
}
.ham{
    width: 90%;
    margin: auto;
    background-color: var(--secondary-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    color: var(--dark-color);
    z-index : 100;
    /* position:fixed; */
    /* width:-webkit-fill-available */
}
/* .logo{
    margin: 0 20px;
} */
.logo{
    margin: 0 20px;
    height: 80px;
    display: flex
}
.logo >img{
    width:100%
}
nav{
    margin: 0 20px ;
}
.nav-menu{
    display: flex;
    gap: 60px;
}
.home a{
    color: var(--primary-color) !important;
}
.nav-links{
    list-style: none;
}
.nav-links a{
    text-decoration: none;
    color: var(--dark-color);
    position : relative;
}
.nav-links a:before{
    content : "";
    position : absolute;
    bottom : -5px;
    height : 3px;
    width : 0;  
    background: var(--primary-color);
    border-radius : 50px;
    transition : all 0.5s ease;
}
.nav-links a:hover:before{
  width : 100%;
}

.login-signup{
    display: flex;
    justify-content: space-between; 
}
.login{
    margin: 0 10px;
    padding: 10px
}
.menu{
    display: none;
    margin: 0 20px;
    cursor: pointer;
}
.bar{
    display: block;
    width: 30px;
    height: 3px;
    background-color: var(--primary-color);
    margin: 5px 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;;
}
.shoping-cart{
  display: flex;
  justify-content: center;
  align-items: center;
  margin : 0 10px;
  cursor: pointer;
  position: relative;
}
.inside-shoping-cart{
  position: absolute;
  top : -2px;
  right : -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius : 50%;
  /* border : 1px solid red; */
  height : 20px;
  width : 20px;
  background-color : var(--primary-color);
}
.inside-shoping-cart p{
  color : var(--secondary-color);
  font-size : 14px;
  font-weight : 600;
  /* background-color : var(); */
}

@media (max-width:780px) {
    .menu{
        display: block;
    }
    .menu.active .bar:nth-child(2){
        opacity: 0;
    }
    .menu.active .bar:nth-child(1){
        transform: translateY(8px) rotate(45deg);
    }
    .menu.active .bar:nth-child(3){
        transform: translateY(-8px) rotate(-45deg);
    }
    .nav-menu{
        position: fixed;
        left: -100%;
        top: 80px;
        gap: 40px;
        flex-direction: column;
        background-color: var(--secondary-color);
        width: 100%;
        text-align: center;
        transition: 0.3s;
        z-index : 100;
    }
    .nav-links:last-child{
        padding-bottom: 40px;
    }
    .nav-menu.active{
        left: 0;
    }
}
`
