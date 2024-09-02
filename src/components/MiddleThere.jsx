export const MiddleThere = () => {

    return (
        <div className="d-flex flex-column justify-content-center align-items-start">
            <div className="d-flex  gap-0-75rem justify-content-center paddingb-0-75rem " style={{ marginTop: "32px" }}>
                <div><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /></div>
                <div><span className="general">Bar Charts</span> </div>
            </div>
            <div className="d-flex justify-content-between  paddingb-0-75rem w-100 " >
                <div className="d-flex  gap-0-75rem">
                    <div><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /></div>
                    <div >
                        <span className="general">Sales Data </span>
                    </div>
                </div>
            </div>
            <div className="d-flex  gap-0-75rem justify-content-center paddingb-0-75rem ">
                <div><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /></div>
                <div><span className="general">Performance Metrics</span> </div>
            </div>
        </div>
    )
}