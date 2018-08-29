var socket = io();
// Escuchar
socket.on("connect", function() {
    console.log("Conectado al servidor");
});

socket.on("disconnect", function() {
    console.log("Perdimos conexión con el servidor");
});

//Enviar información
socket.emit("enviarMensaje", {
    nombre: "Soulmoon",
    mensaje: "Se robo la kill"
}, function(resp) {
    console.log("Respuesta Server: ", resp);
});

//Escucha Información
socket.on("enviarMensaje", function(mensaje) {
    console.log("Servidor: ", mensaje);
});