import React from 'react'
import Styled from "styled-components";
import "../Css/utils.css";
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TestiCard({name , img , post}) {
  return (
    <CARD>
        <div className="card">
          <div className="card-img">
            <img src={img}/>
          </div>
          <div className="card-text">
            <div>
            <FontAwesomeIcon icon={faQuoteLeft} style={{fontSize: "2rem" , color: "#22242a"}}/>
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
      align-items: center; 
    }
    .card-img{
      width : 200px;
      height : 200px;
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
    }
    .card-text-last{
      text-align : center;
      justify-content : center;
      align-items : center;
      font-size : 2rem;
    }


    @media (max-width:780px) {
        .card{
            flex-direction : column;
            gap: 1rem;
        }
    }
`
