import { ContentFive } from "./ContentFive"
import { ContentFour } from "./ContentFour"
import { ContentOne } from "./ContentOne"
import { ContentSeven } from "./ContentSeven"
import { ContentSix } from "./ContentSix"
import { ContentThere } from "./ContentThere"
import { ContentTwo } from "./ContentTwo"

export const ContainerRight = ({ isClicked }) => {

    return (
        <div className="content w-100 content-right-mode" >
            <div className=" w-100 ">
                <ContentOne isClicked={isClicked} />
            </div>
            <div className=" w-100 ">
                <ContentTwo />
            </div>
            <div className=" w-100 ">
                <ContentThere />
            </div>
            <div className=" w-100" >
                <ContentFour />
                <div class="container text-center">
                    <div class="row  justify-content-center align-items-center gap-2">
                        <div class="col" style={{ paddingRight: "0", paddingLeft: "0" }}>
                            <ContentFive isClicked={isClicked} />
                        </div>
                        <div class="col" style={{ paddingRight: "0", paddingLeft: "0" }}>
                            <ContentSix isClicked={isClicked} />
                        </div>
                        <div class="col" style={{ paddingRight: "0", paddingLeft: "0" }}>
                            <ContentSeven />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}