//muestra el input
//toma el valor del texto del parrafo con id "footer-text"
//lo muestra en consola
function cambiar_parrafo() {
    document.getElementById("lapizTitulo").style.display = "block";
    var texto = document.getElementById("lapizTitulo").innerText;
    console.log(texto);
}
;
//para q texto del input se vea en el footer (la llame en el input con (this.value))
function myFunction2(valor: string) {
    document.getElementById("titulo").innerText = valor;
}
;
//no funciona, deberia desaparecer el input al dar enter
var textarea = document.getElementById("lapizTitulo");
textarea.addEventListener('keyup', function (e) {
    logMessage('key "${e.key}" released [event: keyup]');
    if (e.key == "Enter") {
        document.getElementById("lapizTitulo")
            .style.display = "none";
    }
});
function cambiar_presentacion() {
    document.getElementById("presentacion").innerHTML = "Esto esta en el codigo.JS";
    aparecer("check");
    desaparecer("lapiz1");
}
;
function aparecer() {
    document.getElementById("check").style.display = "block";
}
;
function desaparecer() {
    document.getElementById("lapiz1").style.display = "none";
}
;
function guardar_cambios() {
}
;
