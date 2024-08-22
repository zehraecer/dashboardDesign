import ApexCharts from 'apexcharts';

export function renderChart5(elementId) {
    const options = {
        series: [{
            name: 'interfaces',
            data: [7, 5, 1, 67, 22, 43, 21, 49, 58, 47, 52, 69]
        }, {
            name: 'build-ups',
            data: [4, 23, 1, 8, 13, 27, 33, 12, 44, 55, 41, 67]
        }],
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            stackType: '100%',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '30%',
            }
        },
        colors: ['#437EF7', '#5CB1FF'],
        xaxis: {
            categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        },
        yaxis: {
            min: 0,
            max: 60,
            tickAmount: 4,
            labels: {
                formatter: function (value) {
                    const customLabels = ['0%', '25%', '50%', '75%', '100%'];
                    const index = Math.round((value / 100) * 4);
                    return customLabels[index] || '';
                }
            }
        },
        fill: {
            opacity: 1
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            offsetY: -10
        },
        dataLabels: {
            enabled: false
        }
    };

    const chart = new ApexCharts(document.querySelector(`#${elementId}`), options);
    chart.render();
}
