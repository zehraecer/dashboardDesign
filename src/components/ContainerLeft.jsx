export const ContainerLeft = ({ mood, isClicked, MiddleOneClick, MiddleTwoClick, MiddleThereClick, MiddleSearchClick, MiddleFourClick }) => {
    return (

        <div className="d-none d-flex flex-column justify-content-between align-content-between container-left gap-1 d-lg-flex left-heigth middle-mode h-100">
            <div className="d-flex flex-column justify-content-center align-content-center">
                <div><img style={{ width: "30px", height: "30px", cursor: "pointer" }} src={isClicked ? "logoWhite.svg" : "logoIcon.svg"} onClick={MiddleSearchClick} /></div>
                <div><img role="button" onClick={MiddleSearchClick} src="search.svg" alt="" /></div>
                <div><img role="button" onClick={MiddleOneClick} src="horizontal.svg" alt="" /></div>
                <div> <img role="button" onClick={MiddleTwoClick} src="calendar.svg" alt="" /></div>
                <div><img role="button" onClick={MiddleThereClick} src="alt.svg" alt="" /></div>
            </div>
            <div className="flex-grow-1"></div>
            <div className="d-flex flex-column ">
                <div><img role="button" onClick={mood} src={isClicked ? "sun2.svg" : "moon.svg"} alt="" /></div>
                <div><img onClick={MiddleFourClick} src="settings.svg" alt="" /></div>
                <div><img src="icon2.svg" alt="" /></div>
            </div>
        </div>
    );
}
