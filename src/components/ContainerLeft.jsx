export const ContainerLeft = () => {

    return (
        <div className="d-none d-flex flex-column align-content-between container-left gap-1  d-lg-flex">
            <div>
                <div><img style={{ width: "26px", height: "30px" }} src="logoIcon.svg" alt="" /></div>
                <div><img src="search.svg" alt="" /></div>
                <div><img src="horizontal.svg" alt="" /></div>
                <div> <img src="calendar.svg" alt="" /></div>
                <div><img src="alt.svg" alt="" /></div>
            </div>
            <div className="d-flex flex-column  container-left">
                <div><img src="settings.svg" alt="" /></div>
                <div><img src="icon2.svg" alt="" /></div>
            </div>
        </div>
    )
}