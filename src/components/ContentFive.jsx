import { Data1 } from "../data/data1"
import { Data3 } from "../data/data3.js"
import { Data2 } from "../data/data2"


export const ContentFive = ({ isClicked }) => {

    return (
        <>
            <div className="content-5 w-100">
                <div className="d-flex justify-content-between content-5-5">
                    <span className="content-7-span1">Lookscout Team</span>
                    <div className="three-dots">...</div>
                </div>
                <div>
                    {Data1.map((data, index) => (
                        <div key={index} className={`d-flex justify-content-between align-items-center content-5-1 ${data.border}`} >
                            <div className="d-flex align-items-center w-100 content-5-2">
                                <div>
                                    <img src={data.img} alt="" />
                                </div>

                                <div className="d-flex flex-column justify-content-center align-items-start">
                                    <span className="content-5-3" >{data.name}</span>
                                    <span className="content-5-4">{data.position}</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center gap-2 content-5-label-online" >
                                <span className={data.class}>{data.class}</span>
                                <img src={isClicked ? "rightIcon.svg" : "right.svg"} alt="" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div>
                <div className="content-5-btn w-100">
                    <button type="button">View all</button>
                </div>
            </div>
        </>

    )
}