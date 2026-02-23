import './style.css'
import LBack from '../../assets/linkBack1.png'
import Home from '../../assets/home.png'
import LinksBack from '../../assets/LINKS.png'
import {Link} from "react-router-dom";
import Img from "../../assets/img.png"
import Vetor from "../../assets/Vector 7.png"
import {useState} from 'react';
import Vetor2 from "../../assets/Vector.png"


function Links() {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="containerLinks">


            <img src={LBack} id={"LBack"}/>
            <img src={LinksBack} id={"LinksBack"}/>
            <img src={Img} id={"Img"}/>
            <img src={Vetor2} id={"Vetor2"}/>

            <div className="sociais" >
                <div className="git"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>


                    <a href="https://github.com/joshuamerces" target="_blank">

                    <p style={{
                        marginTop: '10px',
                        color: hovered ? '#fff' : '#000'
                    }}>/josh</p>

                    <p className="github-btn" style={{
                        backgroundColor: hovered ? '#CDCDCD': '#000',
                        borderRadius: '20px',
                        padding: '8px 80px',
                        fontWeight: 'bold',
                        display: 'inline-block',
                        color: hovered ? '#000' : '#FFF',
                    }}>Github</p>

                    <img src={Vetor} id={"Vetor"} style={{opacity: hovered ? 1 : 0}}/>
                    </a>
                </div>

                <div className="linkedin">
                    <p>/JoshuaMerces</p>
                    <p>Linkedin</p>
                </div>

                <div className="twitter">
                    <p>@hagettaka_</p>
                    <p>Twitter</p>
                </div>

                <div className="Instagram">
                    <p>@haggetaka</p>
                    <p>Instagram</p>
                </div>

                <div className="youtube">
                    <p>hagetaka</p>
                    <p>Youtube</p>
                </div>
            </div>

            <Link to={"/"} id="home">
                <button>
                    <img src={Home}/>
                </button>
            </Link>

        </div>
    )
}

export default Links;