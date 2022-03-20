import './Contact.css'
import Github from '../images/Github-icon.png'
import LinkedIn from '../images/LinkedIn-icon.png'

function Contact() {

    
    return (
        <div className="Contact">
            <h1>Let's Chat!</h1>
            <div className="Contact-Links">
            <a href="http://github.com/zanderlx21" target="_blank"><img src={Github} className="Github-Icon" /></a>
            <a href="mailto:zaksa86@gmail.com" target="_blank"><i className="material-icons" id="Contact-Email-Icon"> mail_outline </i></a>
            <a href="https://www.linkedin.com/in/alexanderzaks" target="_blank"><img src={LinkedIn} className="LinkedIn-Icon" /></a>
            </div>
            <p>Copywrite <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />2022 <span className='Dashes-Yellow'>///</span>Alexander Zaks.</p>
        </div>
    );
}

export default Contact;