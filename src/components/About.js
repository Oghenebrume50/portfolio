import React from 'react';

import '../css/About.css';

class AboutMe extends React.Component {
  render() {

    return (
      
      <div className="about_me">
        <div>
          <img id="my_pic" src="https://res.cloudinary.com/raphaelnoriode/image/upload/v1575647716/portfolio%20pic/20190906_115925_fp9nm3.jpg" alt="main pic"/>
        </div>
        <div>
          <p>
            Hi, once again my name is Raphael Noriode and I really love to add value at scale,
            I am a lover of technology and communities and I belong to a few of them, like you can see from the 
            attached picture, I was giving a talk at a developers circle event in my local community. Okay enough of community talks<br/>
            I have a Diploma in computer science and on the verge of getting a Bachelors in a few years (to be updated) 
            I make things and break them with tools like Ruby on rails, Javascript, React and some not so fancy technologies 
            that mere mortals would run away from :smile:
            I intern at <a href="https://www.crowdfrica.org/">Crowdfrica</a> where I tend to fix the lives of less-priviledge kids in Africa through codes
            but I also work part-time as a Technical support engineer at <a href="https://www.microverse.org/">Microverse</a> a fun coding school which I attended for a while.
          </p>
          <p>
            As a community lover, I am a Microsoft student partner and the Lead Ingressive ambassador at the University
            of Uyo, Nigeria.
          </p>
          <p>
            When I am not coding, I am reading, apprendre le français, playing video games or singing
          </p>
          <p>Please stick around for more ..............:smiles:</p>
        </div>
        <div id="photo-holder" style={{width: '100%'}}>
          <img src="https://res.cloudinary.com/raphaelnoriode/image/upload/v1575658942/portfolio%20pic/IMG-20191012-WA0027_kueo1v.jpg" alt="mypic1"/>
          <img src="https://res.cloudinary.com/raphaelnoriode/image/upload/v1575658942/portfolio%20pic/IMG_20190914_123002_i6dueg.jpg" alt="mypic2"/>
          <img src="https://res.cloudinary.com/raphaelnoriode/image/upload/v1575658942/portfolio%20pic/20190803_125342_izva9n.jpg" alt="mypic3"/>
        </div>
      </div>
    )
  }
}

export default AboutMe;