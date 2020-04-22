import React from 'react';
import ReactContactForm from 'react-mail-form';
import { Link } from 'react-router-dom';

import '../css/About.css';

class AboutMe extends React.Component {
  render() {

    return (
      <div className='about_me'>
        <p className='nav'>(<Link to='/'>Home</Link> | <Link to='/projects'>Projects</Link>)</p>
        <div className='about_nav_img'>
          <img id='my_pic' src='https://res.cloudinary.com/raphaelnoriode/image/upload/v1575647716/portfolio%20pic/20190906_115925_fp9nm3.jpg' alt='main pic'/>
        </div>
        <div className='write_up'>
          <h2>About Me</h2>
          <p>
            Hi! there, I am a Backend web developer with 3yrs experience building flexible APIs with 
            Javascript(Nodejs) and Ruby, I also write Front-end apps with React and Vanilla JS,
            so you would maybe want to call me a Full-stack developer but Software developer is fine.
            I write sometimes on <a href='https://dev.to/oghenebrume50'>Dev.to</a> and I also love building technology communities, so I happen to be a 
            Microsoft Student Partner and a Lead Ingressive community ambassador. Oh and I had written 
            some cool <a href='https://medium.com/@raphaelnoriode'>articles</a> on medium.
          </p>
          <p>
            I like to think I have other skills, I can select great music and probably sing 
            you to sleep too, and you might not be lucky trying to beat me at FIFA.
          </p>
        </div>
        <div className='mail-form'>
          <p> You can contact me here</p>
          <ReactContactForm to='raphlbrume@gmail.com'/>
        </div>
        <div>
          <img src='https://res.cloudinary.com/raphaelnoriode/image/upload/v1575658942/portfolio%20pic/IMG-20191012-WA0027_kueo1v.jpg' alt='mypic1'/>
        </div>
      </div>
    )
  }
}

export default AboutMe;