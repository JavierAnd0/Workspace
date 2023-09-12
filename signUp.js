function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var estrato = document.getElementById("estrato").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var grupoSanguineo = document.getElementById("grupoSanguineo").value;
    var actividadesFavoritas = document.getElementById("actividadesFavoritas").value;
    var genero = document.getElementById("genero").value;

    var telefonoRegex = /^[0-9]{10}$/;
    function verificarNombreApellido(nombre) {
        if ((/[A-Za-zÁÉÍÓÚáéíóúñÑ\s'-]+/).test(nombre)) {
          return "El Nombre es Valido.";
        }
        else {
            return "El Nombre es Invalido.";
            }
    }
    var error = false;

    if (!telefonoRegex.test(telefono)) {
        alert("Ingrese un número de teléfono válido (10 dígitos, solo números).");
        error = true;
    }

    if (estrato < 1 || estrato > 6) {
        alert("El estrato debe estar entre 1 y 6.");
        error = true;
    }

    if (error) {
        alert("Por favor, corrija los errores antes de enviar el formulario.");
        return false; 
    }

    return true;
}
