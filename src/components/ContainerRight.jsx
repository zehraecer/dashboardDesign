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
                    <div class="row  justify-content-center align-items-center">
                        <div class="col">
                            <ContentFive isClicked={isClicked} />

                        </div>
                        <div class="col">
                            <ContentSix isClicked={isClicked} />
                        </div>
                        <div class="col">
                            <ContentSeven />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}