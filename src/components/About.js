import React from 'react';

import '../css/About.css';

class AboutMe extends React.Component {
  render() {
    return (
      <div className="about_me">
        <div>
          <img src="https://res.cloudinary.com/raphaelnoriode/image/upload/v1575647716/portfolio%20pic/20190906_115925_fp9nm3.jpg" alt="main pic"/>
        </div>
        <div>
          <p>
            Hi, once again my name is Raphael Noriode and I really love to add value at scale,
            I am a lover of technology communities and I belong to a few, like you can see from the 
            attached picture, I was giving a talk at a developers circle event. Okay enought of community talks<br/>
            I have a Diploma in computer science and on the verge of getting a Bachelors in a few years (to be update ) 
            I make things and break them with tools like Ruby on rails, Javascript, React and some more not so fancy technologies 
            that mere mortals would run away from :smile:
            I intern at <a>Crowdfrica</a> where I tend to fix the lives of less-priviledge kids in Africa through codes
            but I also work part-time as a Technical support engineer at <a>Microverse</a> a fun coding school which I attended for a while.  
          </p>
          <p>
            As a community lover, I am Microsoft student partner and the Lead Ingressive ambassador at the University
            of Uyo, Nigeria.
          </p>
          <p>
            I am an avid-reader and good sports man, and lover of music, I do find to play games once in a while.
          </p>
          <p>Please stick around for more ..............:smiles:</p>
        </div>
      </div>
    )
  }
}

export default AboutMe;