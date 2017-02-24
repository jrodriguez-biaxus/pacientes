var chart = Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        useHTML: true,
        headerFormat: '<small style="color: {series.color}">{point.key}</small></br>',
        pointFormat: '{series.name}: <b>{point.percentage} %</b>'
    },
    plotOptions: {
        pie: {
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Pacientes',
        colorByPoint: true,
        data: [{
            name: 'Nueva EPS',
            y: 30
        }, {
            name: 'Cafesalud',
            y: 21
        }, {
            name: 'Coomeva',
            y: 12
        }, {
            name: 'Salud Total',
            y: 10
        }, {
            name: 'Compensar',
            y: 8
        }, {
            name: 'Otros',
            y: 19
        }],
        events:{
            click: function (e){
                window.nuevaEpsClicks = window.nuevaEpsClicks?window.nuevaEpsClicks+1:1; 
                setTimeout(function(){
                    if(e.point.name === "Nueva EPS" && window.nuevaEpsClicks>1) {
                        $("#container-1").show();
                        chartDetail.reflow();
                        $("#container").hide();
                        $("#goBackContainer").show();
                    }
                    window.nuevaEpsClicks = 0;
                },300);
            }
        }
    }]
});

var chartDetail = Highcharts.chart('container-1', {
    chart: {
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        useHTML: true,
        headerFormat: '<small style="color: {series.color}">{point.key}</small></br>',
        pointFormat: '{series.name}: <b>{point.percentage} %</b>'
    },
    plotOptions: {
        pie: {
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Pacientes',
        colorByPoint: true,
        data: [{
            name: 'Costa',
            y: 12
        }, {
            name: 'Santanderes',
            y: 8
        }, {
            name: 'Antioquia',
            y: 16
        }, {
            name: 'Centro',
            y: 46
        }, {
            name: 'Occidente',
            y: 18
        }],
        events:{
            click: function (e){
                window.costaClicks = window.costaClicks?window.costaClicks+1:1; 
                setTimeout(function(){
                    if(e.point.name === "Costa" && window.costaClicks>1) {
                        window.location.href='/eps-detail.html';
                    }
                    window.nuevaEpsClicks = 0;
                },300);
                
            }
        }
    }]
});

$(document).ready(function(){
    $("#goBackContainer").click(function(){
        $("#container-1").hide();
        chart.reflow();
        $("#container").show();
        $("#goBackContainer").hide();
    });
});