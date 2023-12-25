
import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'

function Blog() {
  return (
    <MainDiv>
        <Navbar />
        <div className='headingNavbar'><h1>Our Blogs</h1></div>
        <div className='course-div'>
            <div className='image-div'>
              <img src="https://datainflow.com/wp-content/uploads/2018/02/learn-javascript-online.jpg" alt="javascriptImage" />
            </div>
            <div className='java-content'>
                <h1>JavaScript Learning Course</h1>
                <p>JavaScript is a versatile and widely-used programming language that enables dynamic and interactive content on websites. It is primarily used for client-side scripting, allowing developers to create responsive and engaging web applications. JavaScript is supported by all major web browsers and is essential for enhancing user experience through features like form validation, animations, and real-time updates without the need to reload the entire webpage.  <a href="https://en.wikipedia.org/wiki/JavaScript">Read more...</a></p>
                <div className='person-read'>
                    <img src="https://th.bing.com/th/id/OIP.dNtFudvD2hAJMOhOBNysXwHaHa?pid=ImgDet&w=526&h=526&rs=1" width={"50px"} alt="person-image" />
                    <div>
                        <b>Harsh Advani</b>
                        <pre>A Few hours ago  5 min read</pre>
                    </div>
                </div>
            </div>
        </div>
        <div className='course-div2'>
            <div className='java-content'>
                <h1>Angular JS Advance Learning Course</h1>
                <p>Angular JS is a popular open-source web application framework developed and maintained by Google. It is written in TypeScript and allows developers to build dynamic, single-page web applications (SPAs). Angular provides a structured framework for creating robust and scalable front-end applications, facilitating the development process and maintenance. <a href="https://en.wikipedia.org/wiki/AngularJS">Read more...</a></p>
                <div className='person-read'>
                    <img src="https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_640.jpg" width={"50px"} alt="person-image" />
                    <div>
                        <b>Shrawan Mishra</b>
                        <pre>A Few hours ago  10 min read</pre>
                    </div>
                </div>
            </div>
            <div className='image-div'>
              <img src="https://cdn.educba.com/academy/wp-content/uploads/2020/01/angular-js-service.jpg" alt="javascriptImage" />
            </div>
        </div>
        <div className='course-div'>
            <div className='image-div'>
              <img src="https://insights.radix.ai/hubfs/1597179_BlogHeaderIllustration_2_032023.jpg#keepProtocol" alt="javascriptImage" />
            </div>
            <div className='java-content'>
                <h1>How to Learn React</h1>
                <p>
                   React is an open-source JavaScript library developed and maintained by Facebook. It is primarily used for building user interfaces for single-page applications where components are created and managed efficiently. React follows a declarative approach, allowing developers to describe how the user interface should look based on the application's state, and it automatically updates and renders the components when the state changes. <a href="https://en.wikipedia.org/wiki/React_(software)">Read more...</a>
                </p>
                <div className='person-read'>
                    <img src="https://i.pinimg.com/originals/f8/93/c7/f893c7e1abe5b076eaee7c58223329e5.png" width={"50px"} alt="person-image" />
                    <div>
                        <b>Sakira Varma</b>
                        <pre>A Few hours ago  15 min read</pre>
                    </div>
                </div>
            </div>
        </div>
        <div className='course-div2'>
            <div className='java-content'>
                <h1>HTML5 Learning Course</h1>
                <p>
                   HTML5, or HyperText Markup Language 5, is the latest version of the standard markup language used to create and structure content on the World Wide Web. Developed and maintained by the World Wide Web Consortium (W3C) and the Web Hypertext Application Technology Working Group (WHATWG), HTML5 introduces new features and improvements over its predecessors (like HTML 4 and XHTML). <a href="https://en.wikipedia.org/wiki/HTML5">Read more...</a>
                </p>
                <div className='person-read'>
                    <img src="https://i1.rgstatic.net/ii/profile.image/577690925502464-1514743657420_Q512/Hemali-Batra-Sharma.jpg" width={"50px"} alt="person-image" />
                    <div>
                        <b>Dipali Mukharji</b>
                        <pre>A Few hours ago  10 min read</pre>
                    </div>
                </div>
            </div>
            <div className='image-div'>
              <img src="https://64.media.tumblr.com/e705f0275d8b9dcc0b1cdfb812e5d3fe/a580d9a9aba95f2d-c6/s2048x3072_c8467,13600,52600,88000/6ae2059f4017e5f6078a63ef06766bd4850d66e4.png" alt="javascriptImage" />
            </div>
        </div>

    </MainDiv>
  )
}

export { Blog }

const MainDiv = styled.div`
box-sizing: border-box;
margin: 0%;
padding: 0%;
.headingNavbar{
    width: 100%;
    h1{
        font-size: 3rem;
       display: flex;
       justify-content: center;
       align-items: center;
       color: #fff;
       height: 50vh;
       background-image: url("https://designtekgraphics.com/wp-content/uploads/2016/01/designtek-responsive-web-design.jpg");
    }
}
.course-div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: 3.5rem auto;
    .image-div{
        width: 40%;
        img{
           width: 100%;
           border-radius: .8rem;
         }
    }
    .java-content{
        width: 50%;
        h1{
            margin-bottom: 2rem;
            font-size: 40px;
            width: 90%;
        }
        a{
            text-decoration: none;
            color: #196be6;
        }
        .person-read{
            margin-top: 1.2rem;
            width: 37%;
            display: flex;
            align-items: center;
            
            img{
                border-radius: 50%;
                margin-right: .8rem;
            }
        }
    }
}
.course-div2{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: 3.5rem auto;

    .image-div{
        width: 40%;
        img{
           width: 100%;
           border-radius: .8rem;
         }
    }
    .java-content{
        width: 50%;
        h1{
            margin-bottom: 2rem;
            font-size: 40px;
            width: 90%;
        }
        a{
            text-decoration: none;
            color: #196be6;
        }
        .person-read{
            margin-top: 1.2rem;
            width: 37%;
            display: flex;
            align-items: center;
            
            img{
                border-radius: 50%;
                margin-right: .8rem;
            }
        }
    }
}
@media screen and (max-width: 950px) {
    .course-div{
    display: flex;
    flex-direction: column;
    .image-div{
        width: 50%;
    }
    .java-content{
        width: 80%;
        h1{
            margin: 1.5rem 0rem;
            font-size: 30px;
            width: 100%;
        } 
    }
    }
    .course-div2{
    display: flex;
    flex-direction: column-reverse;
    .image-div{
        width: 50%;
    }
    .java-content{
        width: 80%;
        h1{
            margin: 1.5rem 0rem;
            font-size: 30px;
            width: 100%;
        } 
    }
    }
}
@media screen and (max-width: 500px) {
    .course-div{
    display: flex;
    flex-direction: column;
    .image-div{
        width: 80%;
    }
    .java-content{
        width: 80%;
        h1{
            margin: 1.5rem 0rem;
            font-size: 25px;
            width: 100%;
            /* border: 1px solid red; */
        } 
    }
}
.course-div2{
    display: flex;
    flex-direction: column-reverse;
    .image-div{
        width: 80%;
    }
    .java-content{
        width: 80%;
        h1{
            margin: 1.5rem 0rem;
            font-size: 25px;
            width: 100%;
            /* border: 1px solid red; */

        } 
    }
}
}
    
`
