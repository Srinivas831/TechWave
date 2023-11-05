import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {useNavigate} from"react-router-dom";
import { setdiscountPrice, setoriginalPrice } from '../redux/checkoutprice/action';

const Cart = () => {
    const [data,setData]=useState([]);
    const [originalPrice,setOriginalPrice]=useState(0);
    const [discountPrice,setDiscountPrice]=useState(0);
    const [loading,setLoading]=useState(true);
    const isAuth=Cookies.get("userId");
    // impo
    let userId=isAuth;
  const nav=useNavigate();
  const dispatch=useDispatch();
    console.log(userId);
    useEffect(()=>{
        axios.get(`http://localhost:8080/courses/getfromcart?userId=${userId}`)
        .then((res)=>{console.log(res.data)
          setLoading(false);
        setData(res.data.data);

        const originalPrice = res.data.data.reduce((prev,curr) => prev + curr.original_price, 0);
        const discountPrice = res.data.data.reduce((prev,curr) => prev + curr.discounted_price, 0);
        setOriginalPrice(originalPrice);
        setDiscountPrice(discountPrice);
        dispatch(setoriginalPrice(originalPrice));
        dispatch(setdiscountPrice(discountPrice));
        })
        .catch((err)=>{
          setLoading(false);
          console.log("error")});
    },[dispatch])
    // console.log(data.data);

    const handlRemoveFromCart=(userId,productId)=>{
axios.delete(`http://localhost:8080/courses/deletefromcart?userId=${userId}&productId=${productId}`)
.then((res)=>{
  // alert("removed");
  setOriginalPrice(originalPrice - data.find(item => item.productId === productId).original_price);
        setDiscountPrice(discountPrice - data.find(item => item.productId === productId).discounted_price);
  setData((prevData)=>prevData.filter((item)=>item.productId!=productId));
})
.catch((err)=>alert("error removing from cart"));
    }

    const handleCheckout=()=>{
      if(!isAuth){
        nav("/login");
      }
      else{
        nav("/checkout");
      }
    }

if(loading){
  return <h1>Loading...</h1>;
}
if (!data || data.length === 0) {
  return <div><h1>No items in your cart</h1></div>;
}

  return (
    <>
    <h2>original:{originalPrice}</h2>
    <h2>discout:{discountPrice}</h2>
    {
      data && data.map((ele)=>{
        return <div key={ele._id}>
          <h1>{ele.title}</h1>
          {/* <iframe width="560" height="315" src={ele.fullvideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          <p>{ele.instructor}</p>
          <button onClick={(e)=>{handlRemoveFromCart(ele.userId,ele.productId)}}>remove</button>
          
        </div>
      })
    }
    <button onClick={handleCheckout}>checkout</button>
    </>
  )
}

export default Cart