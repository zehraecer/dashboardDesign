export const ContainerRight = () => {

    return (
        <div className="content  w-100 ">
            <div className="d-flex flex-column align-items-start   w-100">
                <div className="content-1 d-flex justify-content-center align-items-center  ">
                    <div style={{ padding: "5px 7px" }}>
                        <img style={{ width: "4px", height: "9px" }} src="left.svg" />
                    </div>
                    <span>Back</span>
                </div>
                <div className="d-flex flex-column  flex-sm-row justify-content-between w-100"  >
                    <div className="d-flex flex-column">
                        <span className="content-span-1 mt-1">Hey there, Brian Ford!</span>
                        <span className="content-span-2">Welcome back, we're happy to have you <br className="d-flex d-sm-none" /> here!</span>
                    </div>
                    <div className="d-flex gap-5 mt-1 ">
                        <div className="content-btns d-flex gap-0-75rem">
                            <button type="button" style={{ padding: "8px 21px" }} className="btn btn-outline-secondary content-btns-1">Edit section</button>
                            <button type="button" style={{ padding: "8px 29.4px" }} className="btn btn-primary content-btns-2">Add item</button>
                        </div>
                        <div className="d-flex d-sm-none" style={{ padding: "11.2px 11.7px", border: " 1px solid #DAE0E6", borderRadius: "5px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" fill="#5F6D7E" class="bi bi-three-dots" viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}