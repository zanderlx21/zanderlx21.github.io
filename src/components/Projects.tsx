import Embark from '../images/Embark.png';
import SafariMatchGame from '../images/SafariMatchGame.png';
import GifWizard from '../images/GifWizard.png';
import MyThoughts from '../images/MyThoughts.png';
import AnimatedForm from '../images/AnimatedForm.png';

// import './Projects.css'
import './Projects1.css';

function Projects() {

    return (
        <section className="Projects" id="Projects">
            <h1><span className="Section-Dashes">///</span>Projects<span id="section-asterisk">*</span></h1>

<div className="Cards-Container">

    <div className="card 1">
        <div className="card-content">
            <img src={Embark} alt="thumbnail of embark landing page"/>
            <h2 className="card-title">Embark</h2>
            <p className="card-text">
            A travel app for planning your next big trip! This was my final 
            project before graduating at Grand Circus of Detroit. My partner 
            and I used the Yelp API to fetch data for local businesses and let the 
            user store their favorite spots in a personal itinerary list.</p>
            <div className="tools">
                <p><i className="material-icons" id="tornado"> play_for_work </i> React</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> TypeScript</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> Web API</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> MongoDB</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> Node.js</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> AXIOS</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> Firebase</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> HTML</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> CSS</p>
            </div>
            <div className="links">
            <a href="https://travelapp-f2d81.web.app/" className="button" target="_blank">View Project <i className="material-icons" id="Project-Link-Icon"> smart_display </i></a>
            <a href="https://github.com/zanderlx21/Embark--Travel-App" className="button" target="_blank">View GitHub<i className="material-icons" id="GitHub-Link-Icon"> whatshot </i></a>
            </div>
            
        </div>
    </div>

    <div className="card two">
        <div className="card-content">
            <img src={SafariMatchGame} alt="thumbnail of embark landing page"/>
            <h2 className="card-title" id="Memory-Match-Title">Animal Memory Match</h2>
            <p className="card-text">The classic memory match game, with an animal safari 
            twist. This was my first group project utilizing JavaScript, DOM-manipulation, and CSS animations!</p>
            <div className="tools">
                <p><i className="material-icons" id="tornado"> play_for_work </i> HTML</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> CSS</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> JavaScript</p>
            </div>
            <div className="links">
            <a href="https://travelapp-f2d81.web.app/" className="button" target="_blank">View Project <i className="material-icons" id="Project-Link-Icon"> smart_display </i></a>
            <a href="https://github.com/zanderlx21/Embark--Travel-App" className="button" target="_blank">View GitHub<i className="material-icons" id="GitHub-Link-Icon"> whatshot </i></a>
            </div>
        </div>
    </div>
    
    <div className="card 3">
        <div className="card-content">
            <img src={GifWizard} alt="thumbnail of embark landing page"/>
            <h2 className="card-title">Gif Wizard</h2>
            <p className="card-text">A gif search app that helps you liven up your conversation.
            This was the first time I learned how to fetch data from a public API.</p>
            <div className="tools">
                <p><i className="material-icons" id="tornado"> play_for_work </i> React</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> TypeScript</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> Web API</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> Node.js</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> HTML</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> CSS</p>
            </div>
            <div className="links">
            <a href="https://travelapp-f2d81.web.app/" className="button" target="_blank">View Project <i className="material-icons" id="Project-Link-Icon"> smart_display </i></a>
            <a href="https://github.com/zanderlx21/Embark--Travel-App" className="button" target="_blank">View GitHub<i className="material-icons" id="GitHub-Link-Icon"> whatshot </i></a>
            </div>
        </div>
    </div>

    <div className="card 4">
        <div className="card-content">
            <div className="Crop-My-Thoughts"><img className="My-Thoughts-img"src={MyThoughts} alt="thumbnail of embark landing page"/></div>
            
            <h2 className="card-title">My Thoughts</h2>
            <p className="card-text">A React app that lets you save
            messages to yourself on the go!</p>
            <div className="tools">
                <p><i className="material-icons" id="tornado"> play_for_work </i> React</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> TypeScript</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> Node.js</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> HTML</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> CSS</p>
            </div>
            <div className="links">
            <a href="https://travelapp-f2d81.web.app/" className="button" target="_blank">View Project <i className="material-icons" id="Project-Link-Icon"> smart_display </i></a>
            <a href="https://github.com/zanderlx21/Embark--Travel-App" className="button" target="_blank">View GitHub<i className="material-icons" id="GitHub-Link-Icon"> whatshot </i></a>
            </div>
        </div>
    </div>
    
    <div className="card 5">
        <div className="card-content">
            <div className="Crop-Animated-Form"><img src={AnimatedForm} alt="thumbnail of embark landing page"/></div>
            <h2 className="card-title">Animated Form</h2>
            <p className="card-text">A modern form that plays an animation when submitted.</p>
            <div className="tools">
                <p><i className="material-icons" id="tornado"> play_for_work </i> HTML</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> CSS</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> JavaScript</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> GSAP library</p>
                <p><i className="material-icons" id="tornado"> play_for_work </i> Lotti Animations</p>
            </div>
            <div className="links">
            <a href="https://travelapp-f2d81.web.app/" className="button" target="_blank">View Project <i className="material-icons" id="Project-Link-Icon"> smart_display </i></a>
            <a href="https://github.com/zanderlx21/Embark--Travel-App" className="button" target="_blank">View GitHub<i className="material-icons" id="GitHub-Link-Icon"> whatshot </i></a>
            </div>
        </div>
    </div>

</div>
    

        </section>
    )
}

export default Projects;