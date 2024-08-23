import React, { useState } from 'react';
import { ContainerLeft } from "./ContainerLeft";
import { ContainerMiddle } from "./ContainerMiddle";
import { ContainerRight } from "./ContainerRight";
import { Header } from "./Header";

export const DashboardWrapper = () => {
    const [showMiddle, setShowMiddle] = useState(false);

    const handleLogoClick = () => {
        setShowMiddle(!showMiddle);
    };

    return (
        <div className="d-flex flex-column w-100 h-100">
            <Header />
            <div className="d-flex flex-grow-1 overflow-hidden">
                <div style={{ borderRight: "1px solid #EAEBF0" }}>
                    <ContainerLeft onLogoClick={handleLogoClick} />
                </div>
                <div className={`d-flex ${showMiddle ? 'flex-grow-1' : ''} h-100 overflow-auto`} style={{ transition: 'width 1.3s ease' }}>
                    {showMiddle && <ContainerMiddle />}
                </div>
                <div className={`w-100 ${showMiddle ? '' : 'flex-grow-1'} h-100 overflow-auto`}>
                    <ContainerRight />
                </div>
            </div>
        </div>
    );
}
