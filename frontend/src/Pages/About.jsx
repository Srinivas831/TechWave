import React from "react";
import Styled from "styled-components";
import "../Css/utils.css";
import post1 from "../Assets/blog-post1.png";
import post2 from "../Assets/blog-post2.png";
import Navbar from "../Components/Navbar";

function About() {
  return (
    <DIV>
      <Navbar />
      <div className="blog-parent">
        <div className="heading">
          <h1>Know About Us</h1>
        </div>
        <div className="blog-child">
          <div className="blog-child-left">
            <img src={post1} />
          </div>
          <div className="blog-child-right">
            <div>
              <h1>
                Machine Learning <br /> Algorithms
              </h1>
            </div>
            <div>
              <p>
              Machine learning algorithms are computational models that enable computers to learn from data and make predictions or decisions without being explicitly programmed. These algorithms play a central role in the field of machine learning, a subfield of artificial intelligence. Here is an overview of some common machine learning algorithms.
              </p>
            </div>
            <div className="blog-child-right-review">
              <div className="blog-child-right-review-img">
                <img src="https://image.made-in-china.com/202f0j00QSREgyLUmbzT/Professional-Manufacturers-New-Model-Custom-Mens-Slim-Fit-Formal-Dress-Shirt.jpg" />
              </div>
              <div>
                <h3>John Doe</h3>
                <p>A Few Hours ago | 5 min read</p>
              </div>
            </div>
          </div>
        </div>

        {/* -- */}
        <div className="blog-child">
          <div className="blog-child-right">
            <div>
              <h1>
                Business Management <br />in Low Buget
              </h1>
            </div>
            <div>
              <p>
              Managing a business on a low budget requires strategic planning, resourcefulness, and a focus on efficiency. Here are some key aspects to consider for effective business management on a limited budget.Focus on essential tools, services, and resources that directly contribute to revenue generation.Leverage cost-effective technology solutions to streamline processes and improve efficiency.
              </p>
            </div>
            <div className="blog-child-right-review">
              <div className="blog-child-right-review-img">
                <img src="https://www.stitchfix.com/women/blog/wp-content/uploads/21-11-05_W_OF_V09_1649_2x3-scaled.jpeg" />
              </div>
              <div>
                <h3>Lauren Jenkins</h3>
                <p>A Few Hours ago | 5 min read</p>
              </div>
            </div>
          </div>
          <div className="blog-child-left">
            <img src={post2} />
          </div>
        </div>
        {/*  */}
        <div className="blog-child">
          <div className="blog-child-left">
            <img src="https://image.freepik.com/free-vector/communication-infographic-circle-concept-smart-ui-elements-internet-message-discussion-announcement_159242-6787.jpg" />
          </div>
          <div className="blog-child-right">
            <div>
              <h1>
                Effective Communication <br /> Skill
              </h1>
            </div>
            <div>
              <p>
              ffective communication refers to the clear, concise, and impactful exchange of information between individuals or groups, where the message is not only transmitted but also understood as intended. It involves the use of verbal and non-verbal cues to convey ideas, thoughts, or instructions in a manner that minimizes misunderstandings and maximizes the likelihood of the desired response or outcome.
              </p>
            </div>
            <div className="blog-child-right-review">
              <div className="blog-child-right-review-img">
                <img src="https://image.made-in-china.com/202f0j00QSREgyLUmbzT/Professional-Manufacturers-New-Model-Custom-Mens-Slim-Fit-Formal-Dress-Shirt.jpg" />
              </div>
              <div>
                <h3>Avinash Dangi</h3>
                <p>A Few Hours ago | 5 min read</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DIV>
  );
}

export default About;

const DIV = Styled.div`
    font-family : var(--primary-font-family);
    .blog-parent{
        width : 80%;
        margin : 3rem auto;
    }
    .heading{
        margin : 3rem auto;
        display : flex;
        justify-content : center;
        align-items : center;
    }
    .heading h1{
        color : var(--primary-color);
        position : relative;
    }
    .heading h1:before{
        content : "";
        position : absolute;
        bottom : -15px;
        height : 5px;
        width : 100%;  
        background: var(--primary-color);
        border-radius : 50px;
        transition : all 0.5s ease;
    }
    .blog-child{
        display : flex;
        margin : 2rem auto;
        justify-content : space-between;
    }
    .blog-child-left{
        border-radius : 10px;
        width : 250px;
        height : 250px;
        overflow : hidden;
        /* border : 2px solid red; */
    }
    .blog-child-left img{
        width : 100%;
        object-fit : center;
    }
    .blog-child-right{
        width : 60%;
    }
    .blog-child-right >div{
        margin : 0 0 1rem 0;
    }
    .blog-child-right >div >h1{
        font-weight : 500;
    }
    .blog-child-right >div >p{
        font-size : 14px;
    }
    .blog-child-right-review{
        display : flex;
    }
    .blog-child-right-review-img{
        width : 60px;
        height : 60px;
        border-radius : 50%;
        overflow : hidden;
        margin : 0 1rem 0 0;
    }
    .blog-child-right-review-img img{
        width : 100%;
    }
`;