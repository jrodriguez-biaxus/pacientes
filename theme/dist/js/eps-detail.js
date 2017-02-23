$(document).ready(function(){
    var api = $(".table").DataTable({
        paging: false,
        info:false,
        ordering:false,
        language: {
            zeroRecords: "No hay registros",
            processing: "Procesando"
        },
        columns:[
            null,
            null,
            null,
            null,
            null,
            {
                visible:false
            },
            {
                visible:false
            },
        ]
    });
    $("#zone").change(function(){
        api.search($("#zone").val()+' '+$("#eps").val()).draw();
    });
    $("#eps").change(function(){
        api.search($("#zone").val()+' '+$("#eps").val()).draw();
    });
    api.search($("#zone").val()+' '+$("#eps").val()).draw();
});