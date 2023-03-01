
class Producto {
    constructor(id, nombre, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cantidad = 1;
    }
}

const cafeCuba = new Producto (1, "Cuba", 9000, "img/café-cuba.webp");
const cafeEtiopia = new Producto (2, "Etiopia", 8000, "img/café-etiopia.webp");
const cafeColombia = new Producto (3, "Colombia", 7000, "img/café-colombia.webp");
const cafePeru = new Producto (4, "Perú", 8990, "img/café-peru.webp");
const cafeGuatemala = new Producto(5, "Guatemala", 7500, "img/café-guatemala.webp");
const cafeIndonesia = new Producto(6, "Indonesia", 10500, "img/café-indonesia.webp");
const cafePanama = new Producto(7, "Panamá", 8900, "img/café-panamá.webp");
const cafePapua= new Producto(8, "Papua Nueva Guinea", 12000, "img/café-papua.webp");

const arrayProductos = [cafeCuba, cafeEtiopia, cafeColombia, cafePeru, cafeGuatemala, cafeIndonesia, cafePanama, cafePapua];

let carroDeCompras = [];


if(localStorage.getItem("carritoCompras")){
    carroDeCompras = JSON.parse(localStorage.getItem("carritoCompras"))
}


const contenedorProductos = document.getElementById("contenedorProductos");

const mostrarProductos = () => {
arrayProductos.forEach(producto => {
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
    comprar(producto.id);
})


})
}

mostrarProductos ()


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


let formulario = document.getElementById("terminarCompra").reset;
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();


    localStorage.setItem("formulario", JSON.stringify(terminarCompra))

    localStorage.clear();

}


