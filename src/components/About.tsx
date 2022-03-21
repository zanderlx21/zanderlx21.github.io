import './About.css';

function About() {
    
    return (
        <section className="About">
            <h1><span className="Section-Dashes">///</span>About<span id="about-section-asterisk">*</span></h1>
            <p className="Elevator-Pitch">Hi! I'm Alex, a detail driven web developer who loves to create fun digital expriences. My passion for design, and a background in marketing, has always pushed me to consider all of the minute details that go into crafting a positive user experience. Recently, I completed the Grand Circus Full Stack bootcamp, where I gained valuable knowledge in JavaScript, HTML, CSS, and React. This has given me a strong foundation to build upon, and I’m excited to take my problem solving, strong interpersonal and creative design skills to the next level as a team member, and web developer with your company!</p>
            <h3>Skills</h3>

        <div className="List-Container">

            <div className="List Languages">
            <h3>LANGUAGES</h3>
            <p><i className="material-icons" id="tornado"> play_for_work </i> JavaScript</p>
            <p><i className="material-icons" id="tornado"> play_for_work </i> TypeScript</p>
            <p><i className="material-icons" id="tornado"> play_for_work </i> HTML/XML</p>
            <p><i className="material-icons" id="tornado"> play_for_work </i> CSS/Sass</p>
            <p><i className="material-icons" id="tornado"> play_for_work </i> SQL</p>
            </div>
            <div className="List Frameworks">
            <h3>FRAMEWORKS</h3>
            <p><i className="material-icons" id="tornado"> play_for_work </i> React</p>
            <p><i className="material-icons" id="tornado"> play_for_work </i> Node.js</p>
            <p><i className="material-icons" id="tornado"> play_for_work </i> Express</p>
            <p><i className="material-icons" id="tornado"> play_for_work </i> Wordpress</p>
            <p><i className="material-icons" id="tornado"> play_for_work </i> Jest</p>
            </div>
            <div className="List Tools-About-Section">
            <h3>TOOLS</h3>
            <p><i className="material-icons" id="tornado"> play_for_work </i> GitBash </p>
            <p><i className="material-icons" id="tornado"> play_for_work </i> Git & Github</p>
            <p><i className="material-icons" id="tornado"> play_for_work </i> Chrome Dev Tools</p>
            <p><i className="material-icons" id="tornado"> play_for_work </i> Postman</p>
            <p><i className="material-icons" id="tornado"> play_for_work </i> MongoDB</p>
            </div>
            <div className="List Design">
            <h3>DESIGN</h3>
            <p><i className="material-icons" id="tornado"> play_for_work </i> Figma </p>
            <p><i className="material-icons" id="tornado"> play_for_work </i> Adobe Photoshop</p>
            <p><i className="material-icons" id="tornado"> play_for_work </i> Procreate</p>
            </div>

        </div>
        {/* <h3>Interests</h3>
        <div className="List-Container">
        <div className="List Design">
            <h3>Web</h3>
            <p><i className="material-icons" id="tornado"> play_for_work </i> UI/UX Design</p>
            <p><i className="material-icons" id="tornado"> play_for_work </i> Kinetic Typography</p>
            <p><i className="material-icons" id="tornado"> play_for_work </i> Generative Art</p>
            <p><i className="material-icons" id="tornado"> play_for_work </i> three.js</p>
            </div>
        </div> */}
            
            
            {/* <p>Adobe Creative Suite
Graphic Design
Copywriting
Digital Marketing
Video Production
Photography
Video Editing
Logo Design
Adobe Photoshop
Layout Design
HTML5
JavaScript
TypeScript
CSS
React
Node.js
GitHub
SQL
PostgreSQL
APIs
REST
MongoDB
Express.js
Document Object Model (DOM)
AJAX
Test-driven development
TDD
JSON
Firebase Cloud Hosting
Databases
Jest
Trello
Slack
Figma
XML
WordPress</p> */}
            </section>
    );
}

export default About;