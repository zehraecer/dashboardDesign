import { ContentFive } from "./ContentFive"
import { ContentFour } from "./ContentFour"
import { ContentOne } from "./ContentOne"
import { ContentSeven } from "./ContentSeven"
import { ContentSix } from "./ContentSix"
import { ContentThere } from "./ContentThere"
import { ContentTwo } from "./ContentTwo"

export const ContainerRight = () => {

    return (
        <div className="content ">
            <div className=" w-100 ">
                <ContentOne />
            </div>
            <div className=" w-100 ">
                <ContentTwo />
            </div>
            <div className=" w-100 ">
                <ContentThere />
            </div>
            {/* <div className=" w-100 ">
                <ContentFour />
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-1">
                    <div> <ContentFive /></div>
                    <div>  <ContentSix /></div>
                    <div><ContentSeven /></div>



                </div>
            </div> */}

            <div>
                <ContentFour />
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-1">
                    <div> <ContentFive /></div>
                    <div>  <ContentSix /></div>
                    <div><ContentSeven /></div>
                </div>
            </div>
        </div>
    )
}