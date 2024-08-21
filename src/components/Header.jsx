export const Header = () => {

    return (
        <>
            <div className="d-flex justify-content-between align-items-center header">
                <div className="list gap-4 ">
                    <div>
                        <img src="Lookscout.svg" alt="" />

                    </div>
                    <div className="d-none d-xxl-flex list ">
                        <li>Dashboard</li>
                        <li >Search</li>
                        <li >Profile</li>
                        <li>Settings</li>
                    </div>
                </div>
                <div className="d-block d-sm-none">
                    <nav className="navbar bg-body-tertiary fixed-top">
                        <div className="container-fluid">
                            <img src="Lookscout.svg" alt="" />
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasNavbar"
                                aria-controls="offcanvasNavbar"
                                aria-label="Toggle navigation">
                                <img src="hamburgerMenu.svg" alt="" />
                            </button>
                            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Link</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <form className="d-flex mt-3" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="d-none d-sm-flex gap-1 align-items-center ">
                    <div>
                        <img src="Avatar1.svg" />
                    </div>
                    <div className="d-flex flex-column  ">
                        <span className="text-primary-emphasis fw-semibold">Cristopher Calzoni</span>
                        <span className="text-body-tertiary">UI/UX</span>
                    </div>
                </div>

            </div>
        </>
    )
}