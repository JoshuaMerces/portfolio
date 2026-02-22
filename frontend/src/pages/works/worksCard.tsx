interface WorksCardProps {
    title: string,
    image: string

}

export function WorkCard({ title, image }: WorksCardProps){
    return (
        <div className="workCard">
            <img src={image}/>
            <h2>{title}</h2>
        </div>
    )
}