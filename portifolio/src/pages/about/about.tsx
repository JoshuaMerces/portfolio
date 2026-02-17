import "../../pages/about/style.css"
import Background from '../../assets/Desktop.png';
import {Link} from "react-router-dom";
import Home from "../../assets/home.png";
import AboutA from "../../assets/about.png";

function About() {
    return (
        <div className="containerAbout">
            <img src={Background} id={"background"} />

            <div className="contentAbout">

            </div>

            <img src={AboutA} id={"aboutA"} />

            <Link to={"/"} id="home">
                <button>
                    <img src={Home}/>
                </button>
            </Link>

        </div>
    )
}

export default About;