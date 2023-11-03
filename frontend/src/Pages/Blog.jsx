import React from "react";
import Styled from "styled-components";
import "../Css/utils.css";
import post1 from "../Assets/blog-post1.png";
import post2 from "../Assets/blog-post2.png";

function Blog() {
  return (
    <DIV>
      <div className="blog-parent">
        <div className="heading">
          <h1>Popular Blogs</h1>
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate vero explicabo ullam ea cumque natus voluptates
                temporibus reprehenderit cum mollitia, dolor omnis neque fugit
                id doloribus sequi pariatur minima dolores sapiente vel odio?
                Quam reiciendis doloremque ipsum sed ducimus, dolor tenetur,
                quis fugiat quae cupiditate recusandae animi quisquam, officiis
                architecto?
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate vero explicabo ullam ea cumque natus voluptates
                temporibus reprehenderit cum mollitia, dolor omnis neque fugit
                id doloribus sequi pariatur minima dolores sapiente vel odio?
                Quam reiciendis doloremque ipsum sed ducimus, dolor tenetur,
                quis fugiat quae cupiditate recusandae animi quisquam, officiis
                architecto?
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
      </div>
    </DIV>
  );
}

export default Blog;

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
