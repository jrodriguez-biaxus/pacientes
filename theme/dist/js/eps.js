var chart = Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    lang: {
        drillUpText:'< Volver a {series.name}'
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
            y: 30,
            drilldown: 'Nueva EPS'
        }, {
            name: 'Cafesalud',
            y: 21,
            drilldown: null
        }, {
            name: 'Coomeva',
            y: 12,
            drilldown: null
        }, {
            name: 'Salud Total',
            y: 10,
            drilldown: null
        }, {
            name: 'Compensar',
            y: 8,
            drilldown: null
        }, {
            name: 'Otros',
            y: 19,
            drilldown: null
        }]
    }],
    drilldown: {
        series: [{
            name: 'Pacientes',
            id: 'Nueva EPS',
            data: [
                ['Costa',12], 
                ['Santanderes', 8], 
                ['Antioquia',16], 
                ['Centro',46], 
                ['Occidente',18]
            ],
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
    }
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
        data: [
            {name: 'Costa', y: 12}, 
            {name: 'Santanderes',y: 8}, 
            {name: 'Antioquia',y: 16}, 
            {name: 'Centro',y: 46}, 
            {name: 'Occidente',y: 18}
            ],
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