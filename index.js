function guardar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let tipoDocumento = document.querySelector('input[name="tipo_doc"]:checked').value;
    let numeroDocumento = document.getElementById("doc").value;
    let genero = document.querySelector('input[name="genero"]:checked').value;
    let fechaNacimiento = document.getElementById("fecha").value;
    let telefono = document.getElementById("tel").value;
    let correo = document.getElementById("correo").value;
    let recibirNotificaciones = document.getElementById("rta").checked;

    let persona = {
        nombre: nombre,
        apellido: apellido,
        tipoDocumento: tipoDocumento,
        numeroDocumento: numeroDocumento,
        genero: genero,
        fechaNacimiento: fechaNacimiento,
        telefono: telefono,
        correo: correo,
        recibirNotificaciones: recibirNotificaciones
    };

    let informacion=[];

    informacion.push(persona);

    alert("Información guardada con exito")
}
