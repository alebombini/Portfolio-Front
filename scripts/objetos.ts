interface Yo {
    Titulo: [string, string];
    Personal: string;
    Academica: [string, string];
    Laboral: [string, string];
    Skills: [string, string];
    Proyectos: any;
}
 let portfolio: Yo={
    Titulo:"",
    Personal: "",
    Academica: ["", ""],
    Laboral: ["", ""],
    Skills: ["", ""],
    Proyectos: []
 }

 function GetTitulo(titulo: string): string{
    const a = document.getElementById("titulo");
    a.textContent=titulo;
    return portfolio.Titulo=titulo;
 }