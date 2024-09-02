export const MiddleTwo = () => {

    return (
        <div className="d-flex flex-column justify-content-center align-items-start w-100" style={{ marginTop: "32px" }}>
            <div className="d-flex  gap-0-75rem justify-content-start paddingb-0-75rem  middle-hover w-100" style={{ paddingInline: "28px" }}>
                <div><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /></div>
                <div><span className="general">Monthly View</span> </div>
            </div>
            <div className="d-flex justify-content-between  paddingb-0-75rem w-100  middle-hover" style={{ paddingInline: "28px" }}>
                <div className="d-flex  gap-0-75rem">
                    <div><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /></div>
                    <div >
                        <span className="general">Weekly View </span>
                    </div>
                </div>
            </div>
            <div className="d-flex  gap-0-75rem justify-content-start paddingb-0-75rem  middle-hover w-100" style={{ paddingInline: "28px" }}>
                <div><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /></div>
                <div><span className="general">Daily View</span> </div>
            </div>

            <div className="d-flex  gap-0-75rem justify-content-start paddingb-0-75rem  middle-hover w-100" style={{ paddingInline: "28px" }}>
                <div><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /></div>
                <div><span className="general">Events</span> </div>
            </div>
        </div>
    )
}