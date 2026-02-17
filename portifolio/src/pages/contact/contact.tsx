import './style.css'
import ContactBack from '../../assets/contactBack.png'
import Home from '../../assets/home.png'
import Here from '../../assets/here.png'
import ContactB from '../../assets/CONTACT.png'
import {Link} from "react-router-dom";


function Contact() {
    return (
        <div className="containerContact">
            <img src={ContactBack} id={"contactBack"} />
            <img src={ContactB} id={"contactB"} />

            <button id='send'>
                <img src={Here} id={"here"}/>
            </button>

            <Link to={"/"} id="home">
                <button>
                    <img src={Home}/>
                </button>
            </Link>
        </div>
    )
}

export default Contact;