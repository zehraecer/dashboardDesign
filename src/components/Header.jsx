export const Header = ({ mood, isClicked }) => {
    return (
        <>
            <div className="d-block d-lg-none">
                <nav className="navbar bg-body-tertiary fixed-top mobile-mode">
                    <div className="container-fluid">
                        <img src={isClicked ? "lookscout-white.svg" : "Lookscout.svg"} />
                        <div className="d-flex justify-content-center align-items-center gap-3 ">
                            <div>
                                <div className="d-flex justify-content-center align-items-center gap-3">
                                    <img onClick={mood} src={isClicked ? "sun2.svg" : "moon.svg"} alt="" />
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasNavbar"
                                        aria-controls="offcanvasNavbar"
                                        aria-label="Toggle navigation">
                                        <img src={isClicked ? "hamburger-White.svg" : "hamburgerMenu.svg"} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header mobile-mode">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel"> <img src={isClicked ? "lookscout-white.svg" : "Lookscout.svg"} /></h5>
                                <button type="button" className="btn-close zeze" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body middle-mode ">
                                <div className="d-flex flex-column align-items-start " >
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
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}