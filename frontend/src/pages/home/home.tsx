import {Link} from "react-router-dom";
import About from '../../assets/about.png';
import Work from '../../assets/WORK.png';
import Links from '../../assets/LINKS.png';
import Contact from '../../assets/CONTACT.png';
import './style.css'


function Home() {
    return (
        <div className="home">
            <div className='container'>
                <Link to={"/about"} id="about">
                    <button>
                        <img src={About}/>
                    </button>
                </Link>

                <Link to={"/work"} id="work">
                    <button>
                        <img src={Work}/>
                    </button>
                </Link>

                <Link to={"/links"} id="links">
                    <button>
                        <img src={Links}/>
                    </button>
                </Link>

                <Link to={"/contact"} id="contact">
                    <button>
                        <img src={Contact}/>
                    </button>
                </Link>
            </div>
        </div>

    )
}

export default Home;