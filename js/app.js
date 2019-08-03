$("#todos").click(function(evento) {
    $("*").addClass("selector");
});
$("#elemento").click(function(evento) {
    $("p").addClass("selector");
});
$("#elementoID").click(function(evento) {
    $("#email").addClass("selector");
});
$("#elementoClase").click(function(evento) {
    $(".ejemplo").addClass("selector");
});
$("#elementoInput").click(function(evento) {
    $("input").addClass("selector");
});
$("#ajax").click(function(evento) {
    $.ajax({
        url: "https://www.swapi.co/api/planets/?page=2",
        success: function(respuesta) {
            console.log(respuesta.results);
        },
        error: function() {
            console.log("Existe un error al realizar la petición");
        },
    });
});