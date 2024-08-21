import { ContentFour } from "./ContentFour"
import { ContentOne } from "./ContentOne"
import { ContentThere } from "./ContentThere"
import { ContentTwo } from "./ContentTwo"

export const ContainerRight = () => {

    return (
        <div className="content w-100 ">
            <ContentOne />
            <ContentTwo />
            <ContentThere />
            <ContentFour />
        </div>
    )
}