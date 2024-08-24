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
            height: '100%',
            width: '100%',
            type: 'bar',
            toolbar: {
                show: false,
            },
            offsetX: 0,  // Ortalamak için offsetX sıfırlandı
            offsetY: 0,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%', // Daraltarak ortalamayı kolaylaştırır
                barGap: '0%', // Çubuklar arasında boşluk bırakmaz
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],  // Kategoriler eklenerek hizalama sağlanır
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
