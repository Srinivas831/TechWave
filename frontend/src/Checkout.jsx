import React from "react";
import { styled } from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { SiPaytm } from "react-icons/si";
import { BiSolidLock, BiLogoMastercard } from "react-icons/bi";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { RiVisaLine } from "react-icons/ri";
import { GrPaypal } from "react-icons/gr";

function Checkout() {
  return (
    <MainDiv>
      <div className="leftside">
        <h1>Checkout page</h1>
        <h3>Billing address</h3>
        <div className="country-store">
          <div className="extra">
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
          <div className="extra">
            <div className="select-country">
              <p className="left">State/Union Territory</p>
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
          <p>
            Securre Connection{" "}
            <BiSolidLock
              style={{ paddingLeft: "10px", width: "20px", height: "20px" }}
            />
          </p>
        </div>
        <div className="method-border">
          <div className="card-button">
            <div className="card-button">
              <input type="radio" />
              <div className="logo-and-credit">
                <BsFillCreditCard2BackFill style={{ fontSize: "25px" }} />
                <b>Credit/Debit card</b>
              </div>
            </div>{" "}
            <div className="card-images">
              <div className="pading">
                <RiVisaLine style={{ fontSize: "35px", color: "blue" }} />{" "}
                <BiLogoMastercard
                  style={{ fontSize: "25px", color: "orange" }}
                />{" "}
                <GrPaypal style={{ fontSize: "25px" }} />
              </div>
            </div>
          </div>
          <hr />
          <div className="upi">
          <div className="card-button">
              <input type="radio" />
              <div className="logo-and-credit">
                <SiPaytm style={{  width:"40px", fontSize: "40px",color:"skyblue",backgroundColor:"#f2f2f2" }} />
                <b>PayTM</b>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="rightside">
        <div className="content-width">
          <h2>Summary</h2>
          <br />
          <pre>Original Price: `${"₹3,199"}` </pre>
          <pre>Discounts: `${"₹2,199"}` </pre>
          <p className="horizontal-line"></p>
          <h4 className="total-amount">
            <pre>Total: `${"₹449"}`</pre>
          </h4>
          <p>
            By completing your purchase you agree to these Terms of Service.
          </p>
          <button>Complete Checkout</button>
          <p>30-Day Money-Back Guarantee</p>
        </div>
      </div>
    </MainDiv>
  );
}

export { Checkout };

const MainDiv = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: left;
  .leftside {
    width: 40%;
    border: 1px solid black;
    .extra {
      width: 48%;
    }
    .country-store {
      display: flex;
      justify-content: space-between;
    }
    .select-country {
      display: flex;
      justify-content: space-between;
      .left {
        font-weight: bold;
      }
      .right {
        font-weight: 100;
      }
    }
    .country {
      border: 2px solid black;
      width: 100%;
      padding: 15px;
      font-size: 17px;
    }
    .paragraph {
      font-size: 14px;
    }
    .payment-method {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        display: flex;
        align-items: center;
      }
    }
    .method-border {
      border: 2px solid black;
      .card-button {
        display: flex;
        justify-content: space-between;
        input {
          margin-right: 10px;
        }
        div > b {
          margin-left: 10px;
        }
        .logo-and-credit {
          display: flex;
          justify-content: space-between;
          align-items: center;
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
  }
  .rightside {
    width: 40%;
    .content-width {
      width: 40%;
    }
  }
  .horizontal-line {
    border: 1px solid gray;
  }
  .total-amount {
    font-size: 18px;
    font-weight: bold;
  }
`;
