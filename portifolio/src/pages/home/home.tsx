import {Link} from "react-router-dom";
import About from '../../assets/about.png';
import Work from '../../assets/WORK.png';
import Links from '../../assets/LINKS.png';
import Contact from '../../assets/CONTACT.png';
import './style.css'


function Home() {
    return (
        <div className='container'>

            <Link to={"/about"} id="about">
                <button>
                    <img src={About}/>
                </button>
            </Link>

            <button id='work'>
                <img src={Work}/>
            </button>

            <button id='links'>
                <img src={Links}/>
            </button>

            <Link to={"/contact"} id="contact">
                <button>
                    <img src={Contact}/>
                </button>
            </Link>
        </div>

    )
}

export default Home;