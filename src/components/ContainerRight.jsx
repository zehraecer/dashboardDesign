import { ContentFive } from "./ContentFive"
import { ContentFour } from "./ContentFour"
import { ContentOne } from "./ContentOne"
import { ContentSeven } from "./ContentSeven"
import { ContentSix } from "./ContentSix"
import { ContentThere } from "./ContentThere"
import { ContentTwo } from "./ContentTwo"

export const ContainerRight = () => {

    return (
        <div className="content w-100 " style={{ backgroundColor: "fafbfc" }}>
            <div className=" w-100 ">
                <ContentOne />
            </div>
            <div className=" w-100 ">
                <ContentTwo />
            </div>
            <div className=" w-100 ">
                <ContentThere />
            </div>
            <div className="w-100">
                <div>
                    <ContentFour />
                </div>


                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <ContentFive />

                        </div>
                        <div class="col">
                            <ContentSix />
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