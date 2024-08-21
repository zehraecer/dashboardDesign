import React, { useEffect } from 'react';
import { renderChart4 } from '../charts/chart4';
export const ContentThere = () => {

    useEffect(() => {

        renderChart4("cart4")
    }, [])

    return (

        <div className='content-3'>
            <div className='d-flex justify-content-between align-items-center content-3-1'>
                <span>Revenue</span>
                <img src="three-dots.svg" alt="" />
            </div>

            <div className="content-3-2 d-flex flex-column  justify-content-center flex-start">
                <div className=" d-flex flex-column ">
                    <span>Total Transaction Revenue</span>
                    <p>$135,450</p>
                </div>
                <div id="cart4" className='d-flex justify-content-start align-items-start w-100' >

                </div>
            </div>

            <div className='content-3-3'>
                <span>Open <img src="sendIcon.svg" /></span>
            </div>
        </div>
    )
}