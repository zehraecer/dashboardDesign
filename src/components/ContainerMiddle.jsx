import { useEffect } from "react"
import { renderChart6 } from "../charts/chart6"

export const ContainerMiddle = () => {

    useEffect(() => {

        renderChart6("cart6")
    }, [])

    return (
        <div className="d-none d-lg-flex flex-column justify-content-between align-content-between left-heigth middle-mode h-100 " style={{ paddingInline: "28px", }}>

            <div >
                <div className="d-flex flex-column align-items-start" >
                    <div className="d-flex justify-content-center  gap-0-75rem paddingb-0-75rem">
                        <img src="arrowleft.svg" alt="" />
                        <span className="container-middle-one" >Lookscout Dashboard</span>
                    </div>
                    <div className="d-flex form-one gap-.7 border border-2 rounded-2">
                        <div><img style={{ width: "16.5px", height: "16.5px" }} src="search.svg" alt="" /></div>
                        <div><input className="form-one-1" style={{ width: "206px", height: "20px" }} type="text" placeholder="Search here..." /></div>
                    </div>

                    <div className="d-flex  gap-0-75rem justify-content-center paddingb-0-75rem " style={{ marginTop: "32px" }}>
                        <div><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /></div>
                        <div><span className="general">General</span> </div>
                    </div>
                    <div className="d-flex justify-content-between  paddingb-0-75rem w-100 " >
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
                    <div className="d-flex  gap-0-75rem justify-content-center paddingb-0-75rem ">
                        <div><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /></div>
                        <div><span className="general">Notifications</span> </div>
                    </div>

                    <div className="d-flex  gap-0-75rem justify-content-center paddingb-0-75rem ">
                        <div><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /></div>
                        <div><span className="general">Users</span> </div>
                    </div>

                    <div className="d-flex  gap-0-75rem justify-content-center paddingb-0-75rem ">
                        <div><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /></div>
                        <div><span className="general">Events & Logs</span> </div>
                    </div>

                    <div className="d-flex  gap-0-75rem justify-content-center paddingb-0-75rem ">
                        <div><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /></div>
                        <div><span className="general">Organization</span> </div>
                    </div>

                    <div className="d-flex  gap-0-75rem justify-content-center paddingb-0-75rem ">
                        <div><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /></div>
                        <div><span className="general">Teams</span> </div>
                    </div>

                </div>
            </div>


            <div className="d-flex flex-column pt-3 ">
                <div className="d-flex justify-content-between align-items-center w-100">

                    <div className="d-flex justify-content-center align-items-center gap-2">
                        <img src="Avatar1.svg" alt="" />
                        <span className="middle-span-3">Brian Ford</span>
                    </div>

                    <div className="three-dots">...</div>
                </div>

                <div className="d-flex flex-column middle-div1">
                    <div className="d-flex justify-content-end">
                        <span className="middle-span1">X</span>
                    </div>

                    <div className="d-flex justify-content-left">
                        <div style={{ width: "145px", height: "65px" }} id="cart6"></div>
                    </div>
                    <span className="middle-span2">Subscription Plan</span>
                    <span className="middle-span3">Your Subscription plan will expire soon please upgrade!</span>
                    <span className="middle-span4">Upgrade</span>
                </div>
            </div>
        </div>

    )
}