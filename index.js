let precio = 400000

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

const total = document.getElementById("cantidad");
let count = 0;

function incremento(){
  count++;
  total.innerHTML = count;
  let resultado = precio * count;
  let valorSpan = document.querySelector(".valor-total");
  valorSpan.innerHTML = resultado;
}

function disminucion(){
  count--;
  total.innerHTML = count;
  let resultado = precio * count;
  let valorSpan = document.querySelector(".valor-total");
  valorSpan.innerHTML = resultado;
}

