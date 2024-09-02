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
                        <div className="offcanvas offcanvas-end custom-offcanvas" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header mobile-mode">
                                <h5 className="offcanvas-title d-flex justify-content-between align-items-center w-100" id="offcanvasNavbarLabel"> <div className="d-flex justify-content-center align-items-center gap-2">
                                    <img src="Avatar1.svg" alt="" />
                                    <span className="middle-span-3">Brian Ford</span>
                                </div>
                                    <img style={{ width: "20px", height: "20px" }} data-bs-dismiss="offcanvas" src="right-long.svg" alt="" />
                                </h5>

                            </div>
                            <div className="offcanvas-body middle-mode ">
                                <div class="offcanvas-body">
                                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li class="nav-item dropdown ">
                                            <a class="nav-link  d-flex justify-content-between align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <div>
                                                    <img style={{ width: "21px", height: "20px", marginRight: "10px" }} src="horizontal.svg" /> Dashboard
                                                </div>
                                                <img src="downArrow.svg" alt="" />
                                            </a>
                                            <ul class="dropdown-menu no-border" style={{ marginLeft: "25px" }}>
                                                <li className="d-flex justify-content-center align-items-center mt-4"><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /><a class="dropdown-item" href="#">General</a></li>
                                                <li className="d-flex justify-content-center align-items-center mt-4"><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /><a class="dropdown-item" href="#">Messages</a></li>
                                                <li className="d-flex justify-content-center align-items-center mt-4"><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /><a class="dropdown-item" href="#">Events & Logs</a></li>
                                                <li className="d-flex justify-content-center align-items-center mt-4"><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /><a class="dropdown-item" href="#">Organization</a></li>
                                                <li className="d-flex justify-content-center align-items-center mt-4"><img style={{ width: "21px", height: "20px" }} src="horizontal.svg" /><a class="dropdown-item" href="#">Action</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown ">
                                            <a class="nav-link d-flex justify-content-between align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <div>
                                                    <img style={{ width: "21px", height: "20px", marginRight: "10px" }} src="calendar.svg" /> Date
                                                </div>
                                                <img src="downArrow.svg" alt="" />
                                            </a>
                                            <ul class="dropdown-menu no-border" style={{ marginLeft: "25px" }}>
                                                <li className="d-flex justify-content-center align-items-center mt-2"><a class="dropdown-item" href="#">Monthly View</a></li>
                                                <li className="d-flex justify-content-center align-items-center mt-2"><a class="dropdown-item" href="#">Weekly View </a></li>
                                                <li className="d-flex justify-content-center align-items-center mt-2"><a class="dropdown-item" href="#">Daily View</a></li>
                                                <li className="d-flex justify-content-center align-items-center mt-2"><a class="dropdown-item" href="#">Events</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown ">
                                            <a class="nav-link  d-flex justify-content-between align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <div>
                                                    <img style={{ width: "21px", height: "20px", marginRight: "10px" }} src="alt.svg" /> Section
                                                </div>
                                                <img src="downArrow.svg" alt="" />
                                            </a>
                                            <ul class="dropdown-menu no-border" style={{ marginLeft: "25px" }}>
                                                <li className="d-flex justify-content-center align-items-center mt-2"><a class="dropdown-item" href="#">Bar Charts</a></li>
                                                <li className="d-flex justify-content-center align-items-center mt-2"><a class="dropdown-item" href="#">Sales Data </a></li>
                                                <li className="d-flex justify-content-center align-items-center mt-2"><a class="dropdown-item" href="#">Performance Metrics</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown ">
                                            <a class="nav-link  d-flex justify-content-between align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <div>
                                                    <img style={{ width: "21px", height: "20px", marginRight: "10px" }} src="settings.svg" /> Settings
                                                </div>
                                                <img src="downArrow.svg" alt="" />
                                            </a>
                                            <ul class="dropdown-menu no-border" style={{ marginLeft: "25px" }}>
                                                <li className="d-flex justify-content-center align-items-center mt-2"><a class="dropdown-item" href="#">Account Settings</a></li>
                                                <li className="d-flex justify-content-center align-items-center mt-2"><a class="dropdown-item" href="#">Privacy Settings</a></li>
                                                <li className="d-flex justify-content-center align-items-center mt-2"><a class="dropdown-item" href="#">Notification Settings</a></li>
                                                <li className="d-flex justify-content-center align-items-center mt-2"><a class="dropdown-item" href="#">Language & Region</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#" data-bs-dismiss="offcanvas">  <img style={{ width: "21px", height: "20px", marginRight: "10px" }} src="icon2.svg" /> Out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}