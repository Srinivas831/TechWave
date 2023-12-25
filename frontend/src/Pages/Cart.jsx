
import axios from 'axios';
import { checkoutStore, setdiscountPrice,setoriginalPriceaction } from '../redux/checkoutprice/action';
import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import "../Css/utils.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import Navbar from '../Components/Navbar';


function Cart() {

  const url = "https://tech-wave-backend-server.onrender.com"
  
  const [data, setData] = useState([]);
  const [originalPrice, setOriginalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const isAuth = Cookies.get("userId");
  let userId = isAuth;
  const nav = useNavigate();
  const dispatch = useDispatch();
  // console.log(userId);
  useEffect(() => {
    axios
      .get(`${url}/courses/getfromcart?userId=${userId}`)
      .then((res) => {
        // console.log(res.data);
        setLoading(false);
        setData(res.data.data);

        const originalPrice = res.data.data.reduce(
          (prev, curr) => prev + curr.original_price,
          0
        );
        const discountPrice = res.data.data.reduce(
          (prev, curr) => prev + curr.discounted_price,
          0
        );
        setOriginalPrice(originalPrice);
        setDiscountPrice(discountPrice);
        dispatch(setoriginalPriceaction(originalPrice));
        dispatch(setdiscountPrice(discountPrice));
      })
      .catch((err) => {
        setLoading(false);
        // console.log("qqq",err);
      });
  }, [dispatch]);
  // console.log("dataaa",data);

  const handlRemoveFromCart = (userId, productId) => {
    axios
      .delete(
        `${url}/courses/deletefromcart?userId=${userId}&productId=${productId}`
      )
      .then((res) => {
        setOriginalPrice(
          originalPrice -
            data.find((item) => item.productId === productId).original_price
        );
        setDiscountPrice(
          discountPrice -
            data.find((item) => item.productId === productId).discounted_price
        );
        setData((prevData) =>
          prevData.filter((item) => item.productId != productId)
        );
      })
      .catch((err) => console.log("error removing from cart",err));
  };

  const handleCheckout = () => {
    if (!isAuth) {
      nav("/login");
    } else {
      const allProductId=data?.map((el)=>el.productId);
      dispatch(checkoutStore(allProductId))
      nav("/checkout");
    }
  };

  if(loading){
    <img src="https://media.tenor.com/JBgYqrobdxsAAAAi/loading.gif" alt="Girl in a jacket" width="200" height="200" style={{textAlign:"center"}}/>;
  }
  if (!data || data.length === 0) {
    return (
      <div>
        <Navbar />
        <div style={{textAlign:"center",height:"80vh",margin:"auto",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h1>No items in your cart</h1>
      </div>
      </div>
    );
  }

  // -----------------------
  return (
    <div>
      <Navbar />
    <DIV>
      <div className="parent-cart">
        <div className="heading">
          <h1>Shopping Cart</h1>
        </div>
        <div className="main-child">
          <div className="child-left">

            { data?.map((ele) => {

              return (
                <div className="cart-card" key={ele.id}>
                  <div className="cart-card-img">
                    <img src={ele.image} alt="img" />
                  </div>
                  <div className="cart-card-heading">
                    <h3>{ele.title}</h3>
                    <p>{ele.instructor}</p>
                    <h5>{ele.rating}</h5>
                    <p>{ele.hours} Total Hours |</p>
                  </div>
                  <div className="cart-card-fucntion">
                    <button
                      className="dark_button"
                      onClick={() =>
                        handlRemoveFromCart(ele.userId, ele.productId)
                      }
                    >
                      Remove
                    </button>
                  </div>
                  <div className="cart-card-price">
                    <p>₹ {ele.original_price}</p>
                    <h3>₹ {ele.discounted_price}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="child-right">
            <div>
              <h3>Total : </h3>
            </div>
            <div className='price'>
              <h3>₹ {originalPrice}</h3>
              <h1>₹ {discountPrice}</h1>
            </div>
            <div>
              <button
                className="extra_big_dark_button"
                onClick={() => {
                  // navigate("/checkout")
                  handleCheckout();
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </DIV>
    </div>
  );
}

export default Cart;

const DIV = Styled.div`
    font-family : var(--primary-font-family);
    min-height : 80vh ;
    .parent-cart{
        width : 90%;
        margin : 2.5rem auto;
    }
    .heading h1{
        font-weight : 600;
        display : inline;
        position : relative;
    }
    .heading h1:before{
        content : "";
        position : absolute;
        bottom : -10px;
        height : 5px;
        width : 100%;  
        background: var(--primary-color);
        border-radius : 50px;
        transition : all 0.5s ease;
    }
    .main-child{
        margin : 3rem auto;
        display : flex;
        width : 100%;
        justify-content : space-between;
    }
    /* left all cart product */
    .child-left{
        width: 65%;
    }
    .cart-card{
        width: 100%;
        display : grid;
        margin : 0 0 1.5rem 0;
        padding-top : 0.5rem;
        grid-template-columns : 17% 50% 10% 10%;
        border-top : 1px solid var(--dark-color);
        justify-content : space-between;
        /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    }
    .cart-card-img{
        /* width : 150px;
        height : 100px; */
        overflow : hidden;
        background-position : center;
        object-fit: cover;
    }
    .cart-card-img img{
        width : 100%;
    }
    .cart-card-price{
        margin-left : 5px;
        /* display: flex; */
        align-items : center;
    }
    .cart-card-price p{
        font-size : 12px;
        text-decoration: line-through;   
    }
    .cart-card-price h3{
        color : var(--primary-color);
    }
    /* right is for total pricing */
    .child-right{
        width: 30%;
    }
    .price h3{
      text-decoration: line-through;
    }

    @media (max-width:780px) {
      .main-child{
        flex-direction: column-reverse;
        gap : 1.5rem;
        justify-content: space-between;
      }
      .cart-card{
        grid-template-columns : repeat(3,1fr);
        gap : 1rem;
      }
      .child-left{
        width : 100%;
      }

      .cart-card-price{
        margin-left : 1rem;
      }
    }
`;



  
