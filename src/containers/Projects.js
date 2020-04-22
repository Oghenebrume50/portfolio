import React from 'react';
import { Link } from 'react-router-dom';

import Project from '../components/Project';

import '../css/Projects.css';

class Work extends React.Component {
  render() {
    return (
      <div className='all-projects'>
        <span>
          (<Link to='/'>Home</Link> | <Link to='/about'>About</Link>)
        </span>
        <div className='page-items'>
            <Project 
              img_src='https://res.cloudinary.com/raphaelnoriode/image/upload/v1575559074/portfolio%20pic/photo-1485322551133-3a4c27a9d925_ivcixw.jpg' 
              proj_title='BookStore'
              proj_desc='A project to store books owned and read by an individual'
              link='https://oghenebrume50.github.io/react-bookstore/'
              githubLink='https://github.com/Oghenebrume50/react-bookstore'
            />

            <Project 
              img_src='https://res.cloudinary.com/raphaelnoriode/image/upload/v1575559074/portfolio%20pic/photo-1522199670076-2852f80289c3_dciyxp.jpg'
              proj_title='Todo list'
              proj_desc='A todo list app for task management'
              link='https://oghenebrume50.github.io/Todo-list/dist/index.html'
              githubLink='https://github.com/Oghenebrume50/Todo-list'
            />

            <Project 
              img_src='https://res.cloudinary.com/raphaelnoriode/image/upload/v1575559074/portfolio%20pic/11_vpkfgg.png'
              proj_title='Battleship'
              proj_desc='A battleship game with player and CPU'
              link='https://oghenebrume50.github.io/battle-ship/dist/index.html'
              githubLink='https://github.com/Oghenebrume50/battle-ship'
            />

            <Project 
              img_src='https://res.cloudinary.com/raphaelnoriode/image/upload/v1575559074/portfolio%20pic/photo-1432888622747-4eb9a8efeb07_xikkfx.png'
              proj_title='A facebook clone'
              proj_desc='cloning the basic functionality of a social app'
              link='https://mysterious-waters-41144.herokuapp.com/'
              githubLink='https://github.com/Oghenebrume50/facebook-clone'
            />

            <Project
              img_src='https://res.cloudinary.com/raphaelnoriode/image/upload/v1575559073/portfolio%20pic/photo-1501139083538-0139583c060f_ipbpon.jpg'
              proj_title='Chronos'
              proj_desc='A discord timer bot, to remind users of previous messages'
              link='https://discordapp.com/oauth2/authorize?&client_id=527533056735707159&scope=bot'
              githubLink='https://github.com/Oghenebrume50/chronos-node-bot'
            />

            <Project
              img_src='https://res.cloudinary.com/raphaelnoriode/image/upload/v1575634481/portfolio%20pic/Screenshot_from_2019-12-06_13-13-28_bghwte.png'
              proj_title='A Frontend design'
              proj_desc='Implemented a design as part of a challenge on frontend masters'
              link='https://oghenebrume50.github.io/ZTM-challenges/ZTM-challenge-11/index.html'
              githubLink='https://github.com/Oghenebrume50/ZTM-challenges-11'
            />
        </div>
      </div>
    )
  }
}

export default Work;
