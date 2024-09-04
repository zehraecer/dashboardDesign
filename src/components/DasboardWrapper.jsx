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
    const [middleFour, setMiddleFour] = useState(false)


    const mood = () => {
        setisClicked(!isClicked)
        console.log(isClicked);
    }

    useEffect(() => {
        const saveDarkMode = localStorage.getItem("darkMode")
        if (saveDarkMode === "true") {
            setisClicked(true)
            document.body.classList.add("dark-mode")
        }
    }, [])

    useEffect(() => {

        if (isClicked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem("darkMode", "true")
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem("darkMode", "false")
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
                setMiddleFour(false)
            } else {
                setShowMiddle(false);
            }
        } else {
            setShowMiddle(true);
            setMiddleOne(true);
            setMiddleTwo(false);
            setMiddleThere(false);
            setMiddleFour(false)
        }
    };

    const MiddleSearchClick = () => {
        if (showMiddle) {
            setMiddleOne(false);
            setMiddleTwo(false);
            setMiddleThere(false);
            setMiddleFour(false)
            // setShowMiddle(false);
        } else {
            setShowMiddle(true);
            setMiddleOne(false);
            setMiddleTwo(false);
            setMiddleThere(false);
            setMiddleFour(false)
        }
    }
    const MiddleTwoClick = () => {
        if (showMiddle) {
            if (!middleTwo) {
                setMiddleTwo(true);
                setMiddleOne(false);
                setMiddleThere(false);
                setMiddleFour(false)
            } else {
                setShowMiddle(false);
            }
        } else {
            setShowMiddle(true);
            setMiddleTwo(true);
            setMiddleOne(false);
            setMiddleThere(false);
            setMiddleFour(false)
        }
    };
    const MiddleThereClick = () => {
        if (showMiddle) {
            if (!middleThere) {
                setMiddleThere(true);
                setMiddleOne(false);
                setMiddleTwo(false);
                setMiddleFour(false)
            } else {
                setShowMiddle(false);
            }
        } else {
            setShowMiddle(true);
            setMiddleThere(true);
            setMiddleOne(false);
            setMiddleTwo(false);
            setMiddleFour(false)
        }
    };

    const MiddleFourClick = () => {
        if (showMiddle) {
            if (!middleFour) {
                setMiddleFour(true);
                setMiddleThere(false);
                setMiddleOne(false);
                setMiddleTwo(false);
            } else {
                setShowMiddle(false);
            }
        } else {
            setShowMiddle(true);
            setMiddleFour(true)
            setMiddleThere(false);
            setMiddleOne(false);
            setMiddleTwo(false);
        }
    }

    return (
        <div className="d-flex flex-column w-100 left-heigth">
            <Header mood={mood} isClicked={isClicked} />
            <div className="d-flex flex-grow-1 overflow-hidden h-100">
                <div className='left-wrapper h-100'>
                    <ContainerLeft mood={mood} isClicked={isClicked} MiddleOneClick={MiddleOneClick} MiddleTwoClick={MiddleTwoClick} MiddleThereClick={MiddleThereClick} MiddleFourClick={MiddleFourClick} MiddleSearchClick={MiddleSearchClick} />
                </div>
                <div className={`d-flex ${showMiddle ? 'flex-grow-1' : ''}  overflow-auto left-heigth`} style={{ transition: 'width 1.3s ease' }}>
                    {showMiddle && <ContainerMiddle setShowMiddle={setShowMiddle} showMiddle={showMiddle} middleOne={middleOne} middleTwo={middleTwo} middleThere={middleThere} middleFour={middleFour} />}
                </div>
                <div className={`w-100 ${showMiddle ? '' : 'flex-grow-1'} h-100 overflow-auto`}>
                    <ContainerRight isClicked={isClicked} />
                </div>
            </div>
        </div>
    );
}
