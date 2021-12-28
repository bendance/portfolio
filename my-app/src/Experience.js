const Experience = (props) =>
{
    return(
        <section class="resume-section" id="experience">
            <div class="resume-section-content">
                <h2 class="mb-5">Experience</h2>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Platform Specialist</h3>
                        <div class="subheading mb-3">Periodic</div>
                        <p>• Working at a SaaS startup that uses the Scrum methodology for launching new features. <br />
                        • Using GitLab to communicate with the development team about bugs on software. <br />
                        • Conducting QA on software after developers submitted fixes for a specific feature.</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">September 2021 - Present</span></div>
                </div>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Coder</h3>
                        <div class="subheading mb-3">IU Speech Disfluency Laboratory</div>
                        <p>• Learned CLAN in two months to transcribe stuttering children and exported the data to Microsoft Excel documents. <br />
                        • Debugged other research assistants’ CLAN errors.</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">September 2020 - May 2021</span></div>
                </div>
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Host</h3>
                        <div class="subheading mb-3">Applebee’s</div>
                        <p>• Worked in the restaurant industry while Covid-19 made in-person dining hazardous. <br />
                        • Dealt with difficult customer interactions in a friendly manner and ensured that servers were appropriately seated. <br />
                        • Worked other people’s shifts when asked.</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">June 2020 - August 2020</span></div>
                </div>
            </div>
        </section>
    )
}

export default Experience;