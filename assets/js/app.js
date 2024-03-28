let precio = 400000

let precioSpan = document.querySelector(".precio-inicial")
precioSpan.innerHTML = precio

const valorSpan = document.querySelector(".valor-total")
const total = document.querySelector(".cantidad")
let count = 0
// const sumar = document.querySelector('#sumar')
// const restar = document.querySelector('#restar')

// sumar.addEventListener('click', () =>{
//   total.innerHTML = +total.innerHTML + 1
//   valorSpan.innerHTML =  total.innerHTML * precio
// })

// restar.addEventListener('click', () =>{
//   total.innerHTML = +total.innerHTML - 1
//   valorSpan.innerHTML =  total.innerHTML * precio
// })

const incremento = () =>{
  count++
  total.innerHTML = count
  valorSpan.innerHTML =  total.innerHTML * precio
}

const disminucion = () =>{
  if (total.innerHTML >= 1){
    count--
    total.innerHTML = count
    valorSpan.innerHTML =  total.innerHTML * precio
  }
}

