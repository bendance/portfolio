import React from 'react';

const Home = (props) => 
{
    return(
        <section className="resume-section" id="home">
            <div className="resume-section-content">
                <h1 className="mb-0">
                    Benjamin
                    <span className="text-primary">Dance</span>
                </h1>
                <div className="subheading mb-5">
                    Indianapolis, IN · (317) 719-2648 · <a href="mailto:bendance@iu.edu"> bendance@iu.edu</a>
                </div>
                <p className="lead mb-5">Hello! 👋🏻 My name is Benjamin Dance.
                <br />
                I am a web developer and student at Indiana University Bloomington. </p>
                <div className="social-icons">
                    <a className="social-icon" href="https://www.linkedin.com/in/benjamin-dance/"><i className="fab fa-linkedin-in"></i></a>
                    <a className="social-icon" href="https://github.com/bendance"><i className="fab fa-github"></i></a>
                    <a className="social-icon" href="https://www.hackerrank.com/bendance"><i className="fab fa-hackerrank"></i></a>hello
                </div>
            </div>
        </section>
    )
}

export default Home;