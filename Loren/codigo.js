function insertar(){
  var nuevoElement;
  var lista = document.querySelector("#lista");
  nuevoElement = document.createElement("li");
  lista.appendChild(nuevoElement);
}

function borrar(){
  lista=document.querySelector("#lista");
  elementos=lista.getElementsByTagName("li");
  //Borramos ultimo hijo
  nHijos = elementos.length;
  ultimo = elementos[nHijos - 1]; //
  lista.removeChild(ultimo);
}








document.querySelector("#insertar").addEventListener("click",insertar);
document.querySelector("#borrar").addEventListener("click",borrar);
