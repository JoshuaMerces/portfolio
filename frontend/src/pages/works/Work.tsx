import { WorkCard } from "./worksCard.tsx";
import {useWorkData} from "../../hooks/useWorkData.ts";

function Work() {
    const {data} = useWorkData();
    return (
        <div className="work">
            {data?.map(WorkData =>
                <WorkCard
                    title={WorkData.title}
                    image={WorkData.image}
                />
            )}
        </div>
    )
}

export default Work;