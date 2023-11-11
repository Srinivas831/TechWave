import React, {useEffect, useState } from "react";
import { styled } from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { SiPaytm } from "react-icons/si";
import { BiSolidLock, BiLogoMastercard } from "react-icons/bi";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { RiVisaLine } from "react-icons/ri";
import { GrPaypal } from "react-icons/gr";
import {BsBank2} from "react-icons/bs"
import {LiaWalletSolid} from "react-icons/lia"
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { addMyLearning } from "../redux/mylearning/action";
import axios from "axios";
import { url } from "../api";

function Checkout() {
  const [credit,setCredit] = useState(false);
  const [paytm,setPaytm] = useState(false)
  const [netbanking,setNetbanking] = useState(false)
  const [mobileWallet,setMobileWallet] = useState(false);
  const [count,setCount]=useState(0);


  const [cardName, setCardName] = useState("");
const [cardNumber, setCardNumber] = useState("");
const [expiryDate, setExpiryDate] = useState("");
const [cvv, setCvv] = useState("");
const [showPaymentError, setShowPaymentError] = useState(false);

  const originalPrice=useSelector((store)=>store.cartReducer.originalPrice);
  const discountPrice=useSelector((store)=>store.cartReducer.discountPrice);
  const productId = useSelector((store) => store.cartReducer.productId);
  const flag=useSelector((store)=>store.reducer.flag);
  const userId = Cookies.get("userId");
  const nav=useNavigate();
  const dispatch=useDispatch();

const discountPercentage = Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
console.log(productId,"idss");

const handleFinalCheckout=()=>{
  if (!credit && !paytm && !netbanking && !mobileWallet) {
    // No payment method selected
    alert("Choose a payment method before completing the checkout.");
  }
  else {
    if(credit && (!cardName || !cardNumber || !expiryDate ||!cvv)){
        alert("Enter all details");
    }
    else{
    // Valid checkout action
    setShowPaymentError(true); 
  let checkoutData={
    userId,
    productId:productId
  }
  axios.delete(`${url}/courses/deletefromcart?productId=${checkoutData.productId}&&userId=${checkoutData.userId}`)
  dispatch(addMyLearning(checkoutData))
  setCount(count+1);
}
  }
}

console.log("flag",flag);

if(flag){
  alert("purchased");
  nav("/")
}


  return (
    <MainDiv>

      <div className="leftside">
        <div className="parant">
        <h1>Checkout</h1>
        <h2>Billing address</h2>
        <div className="country-store">
          <div className="input-size">
            <div className="select-country">
              <p className="left">Country</p>
              <p className="right">Require</p>
            </div>
            <select className="country">
              <option value="">
                <BiChevronDown /> India{" "}
                <BiChevronDown style={{ paddingRight: "5px" }} />
              </option>
            </select>
          </div>
          <div className="input-size">
            <div className="select-country">
              <p className="left">State</p>
              <p className="right">Require</p>
            </div>
            <select className="country">
              <option value="">Please Select...</option>
              <option value="">Andaman and Nicobar Islands</option>
              <option value="">Andhra Pradesh</option>
              <option value="">Arunachal Pradesh</option>
              <option value="">Assam</option>
              <option value="">Bihar</option>
              <option value="">Chandigarh</option>
              <option value="">Dadra and Nagar Haveli</option>
              <option value="">Daman and Diu</option>
              <option value="">Delhi</option>
              <option value="">Goa</option>
              <option value="">Gujarat</option>
              <option value="">Haryana</option>
              <option value="">Himachal Pradesh</option>
              <option value="">Jammu and Kashmir</option>
              <option value="">Jharkhand</option>
              <option value="">Karnatak</option>
              <option value="">Kerela</option>
              <option value="">Ladakh</option>
              <option value="">Lakshadweep</option>
              <option value="">Madhya Pradesh</option>
              <option value="">Maharashtra</option>
              <option value="">Manipur</option>
              <option value="">Meghalaya</option>
              <option value="">Mizoram</option>
              <option value="">Nagaland</option>
              <option value="">Odisha</option>
              <option value="">Puducherry</option>
              <option value="">Punjab</option>
              <option value="">Rajasthan</option>
              <option value="">Sikkim</option>
              <option value="">Tamil Nadu</option>
              <option value="">Telangana</option>
              <option value="">Tripura</option>
              <option value="">Uttar Pradesh</option>
              <option value="">Uttrakhand</option>
              <option value="">West Bengal</option>
            </select>
          </div>
        </div>
        <p className="paragraph">
          Udemy is required by law to collect applicable transaction taxes for
          purchases made in certain tax jurisdictions.
        </p>
        <div className="payment-method">
          <h2>Payment Method</h2>
          <p>Secure Connection<BiSolidLock style={{ width: "20px", height: "20px",marginLeft:".7rem" }}/></p>
        </div>
        <div className="method-border">
            <div className="creditcard-parent">
              <div className="creditcard-logo">
                <input type="checkbox" onChange={(e)=>{setCredit(e.target.checked)}}/>
                <div className="logo-and-creditcard">
                  <BsFillCreditCard2BackFill style={{ fontSize: "25px" }} />
                  <b>Credit/Debit card</b>
                </div>
              </div>
              <div className="card-images">
                <div className="pading">
                  <RiVisaLine style={{ fontSize: "35px", color: "blue" }} />
                  <BiLogoMastercard style={{ fontSize: "25px", color: "orange" }}/>
                  <GrPaypal style={{ fontSize: "25px" }} />
                </div>
              </div>
            </div> <hr />
            {credit ? <><div className="credit-form">
                <p>Name on Card</p>
                <input  type="text"
  placeholder="Name on Card"
  value={cardName}
  onChange={(e) => setCardName(e.target.value)}/>
                <p>Card Number</p>
                <input  type="text"
  placeholder="1234 5678 9012 3456"
  value={cardNumber}
  onChange={(e) => setCardNumber(e.target.value)}/>

                <p>Exprire Date</p>
                <input type="text"
  placeholder="MM / YY"
  value={expiryDate}
  onChange={(e) => setExpiryDate(e.target.value)}/>

                <p>CVV</p>
                <input  type="text"
  placeholder="CVV"
  value={cvv}
  onChange={(e) => setCvv(e.target.value)}/>
            </div><hr /></>:""}
            <div className="common-css">
                <input type="checkbox" onChange={(e)=>{setPaytm(e.target.checked)}}/>
                <div className="logo-and-common">
                  <SiPaytm style={{fontSize: "30px",color:"skyblue" }} />
                  <p>PayTM</p>
                </div>
            </div><hr />
            {paytm ? <><p className="paytm-paragraph">In order to complete your transaction, we will transfer you over to Adyen's secure servers.</p><hr /></> : ""} 
            <div className="common-css">
                <input type="checkbox" onChange={(e)=>{setNetbanking(e.target.checked)}}/>
                <div className="logo-and-common">
                  <BsBank2 style={{fontSize: "20px",background:"#0033cc", color:"white" }} />
                  <p>Net Banking</p>
                </div></div><hr />
                {netbanking ? <>
                  <p className="netbanking-paragraph">In order to complete your transaction, we will transfer you over to Adyen's secure servers.</p>
                  <div className="select-bank">
                    <select>
                    <option>Select your bank</option>
                    <option>Axix Bank</option>
                    <option>Bank of Baroda</option>
                    <option>Bank of India</option>
                    <option>Bank of Maharastra</option>
                    <option>Canera</option>
                    <option>City Bank</option>
                    <option>City Union Bank</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>IndusInd Bank</option>
                    <option>State Bank of India</option>
                    <option>UCO Bank</option>
                    <option>Union Bank of India</option>
                    <option>YES Bank</option>
                    </select>
                  </div>
                  <hr />
                </> : ""}
            <div className="common-css">
                <input type="checkbox" onChange={(e)=>{setMobileWallet(e.target.checked)}}/>
                <div className="logo-and-common">
                  <LiaWalletSolid style={{fontSize: "20px",background:"gray", color:"white" }} />
                  <p>Mobile Wallet</p>
                </div></div>
                {mobileWallet ? <><hr />
                  <p className="mobileWallet-paragraph">In order to complete your transaction, we will transfer you over to Adyen's secure servers.</p>
                  <div className="select-bank">
                    <select>
                    <option>Select your bank</option>
                    <option>Airtel Money</option>
                    <option>Amazon Pay</option>
                    <option>EbixCash</option>
                    <option>FreeChange Wallet</option>
                    <option>PayTm Wallet</option>
                    <option>PhonePe Wallet</option>
                    </select>
                  </div>
                </> : ""}
        </div>
        </div>
        </div>
      <div className="rightside">
        <div className="content-width">
          <h2>Summary</h2>
          <br />
          <div className="price-div"><p>Original Price:</p><p>₹{originalPrice}</p></div>
          <div className="price-div"><p>Discounts:</p><p>{discountPercentage}%</p></div>
          <hr /><br />
          <div className="price-div"><h4>Total:</h4><h4>₹{discountPrice}</h4></div>
          <p id="termCondition">
            By completing your purchase you agree to these Terms of Service.
          </p>
          <button className="checkout-btn" 
 onClick={handleFinalCheckout}>Complete Checkout</button>
          <p className="guarantee-tag">30-Day Money-Back Guarantee</p>

        </div>
      </div>
    </MainDiv>
  );
}

export { Checkout };

const MainDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  text-align: left;
  margin-top: 100px;
  
  h1{
    margin-bottom: 30px;
  }
  h2{
    margin-bottom: 20px;

  }
  .leftside {
    width: 60%;
    .parant{
      width: 70%;
      margin: auto;  
    }
    .country-store {
      display: flex;
      justify-content: space-between;
      .input-size {
        width: 48%;
      }
      .select-country {
        display: flex;
        justify-content: space-between;
        margin-bottom: .5rem;
        .left {
          font-weight: bold;
        }
        .right {
          font-weight: 100;
          color: #69646494;
        }
      }
      .country {
        width: 100%;
        padding: 1rem;
        font-size: 1rem;
      }
    }
    .paragraph {
      font-size: 14px;
      margin : .5rem 0rem 1rem 0rem;
      color: #808080e2;
    }
    .payment-method {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      p {
        display: flex;
        align-items: center;
      }
    }
    .method-border {
      border: 1px solid black;
      padding: .2rem;
      margin-bottom: 3rem;
      .creditcard-parent {
        display: flex;
        justify-content: space-between;
        input {
          width:.9rem ;
          height:.9rem;
          margin: .5rem .5rem .5rem .2rem;
        }
        div > b {
          margin-left: 10px;
        }
        .creditcard-logo{
          display: flex;
          align-items: center;
        }
        .logo-and-creditcard{
          display: flex;
          align-items: center;
          padding: .6rem .6rem .6rem 0rem;
          p{
            margin: 0rem .5rem;
            font-size: 1.1rem;
            font-weight: bolder;
          }
        }
        .card-images {
        display: flex;
        align-items: center;
        .pading {
          width: 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      }
      .credit-form{
          width: 70%;
            margin: auto;
            p{
              margin: .5rem .2rem;
            }
            input{
            width: 100%;
            margin-bottom: .7rem;
            display: block;
            padding: .6rem;
          }
        
      }
      .common-css{
        display: flex;
        align-items: center;
        input{
          margin: .5rem .5rem .5rem .2rem;
          width:.9rem ;
          height:.9rem;
        }
        .logo-and-common{
          display: flex;
          align-items: center;
          padding: .6rem .6rem .6rem 0rem;
          p{
            margin: 0rem .5rem;
            font-size: 1.1rem;
            font-weight: bolder;
          }
        }
      }
      .select-bank{
        width: 70%;
        margin : auto;
        select{
          width: 100%;
          padding: .5rem;
          margin-bottom: 1rem;
        }
      }
      .paytm-paragraph{
        margin: 1.5rem;
      }
      .netbanking-paragraph{
        margin: 1.5rem;
      }
      .mobileWallet-paragraph{
        margin: 1.5rem;
      }
    }
    .show-order-inline{
      display: flex;
      justify-content: space-between;
      .line-throw{
        text-decoration: line-through;
      }
      .div-left{
        display: flex;
        align-items: center;
        h4{
          margin-left: .5rem;
        }
      }
    }
  }
  .rightside {
    width: 40%;
    margin-top: 4.3rem;
    .content-width {
      width: 70%;
      .price-div{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      #termCondition{
        font-size: .8rem;
        color: gray;
        margin-top: 1.3rem;
      }
      .checkout-btn{
        width: 100%;
        padding: 1rem;
        font-size: 1rem;
        font-weight: bolder;
        margin: 10px 0px;
        background-color: #0056d2;
        color: #ffffff;
        border: none;
      }
      .guarantee-tag{
        width: 100%;
        font-size: 14px;
        color: gray;
        text-align: center;
      }
    }
  }
@media screen and (max-width: 950px) {
  display: flex;
  flex-direction: column;
  .leftside {
    width: 100%;
    .parant{
      width: 70%;
      margin : auto;
    }
  }
  .rightside {
    width: 70%;
    margin: auto;
    .content-width {
      width: 100%;
      h2{
        margin-top: 2rem;
      }
      #termCondition{
        display: none;
      }
      .guarantee-tag{
        display: none;
      }
    }
  }
}
@media screen and (max-width: 500px) {
  display: flex;
  flex-direction: column;
  .leftside{
    width: 90%;
    margin: auto;
    .parant {
    width: 90%;
    margin: auto;
    .extra {
      width: 48%;
    }
    .country{
      padding: .7rem;
    }
  }

  }
  .rightside {
    width: 90%;
    margin-top: 2rem;
    .content-width {
      width: 90%;
      margin: auto;
    }
  }
}

`;
