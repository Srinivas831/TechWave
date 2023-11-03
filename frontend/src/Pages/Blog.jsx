import React from 'react'
import styled from 'styled-components'

function Blog() {
  return (
    <MainDiv>
        <div className='headingNavbar'><h1>Our Blogs</h1></div>
        <div className='course-div'>
            <div className='image-div'>
              <img src="https://datainflow.com/wp-content/uploads/2018/02/learn-javascript-online.jpg" alt="javascriptImage" />
            </div>
            <div className='java-content'>
                <h1>JavaScript Learning Couse</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorem asperiores dolores nobis excepturi non perspiciatis illo sequi aliquam! Ea error exercitationem nesciunt magni aut nulla vitae nam assumenda maiores ad laboriosam amet quos facere quo dolorum, inventore temporibus reprehenderit. Laborum officia excepturi veniam a nisi aspernatur sed veritatis eum  deserunt totam quas. <a href="">Read more...</a></p>
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
                <h1>Angular Advance Learning Couse</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorem asperiores dolores nobis excepturi non perspiciatis illo sequi aliquam! Ea error exercitationem nesciunt magni aut nulla vitae nam assumenda maiores ad laboriosam amet quos facere quo dolorum, inventore temporibus reprehenderit. Laborum officia excepturi veniam a nisi aspernatur sed veritatis eum  deserunt totam quas. <a href="">Read more...</a></p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorem asperiores dolores nobis excepturi non perspiciatis illo sequi aliquam! Ea error exercitationem nesciunt magni aut nulla vitae nam assumenda maiores ad laboriosam amet quos facere quo dolorum, inventore temporibus reprehenderit. Laborum officia excepturi veniam a nisi aspernatur sed veritatis eum  deserunt totam quas. <a href="">Read more...</a></p>
                <div className='person-read'>
                    <img src="https://i.pinimg.com/originals/f8/93/c7/f893c7e1abe5b076eaee7c58223329e5.png" width={"50px"} alt="person-image" />
                    <div>
                        <b>Sakira Varma</b>
                        <pre>A Few hours ago  15 min read</pre>
                    </div>
                </div>
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
       background-image: url("https://th.bing.com/th/id/R.6dc4b052b38f401012ff014de36ba9c6?rik=IsVLDwgr4503og&riu=http%3a%2f%2fjammupigments.com%2fimage%2fcontact_us.jpg&ehk=8V5EDvsYVjsYi3fqnIK%2fy8SmpSY9lFoitS41sHYtDhw%3d&risl=&pid=ImgRaw&r=0");
    }
}
.course-div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 3.5rem;
    
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
            width: 60%;
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
    margin-top: 3.5rem;

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
            width: 60%;
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
            width: 60%;
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
            width: 60%;
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
            font-size: 30px;
            width: 60%;
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
            font-size: 30px;
            width: 60%;
        } 
    }
}
}
    
`