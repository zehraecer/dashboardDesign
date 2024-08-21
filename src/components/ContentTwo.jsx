import React, { useEffect } from 'react';
import { renderChart1 } from '../charts/chart1';  // 'chart.js' dosyasını uygun path ile import et
import { renderChart2 } from '../charts/chart2';
import { renderChart3 } from '../charts/chart3';

export const ContentTwo = () => {
    useEffect(() => {
        renderChart1('cart1');  // 'myChart' id'li elementi hedefle
        renderChart2('cart2');
        renderChart3('cart3')
    }, []);

    const cardArray = [
        { name: "Revenue", price: "390", btn: "New", cartId: "cart1", color: "#437EF7", bgColor: "#F5FAFF" },
        { name: "Expenses", price: "680", btn: "one-to-one", cartId: "cart2", color: "#E2341D", bgColor: "#FFF2F0" },
        { name: "Expenses", price: "680", btn: "synergistic", cartId: "cart3", color: "#2D8A39", bgColor: "#F0FAF0" }
    ]

    return (
        <div className='d-flex flex-wrap gap-3 justify-content-center w-100'>
            {cardArray.map((card, index) => {

                return (
                    <div key={index} className=' cards  col-12 col-md-6 col-lg-4 w-100' style={{ maxWidth: "314px" }}>
                        <div className='d-flex justify-content-between cards-1'>
                            <span>{card.name}</span>
                            <img src="three-dots.svg" alt="" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div >
                                <span className='cards-span1'>{card.price}</span>
                                <div className=' cards-2 w-100'>
                                    <span style={{ color: `${card.color}`, backgroundColor: `${card.bgColor}` }} className='cards-2-span1'>{card.btn}</span>
                                    <span className='cards-2-span2'>monthly growth</span>
                                </div>
                            </div>
                            <div id={card.cartId}></div>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};
