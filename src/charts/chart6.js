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
                        show: false, // Etiket adını gizler
                    },
                    value: {
                        show: true,  // Yüzde değerini gösterir
                        fontSize: '16px', // Yazı boyutunu ayarlayın (küçültülmüş boyut)
                        color: '#437EF7',  // Yazı rengini mavi (#437EF7) yapar
                        offsetY: 5,       // Yatay hizayı ayarlayın
                    }
                },
            },
        },
        labels: [], // Dışta yazı olmaması için boş bırakın
    };

    const chart = new ApexCharts(document.querySelector(`#${elementId}`), options);
    chart.render();
}
