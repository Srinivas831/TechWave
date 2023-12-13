import React from 'react'
import Styled from "styled-components";
import "../Css/utils.css";

function TestiCard({name , img , post}) {
  return (
    <CARD>
        <div className="card">
          <div className="card-img">
            <img src={img}/>
          </div>
          <div className="card-text">
            <div>
            </div>
            <div>
              <p>{post}</p>
            </div>
            <div className="card-text-last">
              <p>{name}</p>
            </div>
          </div>
        </div>
    </CARD>
  )
}

export default TestiCard

const CARD = Styled.div`
      /* card */
      .card{
      width: 90%;
      margin: 1.5rem auto;
      display: flex;
      /* gap:2rem; */
      justify-content: space-around;
      align-items: start; 
    }
    .card-img{
      margin : 1.5rem auto;
      width : 100px;
      height : 100px;
      border-radius : 50%;
      /* border : 1px solid red; */
      overflow : hidden;
      border: 3px solid var(--primary-color);
      box-shadow: var(--primary-color) 0px 2px 15px;
    }
    .card-img img{
      width : 100%;
      object-fit : cover;
    }
    .card-text{
      display : flex;
      flex-direction : column;
      gap: 1rem;
      width : 50%;
      margin: auto;
      padding : 0 1rem;
      text-align : left;
    }
    .card-text-last{
      text-align : left;
      justify-content : center;
      align-items : center;
      font-size : 1rem;
      font-weight : 600;
    }


    @media (max-width:780px) {
        .card{
            flex-direction : column;
            gap: 1rem;
        }
    }
`
