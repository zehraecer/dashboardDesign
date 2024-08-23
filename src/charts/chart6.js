import ApexCharts from 'apexcharts';

export function renderChart6(elementId) {

    const options = {
        series: [86],
        chart: {
            height: 150,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '50%',
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: true,
                        fontSize: '16px',
                        color: '#437EF7',
                        offsetY: 5,
                    }
                },
            },
        },
        labels: [],
    };

    const chart = new ApexCharts(document.querySelector(`#${elementId}`), options);
    chart.render();
}
