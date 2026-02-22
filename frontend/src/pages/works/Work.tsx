import { WorkCard } from "./worksCard.tsx";
import {useWorkData} from "../../hooks/useWorkData.ts";
import './style.css'
import {Link} from "react-router-dom";
import Home from "../../assets/home.png";
import Back from "../../assets/workBack.png";
import WorkHover from "../../assets/workHover.png";
import BotaoEsq from "../../assets/botao esquerda.png"
import BotaoDir from "../../assets/botao direita.png"

import {useState} from "react";

function Work() {
    const {data} = useWorkData();
    const [hovered, setHovered] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : data!.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < data!.length - 1 ? prev + 1 : 0));
    };

    return (
        <>
            <div className="workContainer">
                <img src={WorkHover} id={"workHover"} style={{opacity: hovered ? 1 : 0}}/>

                <button id={"botaoesq"} onClick={handlePrev}>
                    <img src={BotaoEsq}/>
                </button>

                <button id={"botaodir"} onClick={handleNext}>
                    <img src={BotaoDir}/>
                </button>

                <div className="background">
                    <img src={Back}/>
                </div>

                <div className="work"
                     onMouseEnter={() => setHovered(true)}
                     onMouseLeave={() => setHovered(false)}>
                    {data && data.length > 0 && (
                        <WorkCard
                            key={data[currentIndex].id}
                            image={data[currentIndex].image}
                            onClick={() => setSelectedImage(data[currentIndex].image)}
                        />
                    )}
                </div>

                {selectedImage && (
                    <div className="lightbox" onClick={() => setSelectedImage(null)}>
                        <img src={selectedImage} />
                    </div>
                )}

                <Link to={"/"} id="home">
                    <button>
                        <img src={Home}/>
                    </button>
                </Link>
            </div>

        </>
    )
}

export default Work;