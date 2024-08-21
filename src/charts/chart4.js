import ApexCharts from 'apexcharts';

export function renderChart4(elementId) {
    const options = {
        series: [
            {
                name: 'Income',
                type: 'column',
                data: [8, 6, 4, 4.5, 7.5, 3.8, 5.8, 3.2],
            },
            {
                name: 'Cashflow',
                type: 'column',
                data: [5, 2, 5.1, 3, 5.1, 4.2, 3.5, 4.5],
            },
        ],
        chart: {
            height: 232,
            width: 287,
            type: 'bar',
            toolbar: {
                show: false,
            },
            offsetX: -30,  // X ekseninde konumu ayarlamak için kullanılır
            offsetY: 0,  // Y ekseninde konumu ayarlamak için kullanılır
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '70%',
                barGap: '40%',
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: [],
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        grid: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
        colors: ['#437EF7', '#5CB1FF'],
        legend: {
            show: false,
        },
    };

    const chart = new ApexCharts(document.querySelector(`#${elementId}`), options);
    chart.render();
}
