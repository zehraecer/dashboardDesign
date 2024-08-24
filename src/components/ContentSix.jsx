import { Data2 } from "../data/data2"

export const ContentSix = ({ isClicked }) => {

    return (
        <>

            <div className="content-6 mt-2 w-100">
                <div className="d-flex justify-content-between content-5-5">
                    <span className="content-7-span1">Updated Materials</span>
                    <div className="three-dots">...</div>
                </div>
                <div>
                    {Data2.map((data, index) => (
                        <div key={index} className={`d-flex justify-content-between align-items-center content-5-1 ${data.class} `}>
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
                                <img src={isClicked ? "Icon3.svg" : data.img} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className=" w-100 content-6-btns d-flex justify-content-between">
                <button type="button" className="btn btn-outline-secondary content-6-btn1">Cancel</button>
                <button type="button" className="btn btn-primary content-6-btn2">Upload</button>
            </div>
        </>

    )
}