
export const ContainerLeft = ({ onLogoClick, mood, isClicked }) => {


    return (

        <div className="d-none d-flex flex-column justify-content-between align-content-between container-left gap-1 d-lg-flex left-heigth middle-mode h-100">
            <div >
                <div><img style={{ width: "26px", height: "30px", cursor: "pointer" }} src="logoIcon.svg" onClick={onLogoClick} /></div>
                <div><img role="button" onClick={onLogoClick} src="search.svg" alt="" /></div>
                <div><img role="button" onClick={onLogoClick} src="horizontal.svg" alt="" /></div>
                <div> <img role="button" onClick={onLogoClick} src="calendar.svg" alt="" /></div>
                <div><img role="button" onClick={onLogoClick} src="alt.svg" alt="" /></div>
                <div><img role="button" onClick={mood} src={isClicked ? "moon.svg" : "sun.svg"} alt="" /></div>
            </div>
            <div className="flex-grow-1"></div>
            <div className="d-flex flex-column ">
                <div><img src="settings.svg" alt="" /></div>
                <div><img src="icon2.svg" alt="" /></div>
            </div>
        </div>

    );
}
