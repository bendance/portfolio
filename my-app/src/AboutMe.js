import benPicture from './pictures/ben3.jpg';

const AboutMe = (props) =>
{
    return(
        <div id='about'>
            <h2>About Me</h2>
            <p>My name is Benjamin Dance and I am an aspiring full-stack developer from Avon, Indiana.
            I'll be graduating from Indiana University Bloomington in Spring of 2022 with a double major in Computer Science
            and Interactive and Digital Media. Throughout my time in university, I've been an active member of the Code@IU club and
            have even won their 2021 Hackathon. This is not as impressive as it sounds because I was the only person who participated. In my freetime, I enjoy helping my friends out with various projects as well as working on my own projects.
            The project that I'm most proud of is a Spotify Playlist generator which scrapes the top 100 most popular songs in a genre and
            compiles them into a playlist using the Spotify API. In the future, I would like to learn more about integrating payment processors
            with my projects. Overall, I'm excited to learn more about the world of software development and I am open to learning new tools
            to craft more efficient software!</p>
            <img src={benPicture} height={300}></img>
        </div>
    )
}

export default AboutMe;