export default function Projects(props)
{
    return(
        <section class="resume-section" id="projects">
            <div class="resume-section-content">
                <h2 class="mb-5">Projects</h2>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0"><a href="https://github.com/bendance/spotify-api-react">Spotify Playlist Generator</a></h3>
                        <br />
                        <p>• Created a React application with a NodeJS backend that scrapes for the top 100 songs of any given genre and compiles them into a Spotify playlist. <br />
                        • Interacts with the Spotify API to authenticate user and refresh authorization token.</p>
                    </div>
                </div>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0"><a href="https://github.com/bendance/tenthousand">Ten Thousand Hours</a></h3>
                        <br />
                        <p>• Created a desktop app that tracks a user’s progress towards a goal. <br />
                        • The app completely uses Java for its functionality and uses a .txt file to store the amount of time a user has spent towards a goal.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}