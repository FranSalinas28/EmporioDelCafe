
let carroDeCompras = [];


if(localStorage.getItem("carritoCompras")){
    carroDeCompras = JSON.parse(localStorage.getItem("carritoCompras"))
}

const contenedorProductos = document.getElementById("contenedorProductos");

const listadoProductos = "json/productos.json";

setInterval(reloj, 1000);

function reloj() {
  const hora = new Date();
  document.getElementById("horita").innerHTML = hora.toLocaleTimeString();
}

    fetch(listadoProductos)
    .then(respuesta => respuesta.json())
    .then(datos => {
datos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("col-xl-3", "col-md-6", "col-sm-12");
    div.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">
    <div class="card-body">
      <p class="card-title">${producto.nombre}</p>
      <p class="card-text">Precio: ${producto.precio}</p>
      <button class="btn btn-dark" id="boton${producto.id}">Agregar al carrito</button>
    </div>
  </div>`

contenedorProductos.appendChild(div);
    

const boton = document.getElementById(`boton${producto.id}`);
boton.addEventListener("click", () => {
   
    Toastify({
        text: "Añadido al carrito",
        duration: 3000,
        style:{
            background: "linear-gradient(to right, #FF96D1, #FEC299)"
        }


        }).showToast();
    comprar(producto.id); })

})
}) 

const comprar =(id) =>{
    const enCarrito = carroDeCompras.find(producto => producto.id === id);
    if(enCarrito) {
        enCarrito.cantidad++;

    }else{
        const producto = arrayProductos.find(producto => producto.id ===id);
        carroDeCompras.push(producto);
    }

    calcularTotal()

    localStorage.setItem("carritoCompras", JSON.stringify(carroDeCompras));

}

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carroDeCompras.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
        
    })
    total.innerHTML = `$${totalCompra}`;
}


let formulario = document.getElementById("terminarCompra");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();


    localStorage.setItem("formulario", JSON.stringify(terminarCompra))

    localStorage.clear();

}

const botonFinal = document.getElementById("botonFinal");
botonFinal.addEventListener("click", () => {
    Swal.fire({
        title: "Gracias por cotizar",
        text: "En el emporio",
        icon: "sucess",
        imageUrl: "https://placekitten.com/200/286",
        confirmButtonText: "bai",


    });
})


///Agregar vaciar carrito ! con el codigo de quitar fideos

