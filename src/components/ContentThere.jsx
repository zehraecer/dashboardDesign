import React, { useEffect } from 'react';
import { renderChart4 } from '../charts/chart4';
import { renderChart5 } from "../charts/chart5.js"
export const ContentThere = () => {

    useEffect(() => {

        renderChart4("cart4")
    }, [])

    useEffect(() => {


        renderChart5("cart5")
    }, [])

    return (

        <div className='content-3 d-flex flex-column justify-content-center'>
            <div className='d-flex justify-content-between align-items-center content-3-1'>
                <span className="d-block d-md-none">Revenue</span>
                <span className=" d-none d-md-block">Advanced Graphic</span>
                <img src="three-dots.svg" alt="" />
            </div>

            <div className="content-3-2 d-flex flex-column  justify-content-center flex-start">
                <div className=" d-flex flex-column  d-md-none ">
                    <span>Total Transaction Revenue</span>
                    <p>$135,450</p>
                </div>
                <div id="cart4" className="card d-block d-md-none"></div>
                <div id="cart5" className="card d-none d-md-block"></div>
            </div>

            <div className='content-3-3'>
                <span>Open <img src="sendIcon.svg" /></span>
            </div>
        </div>
    )
}