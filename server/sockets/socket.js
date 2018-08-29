const { io } = require("../server");

io.on("connect", (client) => {
    console.log("Usuario Conectado");

    client.on("disconnect", () => {
        console.log("El usuario se ha desconectado");
    });

    //Escucha el mensaje
    client.on("enviarMensaje", (data, callback) => {
        console.log("enviarMensaje", data);
        client.broadcast.emit("enviarMensaje", data);
        // if (mensaje.nombre) {
        //     callback({
        //         resp: "Todo salio Bien"
        //     });
        // } else {
        //     callback({
        //         resp: "TODO SALIO MAL!!!!!!"
        //     });
        // }
    });

    //Enviar información
    client.emit("enviarMensaje", {
        nombre: "Administrador",
        mensaje: "Bienvenido a la Aplicación"
    });

});