import ApexCharts from "apexcharts";
export function renderChart3(elementId) {
    let options = {
        series: [{
            name: 'Series 1',
            data: [85, 120, 98, 131, 122, 159, 100]
        }],
        chart: {
            width: 110,
            height: 112,
            type: 'area',
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            show: false
        },
        grid: {
            show: false
        },
        colors: ['#5DC264'],
        tooltip: {
            enabled: false
        },
        legend: {
            show: false
        }
    };



    let chart = new ApexCharts(document.querySelector(`#${elementId}`), options);
    chart.render();
}
