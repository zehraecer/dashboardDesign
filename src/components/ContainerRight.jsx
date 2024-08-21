import { ContentFive } from "./ContentFive"
import { ContentFour } from "./ContentFour"
import { ContentOne } from "./ContentOne"
import { ContentSeven } from "./ContentSeven"
import { ContentSix } from "./ContentSix"
import { ContentThere } from "./ContentThere"
import { ContentTwo } from "./ContentTwo"

export const ContainerRight = () => {

    return (
        <div className="content w-100 ">
            <ContentOne />
            <ContentTwo />
            <ContentThere />
            <ContentFour />
            <ContentFive />
            <ContentSix />
            <ContentSeven />
        </div>
    )
}