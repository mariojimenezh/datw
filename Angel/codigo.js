/*Todavia no hay nada hecho*/


function insertar(){
  //alert("Inserto ahora");
  if (document.querySelector("#dni").value.length==0 ||
      document.querySelector("#nombre").value.length==0 ||
      document.querySelector("#apellidos").value.length==0 ||
      document.querySelector("#direccion").value.length==0 ||
      document.querySelector("#cp").value.length==0 ||
      document.querySelector("#edad").value.length==0
) {
    //alert("No has l....")
    document.querySelector("#alert").removeAttribute("hidden");
  }
  else {
  var nuevaFila, nuevaColumna;
  var tabla = document.querySelector("#listado");
  nuevaFila = document.createElement("tr");
  //Creo la columna del DNI
  nuevaColumna = document.createElement("td");
  nuevaColumna.innerHTML = document.querySelector("#dni").value;
  nuevaFila.appendChild(nuevaColumna);
  //Creo la columna del nombre
  nuevaColumna = document.createElement("td");
  nuevaColumna.innerHTML = document.querySelector("#nombre").value;
  nuevaFila.appendChild(nuevaColumna);
  //Creo la columna de los apellidos
  nuevaColumna = document.createElement("td");
  nuevaColumna.innerHTML = document.querySelector("#apellidos").value;
  nuevaFila.appendChild(nuevaColumna);
  //Creo la columna de la direccion
  nuevaColumna = document.createElement("td");
  nuevaColumna.innerHTML = document.querySelector("#direccion").value;
  nuevaFila.appendChild(nuevaColumna);
  //Creo la columna del CP
  nuevaColumna = document.createElement("td");
  nuevaColumna.innerHTML = document.querySelector("#cp").value;
  nuevaFila.appendChild(nuevaColumna);
  //Creo la columna de la edad
  nuevaColumna = document.createElement("td");
  nuevaColumna.innerHTML = document.querySelector("#edad").value;
  nuevaFila.appendChild(nuevaColumna);
  //Agrego la nueva fila a la tabla
  tabla.appendChild(nuevaFila);
}
}
function borrarLista(){
  //alert("si, borro");
  var padre=document.querySelector("#listado");
  var hijos=padre.children;
  var nhijos=hijos.length;
//se quien es el padre, los hijos y el número de hijos
/*  while (nhijos>2) {
    padre.removeChild(hijos[nhijos-1]);
    hijos=padre.children;
    nhijos=hijos.lenght;
  };*/
  for (var i = nhijos-1; i >1; i--) {
    padre.removeChild(hijos[i]);
  }
}
document.querySelector("#calcularMedia").addEventListener("click",calcularMedia);
function calcularMedia() {
  //alert("funciono");
  var filasTabla=document.querySelectorAll("#listado>tr");
  var nFilasTabla=filasTabla.length;
  if(nFilasTabla<1){
    alert("No hay datos");
  }
  else {
    var suma=0;
    for(var i=0;i<nFilasTabla;i++){
      /*voy sumando los valores*/
      if(filasTabla[i].querySelectorAll("td")[5].innerHTML.length==0){
        suma+=0;
      }else {
        suma+=parseInt(filasTabla[i].querySelectorAll("td")[5].innerHTML);
      }
    }
    var media=suma/nFilasTabla;
    document.querySelector("#alert2").innerHTML=("La media es "+media);
    document.querySelector("#alert2").removeAttribute("hidden");
    //document.write("<h4 class='alert alert-danger'>La media es "+media+"</h4>");
  }
}
document.querySelector("#insertar").addEventListener("click",insertar);
document.querySelector("#borrarLista").addEventListener("click",borrarLista);
