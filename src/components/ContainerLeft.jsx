import { useState, useEffect } from "react"

export const ContainerLeft = ({ onLogoClick }) => {

    const [isClicked, setisClicked] = useState(false)

    const mood = () => {
        setisClicked(!isClicked)
        console.log(isClicked);
    }

    useEffect(() => {
        if (isClicked) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }, [isClicked]);
    return (
        <div className="d-none d-flex flex-column justify-content-between align-content-between container-left gap-1 d-lg-flex left-heigth">
            <div>
                <div>
                    <img
                        style={{ width: "26px", height: "30px", cursor: "pointer" }}
                        src="logoIcon.svg"
                        alt=""
                        onClick={onLogoClick}
                    />
                </div>
                <div><img onClick={onLogoClick} src="search.svg" alt="" /></div>
                <div><img onClick={onLogoClick} src="horizontal.svg" alt="" /></div>
                <div> <img onClick={onLogoClick} src="calendar.svg" alt="" /></div>
                <div><img onClick={onLogoClick} src="alt.svg" alt="" /></div>
                <div><img onClick={mood} src={isClicked ? "moon.svg" : "sun.svg"} alt="" /></div>
            </div>
            <div className="flex-grow-1"></div>
            <div className="d-flex flex-column ">
                <div><img src="settings.svg" alt="" /></div>
                <div><img src="icon2.svg" alt="" /></div>
            </div>
        </div>
    );
}
