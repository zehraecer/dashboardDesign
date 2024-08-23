import { useEffect } from "react"
import { Data3 } from "../data/data3.js"


export const ContentSeven = () => {


    return (
        <>
            <div className="content-7 mt-2 w-100">
                <div className="d-flex justify-content-between content-5-5">
                    <span>Updated Materials</span>
                    <img src="three-dots.svg" alt="" />
                </div>

                <div>
                    {Data3.map((data, index) => (
                        <div key={index} className={`d-flex justify-content-between align-items-center content-5-1 ${data.border}`} >
                            <div className="d-flex align-items-center w-100 content-5-2">
                                <div>
                                    <img src={data.logo} alt="" />
                                </div>

                                <div className="d-flex flex-column justify-content-center align-items-start">
                                    <span className="content-5-3" >{data.name}</span>
                                    <span className="content-5-4">{data.dimension}</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center gap-2" >
                                <span className={`content-7-done-failed ${data.class}`} >{data.class}</span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className='content-6-btns content-3-3'>
                <span>Open <img src="sendIcon.svg" /></span>
            </div>

        </>
    )
}