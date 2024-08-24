export const ContainerLeft = ({ onLogoClick, mood, isClicked }) => {
    return (

        <div className="d-none d-flex flex-column justify-content-between align-content-between container-left gap-1 d-lg-flex left-heigth middle-mode h-100">
            <div className="d-flex flex-column justify-content-center align-content-center">
                <div><img style={{ width: "40px", height: "40px", cursor: "pointer" }} src={isClicked ? "logo2.svg" : "logoIcon.svg"} onClick={onLogoClick} /></div>
                <div><img style={{ width: "40px", height: "40px", cursor: "pointer" }} role="button" onClick={onLogoClick} src="search.svg" alt="" /></div>
                <div><img role="button" onClick={onLogoClick} src="horizontal.svg" alt="" /></div>
                <div> <img role="button" onClick={onLogoClick} src="calendar.svg" alt="" /></div>
                <div><img role="button" onClick={onLogoClick} src="alt.svg" alt="" /></div>
                <div><img role="button" onClick={mood} src={isClicked ? "sun2.svg" : "moon.svg"} alt="" /></div>
            </div>
            <div className="flex-grow-1"></div>
            <div className="d-flex flex-column ">
                <div><img src="settings.svg" alt="" /></div>
                <div><img src="icon2.svg" alt="" /></div>
            </div>
        </div>
    );
}
