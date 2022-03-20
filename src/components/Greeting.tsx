import './Greeting.css';
// import Button from '@material-ui/core/Button';
// import LabelImportantIcon from '@mui/icons-material/LabelImportant';


function Greeting() {
    
    return (
        <section className="Greeting">
            <i className="material-icons" id="hive"> hive </i>
            <div className="Content">
            <div className='Logo-Container'>
                <i className="material-icons" id="Logo-Icon"> tornado </i>
                {/* <p></p> */}
                {/* <a href="www.google.com"><i className="material-icons" id="Email-Icon"> forward_to_inbox </i></a> */}
                </div>
            
            <h6>AVAILABLE FOR WORK</h6>
            <h1>Hi! I'm <span className="dashes">///</span>Alex<span id="asterisk">*</span></h1>
            <h5>A <span> Front-end Developer </span> who is passionate about design and creating memorable web experiences.</h5>
            <a href="#Projects" id="View-Projects-Button">
            View my projects
            <i className="material-icons" id="cta-Arrow"> label_important </i>
            </a>
        </div>

        </section>
    );
}

export default Greeting;