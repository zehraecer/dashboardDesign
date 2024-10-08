import { useState } from "react"

export const MiddleOne = () => {

    return (
        <div className="d-flex flex-column justify-content-center align-items-start w-100" style={{ marginTop: "32px" }}>
            <div className="d-flex  gap-0-75rem justify-content-start paddingb-0-75rem w-100 middle-hover" style={{ paddingInline: "28px" }}>
                <div><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /></div>
                <div><span className="general">General</span> </div>
            </div>
            <div className="d-flex justify-content-between  paddingb-0-75rem w-100 middle-hover " style={{ paddingInline: "28px" }} >
                <div className="d-flex  gap-0-75rem">
                    <div><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /></div>
                    <div >
                        <span className="general">Messages </span>
                    </div>
                </div>
                <div>
                    <span className="rounded-5" style={{ padding: "5px 11px", backgroundColor: "#EFEFF1" }}>6</span>
                </div>
            </div>
            <div className="d-flex  gap-0-75rem justify-content-start paddingb-0-75rem w-100 middle-hover" style={{ paddingInline: "28px" }}>
                <div><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /></div>
                <div><span className="general">Notifications</span> </div>
            </div>

            <div className="d-flex  gap-0-75rem justify-content-start paddingb-0-75rem middle-hover w-100  " style={{ paddingInline: "28px" }}>
                <div><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /></div>
                <div><span className="general">Users</span> </div>
            </div>

            <div className="d-flex  gap-0-75rem justify-content-start paddingb-0-75rem  w-100 middle-hover" style={{ paddingInline: "28px" }}>
                <div><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /></div>
                <div><span className="general">Events & Logs</span> </div>
            </div>

            <div className="d-flex  gap-0-75rem justify-content-start paddingb-0-75rem w-100 middle-hover " style={{ paddingInline: "28px" }}>
                <div><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /></div>
                <div><span className="general">Organization</span> </div>
            </div>

            <div className="d-flex  gap-0-75rem justify-content-start paddingb-0-75rem w-100 middle-hover" style={{ paddingInline: "28px" }}>
                <div><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /></div>
                <div><span className="general">Teams</span> </div>
            </div>
        </div>
    )
}