document.getElementById("mision").addEventListener("click", function() {
    document.getElementById("mision-vision").classList.remove("hidden");
    document.getElementById("equipo").classList.add("hidden");
});

document.getElementById("vision").addEventListener("click", function() {
    document.getElementById("mision-vision").classList.remove("hidden");
    document.getElementById("equipo").classList.add("hidden");
});

document.getElementById("equipo").addEventListener("click", function() {
    document.getElementById("mision-vision").classList.add("hidden");
    document.getElementById("equipo").classList.remove("hidden");
});

document.getElementById("cambiar-tamaño").addEventListener("click", function() {
    // Cambiar el tamaño de letra (por ejemplo, aumentarlo)
    // Puedes ajustar la lógica según tus preferencias.
    document.body.style.fontSize = "18px";
});

document.getElementById("cambiar-color").addEventListener("click", function() {
    // Cambiar el color de letra (por ejemplo, a rojo)
    // Puedes ajustar la lógica según tus preferencias.
    document.body.style.color = "red";
});
