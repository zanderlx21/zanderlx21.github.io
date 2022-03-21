import './Greeting.css';
import { Link, animateScroll as scroll } from "react-scroll";
// import Button from '@material-ui/core/Button';
// import LabelImportantIcon from '@mui/icons-material/LabelImportant';


function Greeting() {
    // const n = new Date();
    // let month: any = n.getMonth() + 1;
    // let day = n.getDate();

    // if (month === 1) {month = 'January'};
    // if (month === 2) {month = 'February'};
    // if (month === 3) {month = 'March'};
    // if (month === 4) {month = 'April'};
    // if (month === 5) {month = 'May'};
    // if (month === 6) {month = 'June'};
    // if (month === 7) {month = 'July'};
    // if (month === 8) {month = 'August'};
    // if (month === 9) {month = 'September'};
    // if (month === 10) {month = 'October'};
    // if (month === 11) {month = 'November'};
    // if (month === 12) {month = 'December'};

    return (
        <div className="Greeting-Container">
            <div className="Greeting">
            <i className="material-icons" id="hive"> hive </i>
            <div className="Content">
            <div className='Logo-Container'>
                <i className="material-icons" id="Logo-Icon"> tornado </i>
                {/* <i className="material-icons" id="Logo-Icon-Z"> insights </i> */}
                {/* <p></p> */}
                {/* <a href="www.google.com"><i className="material-icons" id="Email-Icon"> forward_to_inbox </i></a> */}
                </div>
            <div className="available-for-work">
                {/* <div className="Date">
                <i className="material-icons" id="arrow-top"> east </i>
                    <p className="Day">{day}</p>
                    <p className="Month">{month}</p></div> */}
                <div className="available"><h6>AVAILABLE FOR WORK</h6></div>
                </div>
                
            
            <h1>Hi! I'm<span className="dashes">///</span>Alex<span id="asterisk">*</span></h1>
            <h5>A <span> Front-end Developer </span> who is passionate about design and creating memorable web experiences.</h5>
            <Link to="Projects" 
            duration={500} 
            smooth={true}
            ><a href="#Projects" id="View-Projects-Button">
            View my projects
            <i className="material-icons" id="cta-Arrow"> label_important </i>
            </a></Link>
            </div>
        </div>

        </div>
    );
}

export default Greeting;