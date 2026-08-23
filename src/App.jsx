import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Logo1 from './assets/logo1.png'
import Logo2 from './assets/logo2.png'
import mimg from './assets/mimg.png'
import i1 from './assets/i1.png'
import i2 from './assets/i2.png'
import i3 from './assets/i3.png'
import priya from './assets/priya.png'
import jasmeh from './assets/main.jpg'

function App() {
var [demo,setdemo]=useState(false)

  return (
    <>
    <section id='navbar'>
      <img id='logo' src={Logo1}></img>
      <button id='demo' onClick={()=>{setdemo(true)}}>Book a Demo</button>
    </section>
    {!demo?<><section id='main'>
      <h1 id='bold'>
        Learn Today,<br></br> Lead Tomorrow
      </h1>
      <p id='subhead'>Personalized tutoring from grade 1 to 12 to halp every student unlock their potential</p>
      <div id='subs'>
        <div id='n'>
          <img src={i1}></img>
          <h4 id='side'>Expert Tutor</h4>
        </div>
         <div id='n'>
          <img src={i2}></img>
          <h4 id='side'>Customized learning</h4>
        </div>
         <div id='n'>
          <img src={i3}></img>
          <h4 id='side'>Guaranteed results</h4>
        </div>
      </div>
      <button onClick={()=>{setdemo(true)}} id='book'>Book a Demo Class➜</button>
    </section>
    <section id='services'>
      <h1 id='stitle'>Our Services</h1>
      <h1 id='tagl'>Personalized learning for every student</h1>
      <p id='sdis'>We offer a Wide range of services designed to help students build confidence, improve grades and acheive their academic goals</p>
     <div id='slist'>
      <div id='service'>
<div id='contain'>
          <i class="fa-solid fa-book" style={{color: 'rgb(20, 46, 98)'}}></i>
  </div>     
      <h2 id='st'>Subject Tutoring</h2>
<p>Math, Science, Social Science , English, French, Computer Science and more for grades 1 to 12 </p>
   </div>
   <div id='service'>
<div id='contain'>
          <i class="fa-solid fa-graduation-cap" style={{color: 'rgb(20, 46, 98)'}}></i>
  </div>     
      <h2 id='st'>Exam Preperation</h2>
<p>Specialized tutoring for tests, finals, midterms &board exams </p>
   </div>
   <div id='service'>
<div id='contain'>
          <i class="fa-solid fa-people-group" style={{color: 'rgb(20, 46, 98)'}}></i>
  </div>     
      <h2 id='st'>One to One Classes</h2>
<p>Personal attention to adress unique learning needs and goals</p>
   </div>
     </div>
          <div id='slist'>
      <div id='service'>
<div id='contain'>
          <i class="fa-solid fa-laptop" style={{color: 'rgb(20, 46, 98)'}}></i>
  </div>     
      <h2 id='st'>Online tutoring</h2>
<p>Flexible online sessions from the confort of your home </p>
   </div>
   <div id='service'>
<div id='contain'>
          <i class="fa-solid fa-people-group" style={{color: 'rgb(20, 46, 98)'}}></i>
  </div>     
      <h2 id='st'>Homework Help</h2>
<p>Get the help you need to complete assignments with confidence </p>
   </div>
   <div id='service'>
<div id='contain'>
          <i class="fa-solid fa-chart-simple" style={{color: 'rgb(20, 46, 98)'}}></i>
  </div>     
      <h2 id='st'>Academic Coaching</h2>
<p>Study skills, time management & strategies for long term success</p>
   </div>
     </div>
    </section>
    <section id='testimonials'>
       <h1 id='stitle'>Testimonials</h1>
      <h1 id='tagl2'>What other Students & Parents Say</h1>
      <hr></hr>
      <div id='tlist'>
        <div id='test'>
          <h1>''</h1>
          <p>Mr. Abhishek has been teaching me math since Grade 9, and he is an excellent teacher. He explains concepts clearly, is patient, supportive, and always makes difficult topics easier to understand.</p>
          <div id='lower'>
            <img src={jasmeh}></img>
            <h1>Jasmeh S.</h1>
          </div>
        </div>
        <div id='test'>
          <h1>''</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div id='lower'>
            <img src={priya}></img>
            <h1>Priya K.</h1>
          </div>
        </div>
        <div id='test'>
          <h1>''</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div id='lower'>
            <img src={priya}></img>
            <h1>Priya K.</h1>
          </div>
        </div>
      </div>
    </section></>:
    <>
    <button id='back' onClick={()=>{setdemo(!demo)}}><i class="fa-solid fa-arrow-left fa-rotate-by" style={{color: 'rgb(20, 46, 98)'}}></i>Back</button>
    <section id='contact'>
      
      <div id='left'>
        <h1 id='ctop'>Contact Us</h1>
        <h1 id='tags'>We're here to help!</h1>
        <hr></hr>
        <p>Have questions or want to book a free class?<br></br>
          Get in touch with us today!
        </p>
  <div id='conl'>
          <div id='cons'>
          <i className="fa-solid fa-phone" style={{color: 'rgb(20, 46, 98)'}}></i>
          <p>+91 8141167939</p>
        </div>
         <div id='cons'>
          <i className="fa-solid fa-envelope" style={{color: 'rgb(20, 46, 98)'}}></i>
          <p>abhishekrajveer0011@gmail.com</p>
        </div>
         <div id='cons'>
          <i className="fa-solid fa-location-dot" style={{color: 'rgb(20, 46, 98)'}}></i>
          <p>110 Begampur Village, Malviya Nagar, New Delhi 110017</p>
        </div>
         <div id='cons'>
          <i className="fa-solid fa-clock" style={{color: 'rgb(20, 46, 98)'}}></i>
          <p> 5:30 AM to 10:30 PM </p>
        </div>
  </div>

      </div>
       <div id='right'>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf14iDzYi0vb7sI0okUVaeDvniT6jVjASjij9aONzs7vVuK1w/viewform?embedded=true" width="640" height="428" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>  </div>
    </section>
    </>
    }
<section id='mas'>
    <section id='footer'>
      <div id='links'>
<i class="fa-brands fa-instagram"></i>
<i class="fa-brands fa-whatsapp"></i>
        <i class="fa-brands fa-youtube"></i>
      </div>
      <p> @ 2026 Bright Future Tuition Center. All rights reserved</p>
    </section>
    <h1 id='love'>Made with <i class="fa-solid fa-heart" style={{color: 'rgb(255, 1, 1)'}}></i> by <a href='https://jasmehsidhu.onrender.com/'> Jasmeh </a></h1>
</section>
    </>
  )
}

export default App
