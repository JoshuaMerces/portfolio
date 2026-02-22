interface WorksCardProps {
    title?: string,
    image: string,
    onClick: () => void;
}

export function WorkCard({ title, image, onClick }: WorksCardProps){
    return (
        <div className="workCard" onClick={onClick}>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
        </div>
    )
}