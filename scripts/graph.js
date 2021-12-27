const ctx = document.querySelector('.statistics__graph').getContext('2d')
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            '14:00',
            '16:00',
            '18:00',
            '20:00',
            '22:00',
            '00:00',
            '02:00',
            '04:00',
        ],
        datasets: [
            {
                label: '',
                data: [2, 0, -2, 0, 4, 2, -2, -2],
                backgroundColor: ['#fff'],
                borderColor: ['#fff'],
                borderWidth: 3,
            },
        ],
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                min: -4 /*Always 2 more or less than min and max*/,
                max: 6,
                ticks: {
                    stepSize: 2,
                },
            },
        },
    },
})
