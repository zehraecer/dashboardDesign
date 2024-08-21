import { Data1 } from "../../data/data1"

export const ContentFive = () => {

    return (
        <>
            <div className="content-5">
                <div className="d-flex justify-content-between content-5-5">
                    <span>Lookscout Team</span>
                    <img src="three-dots.svg" alt="" />
                </div>

                <div>
                    {Data1.map((data, index) => (
                        <div key={index} className="d-flex justify-content-between align-items-center content-5-1 border-bottom">
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
                                <img src="right.svg" alt="" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className="content-5-btn w-100">
                <button class=" " type="button">View all</button>
            </div>
        </>

    )
}