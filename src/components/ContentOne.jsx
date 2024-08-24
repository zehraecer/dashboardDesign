export const ContentOne = ({ isClicked }) => {

    return (
        <div className="d-flex flex-column align-items-start mt-5  w-100">
            <div className="content-1 d-flex justify-content-center align-items-center d-block d-md-none">
                <div style={{ padding: "5px 7px" }}>
                    <img src={isClicked ? "leftWhite.svg" : "left.svg"} />
                </div>
                <div>
                    <span className="content-1-back">Back</span>
                </div>
            </div>
            <div className="content-1 d-flex justify-content-center align-items-center gap-4 d-none d-md-flex">
                <span className="content-responsive-div">Home</span>
                <img src="rightGrey.svg" alt="" />
                <span className="content-responsive-div">Settings</span>
                <img src="rightGrey.svg" alt="" />
                <span className="content-responsive-div">General</span>
                <img src="rightGrey.svg" alt="" />
            </div>

            <div className="d-flex flex-column  flex-sm-row justify-content-between w-100"  >
                <div className="d-flex flex-column">
                    <span className="content-span-1 mt-1">Hey there, Brian Ford!</span>
                    <span className="content-span-2">Welcome back, we're happy to have you <br className="d-flex d-sm-none" /> here!</span>
                </div>
                <div className="d-flex mt-1 justify-content-between ">
                    <div className=" d-flex  w-100 gap-1 ">
                        <div>
                            <button type="button" className="btn btn-outline-secondary asdas ">Edit section</button>
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary asdasa  ">Add item</button>
                        </div>
                    </div>
                    <div className="d-block d-sm-none content-1-dots" >
                        <div className="three-dots">...</div>
                    </div>
                </div>
            </div>
        </div>
    )
}