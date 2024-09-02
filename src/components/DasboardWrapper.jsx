import React, { useState, useEffect } from 'react';
import { ContainerLeft } from "./ContainerLeft";
import { ContainerMiddle } from "./ContainerMiddle";
import { ContainerRight } from "./ContainerRight";
import { Header } from "./Header";

export const DashboardWrapper = () => {
    const [showMiddle, setShowMiddle] = useState(false);
    const [isClicked, setisClicked] = useState(false)
    const [middleOne, setMiddleOne] = useState(false)
    const [middleTwo, setMiddleTwo] = useState(false)
    const [middleThere, setMiddleThere] = useState(false)

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

    // const handleLogoClick = () => {
    //     setShowMiddle(!showMiddle);


    // };

    const MiddleOneClick = () => {
        if (showMiddle) {
            if (!middleOne) {
                setMiddleOne(true);
                setMiddleTwo(false);
                setMiddleThere(false);
            } else {
                setShowMiddle(false);
            }
        } else {
            setShowMiddle(true);
            setMiddleOne(true);
            setMiddleTwo(false);
            setMiddleThere(false);
        }
    };

    const MiddleSearchClick = () => {
        if (showMiddle) {
            setMiddleOne(false);
            setMiddleTwo(false);
            setMiddleThere(false);

            setShowMiddle(false);
        } else {
            setShowMiddle(true);
            setMiddleOne(false);
            setMiddleTwo(false);
            setMiddleThere(false);
        }
    }
    const MiddleTwoClick = () => {
        if (showMiddle) {
            if (!middleTwo) {
                setMiddleTwo(true);
                setMiddleOne(false);
                setMiddleThere(false);
            } else {
                setShowMiddle(false);
            }
        } else {
            setShowMiddle(true);
            setMiddleTwo(true);
            setMiddleOne(false);
            setMiddleThere(false);
        }
    };
    const MiddleThereClick = () => {
        if (showMiddle) {
            if (!middleThere) {
                setMiddleThere(true);
                setMiddleOne(false);
                setMiddleTwo(false);
            } else {
                setShowMiddle(false);
            }
        } else {
            setShowMiddle(true);
            setMiddleThere(true);
            setMiddleOne(false);
            setMiddleTwo(false);
        }
    };

    return (
        <div className="d-flex flex-column w-100 left-heigth">
            <Header mood={mood} isClicked={isClicked} />
            <div className="d-flex flex-grow-1 overflow-hidden h-100">
                <div className='left-wrapper h-100'>
                    <ContainerLeft mood={mood} MiddleOneClick={MiddleOneClick} MiddleTwoClick={MiddleTwoClick} MiddleThereClick={MiddleThereClick} MiddleSearchClick={MiddleSearchClick} />
                </div>
                <div className={`d-flex ${showMiddle ? 'flex-grow-1' : ''}  overflow-auto left-heigth`} style={{ transition: 'width 1.3s ease' }}>
                    {showMiddle && <ContainerMiddle setShowMiddle={setShowMiddle} showMiddle={showMiddle} middleOne={middleOne} middleTwo={middleTwo} middleThere={middleThere} />}
                </div>
                <div className={`w-100 ${showMiddle ? '' : 'flex-grow-1'} h-100 overflow-auto`}>
                    <ContainerRight isClicked={isClicked} />
                </div>
            </div>
        </div>
    );
}
