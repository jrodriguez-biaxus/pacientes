Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: [
            'Pacientes sin tratamiento', 
            'Pacientes sin recoger tratamientos en OL',
            'Respuestas negativas CTC', 
            'Pacientes en tutela', 
            'Paciente no acepta programa'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Pacientes',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
       enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Pacientes',
        color:'rgb(237, 85, 101)',
        data: [12, 10, 5, 7, 6],
        events: {
            click:function(e){
                if(e.point.category === "Pacientes sin tratamiento") {
                    window.location.href = '/alertas-detail.html';
                }
            }
        }
    }]
});
