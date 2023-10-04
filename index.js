function validar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let tipoDoc = document.querySelector('input[name="tipo_doc"]:checked');
    let doc = document.getElementById("doc").value;
    let genero = document.querySelector('input[name="genero"]:checked');
    let fecha = document.getElementById("fecha").value;
    let telefono = document.getElementById("tel").value;
    let correo = document.getElementById("correo").value;
    let notificaciones = document.getElementById("rta").checked;

    if (nombre === "") {
        mostrarAlerta("Ingrese un nombre");
        return;
    }
    if (apellido === "") {
        mostrarAlerta("Ingrese un apellido");
        return;
    }
    if (tipoDoc === null) {
        mostrarAlerta("Seleccione un tipo de documento");
        return;
    }
    if (doc === "") {
        mostrarAlerta("Ingrese un número de documento");
        return;
    }
    if (genero === null) {
        mostrarAlerta("Seleccione uno de los generos");
        return;
    }
    if (fecha === "") {
        mostrarAlerta("Ingrese la fecha de nacimiento");
        return;
    } else {
        let fechaNacimiento = new Date(fecha);
        let hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        let mes = hoy.getMonth() - fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        if (edad < 18) {
            mostrarAlerta("Debe ser mayor de 18 años para registrarse.");
            return;
        }
    }
    if (telefono === "") {
        mostrarAlerta("Ingrese un número de telefono");
        return;
    } else if (telefono.length !== 10 || isNaN(telefono)) {
        mostrarAlerta("El número de teléfono debe tener 10 dígitos.");
        return;
    }
    if (correo === "") {
        mostrarAlerta("Ingrese una dirección de correo");
        return;
    } else {
        let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correoRegex.test(correo)) {
            mostrarAlerta("Por favor, introduzca una dirección de correo válida.");
            return;
        }
    }

    let persona = {
        nombre: nombre,
        apellido: apellido,
        tipoDocumento: tipoDoc,
        numeroDocumento: doc,
        genero: genero,
        fechaNacimiento: fecha,
        telefono: telefono,
        correo: correo,
        Notificaciones: notificaciones,
    };

    let informacion = [];

    informacion.push(persona);

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.querySelector('input[name="tipo_doc"]:checked').checked = false;
    document.getElementById("doc").value = "";
    document.querySelector('input[name="genero"]:checked').checked = false;
    document.getElementById("fecha").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("rta").checked = false;

    alert("Información guardada con exito");
}

function mostrarAlerta(mensaje) {
    let alerta = document.getElementById("alert");
    alerta.textContent = mensaje;
    alerta.classList.remove("alert2");
    alerta.classList.add("alert2");
    setTimeout(() => {
        alerta.textContent = "";
        alerta.classList.remove("alert2");
    }, 2000);
}