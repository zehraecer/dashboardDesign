export const ContentOne = () => {

    return (

        <div className="d-flex flex-column align-items-start   w-100">
            <div className="content-1 d-flex justify-content-center align-items-center  ">
                <div style={{ padding: "5px 7px" }}>
                    <img src="left.svg" />
                </div>
                <div>

                    <span>Back</span>
                </div>
            </div>
            <div className="d-flex flex-column  flex-sm-row justify-content-between w-100"  >
                <div className="d-flex flex-column">
                    <span className="content-span-1 mt-1">Hey there, Brian Ford!</span>
                    <span className="content-span-2">Welcome back, we're happy to have you <br className="d-flex d-sm-none" /> here!</span>
                </div>
                <div className="d-flex mt-1 justify-content-between ">
                    <div className=" d-flex  w-100 gap-1 ">
                        <div>

                            <button type="button" class="btn btn-outline-secondary asdas ">Edit section</button>
                        </div>
                        <div>

                            <button type="button" class="btn btn-primary asdasa  ">Add item</button>
                        </div>
                    </div>
                    <div className="d-block d-sm-none" style={{ padding: "7px 11px", border: "1px solid #DAE0E6", borderRadius: "5px", color: "#5F6D7E" }} >

                        <img src="three-dots.svg" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}