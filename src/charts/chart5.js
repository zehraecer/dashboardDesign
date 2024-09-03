import ApexCharts from 'apexcharts';

export function renderChart5(elementId) {
    const options = {
        series: [{
            name: 'interfaces',
            data: [27, 5, 40, 45, 8, 63, 41, 19, 28, 23, 15, 59]
        }, {
            name: 'build-ups',
            data: [14, 23, 36, 40, 5, 60, 35, 8, 14, 12, 7, 47]
        }],
        chart: {
            type: 'bar',
            height: 350,
            stacked: true, // Bu özellik kalıyor ama stackType kaldırıldı
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
            labels: {
                style: {
                    colors: '#a5acba',
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif'
                }
            }
        },
        yaxis: {
            min: 0,
            max: 100, // Y eksenini genişlettik
            tickAmount: 4, // Y ekseninde 5 tane aralık olacak
            labels: {
                formatter: function (value) {
                    return value.toString();
                },
                style: {
                    colors: '#a5acba',
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif'
                }
            }
        },
        grid: {
            borderColor: '#2e3545',
            strokeDashArray: 4
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            offsetY: -10,
            labels: {
                colors: '#a5acba',
                fontSize: '14px',
                fontFamily: 'Helvetica, Arial, sans-serif'
            }
        },
        dataLabels: {
            enabled: false
        }
    };

    const chart = new ApexCharts(document.querySelector(`#${elementId}`), options);
    chart.render();
}
