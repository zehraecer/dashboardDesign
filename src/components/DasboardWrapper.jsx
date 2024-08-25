import React, { useState, useEffect } from 'react';
import { ContainerLeft } from "./ContainerLeft";
import { ContainerMiddle } from "./ContainerMiddle";
import { ContainerRight } from "./ContainerRight";
import { Header } from "./Header";

export const DashboardWrapper = () => {
    const [showMiddle, setShowMiddle] = useState(false);
    const [isClicked, setisClicked] = useState(false)

    const mood = () => {
        setisClicked(!isClicked)
        console.log(isClicked);
    }

    useEffect(() => {

        if (isClicked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isClicked]);

    const handleLogoClick = () => {
        setShowMiddle(!showMiddle);
    };

    return (
        <div className="d-flex flex-column w-100 left-heigth">
            <Header mood={mood} isClicked={isClicked} />
            <div className="d-flex flex-grow-1 overflow-hidden h-100">
                <div className='left-wrapper h-100'>
                    <ContainerLeft onLogoClick={handleLogoClick} mood={mood} isClicked={isClicked} />
                </div>
                <div className={`d-flex ${showMiddle ? 'flex-grow-1' : ''}  overflow-auto left-heigth`} style={{ transition: 'width 1.3s ease' }}>
                    {showMiddle && <ContainerMiddle />}
                </div>
                <div className={`w-100 ${showMiddle ? '' : 'flex-grow-1'} h-100 overflow-auto`}>
                    <ContainerRight isClicked={isClicked} />
                </div>
            </div>
        </div>
    );
}
