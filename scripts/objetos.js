var portfolio = {
    Titulo: "",
    Card: [],
    Personal: "",
    Academica: ["", ""],
    Laboral: ["", ""],
    Skills: ["", ""],
    Proyectos: []
};
function GetTitulo(titulo) {
    var a = document.getElementById("titulo");
    a.textContent = titulo;
    return portfolio.Titulo = titulo;
}
