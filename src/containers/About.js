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
          </p>
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