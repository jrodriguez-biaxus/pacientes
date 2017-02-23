Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: [
            'Adherencia', 
            'Pendientes Respuesta CTC',
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
        data: [15, 3, 5],
        events: {
            click:function(e){
                if(e.point.category === "Adherencia") {
                    window.location.href = '/medicos/index-detail.html';
                }
            }
        }
    }]
});