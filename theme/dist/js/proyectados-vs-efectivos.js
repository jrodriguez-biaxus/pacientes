Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: [
            'Ene',
            'Feb',
            'Mar'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Pacientes'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Pacientes proyectados',
        data: [50, 60, 70],
        color: '#AAA'

    }, {
        name: 'Pacientes efectivos',
        data: [45, 50, 80],
        color: '#00a65a'
    }]
});