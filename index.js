let informacion = [];
let op = null
let indice = null

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
    if (op === true) {

        informacion[indice].nombre = document.getElementById("nombre").value;
        informacion[indice].apellido = document.getElementById("apellido").value;
        informacion[indice].tipoDoc = document.querySelector('input[name="tipo_doc"]:checked').value;
        informacion[indice].doc = document.getElementById("doc").value;
        informacion[indice].genero = document.querySelector('input[name="genero"]:checked').value;
        informacion[indice].fecha = document.getElementById("fecha").value;
        informacion[indice].telefono = document.getElementById("tel").value;
        informacion[indice].correo = document.getElementById("correo").value;
    } else {

        let tipoDocValue = tipoDoc.value;
        let generoValue = genero.value;

        let persona = {
            nombre: nombre,
            apellido: apellido,
            tipoDocumento: tipoDocValue,
            numeroDocumento: doc,
            genero: generoValue,
            fechaNacimiento: fecha,
            telefono: telefono,
            correo: correo,
            Notificaciones: notificaciones,

        };

        informacion.push(persona);

        alert("Información guardada con exito");

    }
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.querySelector('input[name="tipo_doc"]:checked').checked = false;
    document.getElementById("doc").value = "";
    document.querySelector('input[name="genero"]:checked').checked = false;
    document.getElementById("fecha").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("rta").checked = false;

    document.getElementById("tabla").innerHTML = "";
    insertar();
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

function insertar() {
    let frag = document.createDocumentFragment();

    informacion.forEach((item, index) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        let td9 = document.createElement("td");
        let editar = document.createElement("button");
        let eliminar = document.createElement("button");
        editar.textContent = "📝";
        editar.addEventListener("click", () => {
            Editar(item, index);
        })
        eliminar.textContent = "❌";
        td1.textContent = item.nombre;
        td2.textContent = item.apellido;
        td4.textContent = item.tipoDocumento;
        td3.textContent = item.numeroDocumento;
        td5.textContent = item.genero;
        td6.textContent = item.fechaNacimiento;
        td7.textContent = item.telefono;
        td8.textContent = item.correo;
        td9.appendChild(editar);
        td9.appendChild(eliminar);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);
        tr.appendChild(td9);
        frag.appendChild(tr);
        document.getElementById("tabla").appendChild(frag);
    });

    function Editar(r, i) {
        op = true;
        indice = i;
        document.getElementById("nombre").value = r.nombre;
        document.getElementById("apellido").value = r.apellido;
        document.querySelector('input[name="tipo_doc"][value="' + r.tipoDocumento + '"]').checked = true;
        document.getElementById("doc").value = r.numeroDocumento;
        document.querySelector('input[name="genero"][value="' + r.genero + '"]').checked = true;
        document.getElementById("fecha").value = r.fechaNacimiento;
        document.getElementById("tel").value = r.telefono;
        document.getElementById("correo").value = r.correo;
    }
}