import ApexCharts from 'apexcharts';

export function renderChart6(elementId) {

    const options = {
        series: [86],
        chart: {
            type: 'radialBar',
            height: '100%',  // Yüksekliği kapsayıcıya göre ayarla
            width: '100%',   // Genişliği kapsayıcıya göre ayarla
            offsetX: 0,
            offsetY: 0,
            animations: {
                enabled: false, // İstersen animasyonu da kapatabilirsin
            },
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '100%',  // Dairedir, boyutunu bu şekilde ayarlayabilirsin
                },
                dataLabels: {
                    name: {
                        show: false,  // İsim etiketini gizle
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
        responsive: [
            {
                breakpoint: 768,  // Mobil cihazlar için
                options: {
                    chart: {
                        height: 120  // Mobilde daha küçük bir yükseklik ayarla
                    },
                },
            }
        ]
    };

    const chart = new ApexCharts(document.querySelector(`#${elementId}`), options);
    chart.render();
}
