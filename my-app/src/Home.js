import React from 'react';
import benPicture from './pictures/ben3.jpg';
import linkedin from './pictures/linkedin.png';

const Home = (props) => 
{
    return(
        <header>
            <div className='topnav'>
                <a className='active' href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#works">Works</a>
                <a href="#connect">Connect</a>
            </div>
            <h1>Hello, my name is Ben!</h1>
            <img src={benPicture} height={300}></img>
            <img src={linkedin} height={100} />
        </header>
    )
}

export default Home;