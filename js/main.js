// const notebook = 10000
// const marcas = ["hp", "dell", "lenovo"]
// const hp = {
//     valor: 35000
// }
// const dell = {
//     valor: 39000
// }
// const lenovo = {
//     valor: 42000
// }
// const errores = ["hardware", "software"]
// const hardware = 10000
// const software = 15000

// const conGarantia = 0
// const sinGarantia = 10000


// let nombreUsuario = prompt("Ingrese su nombre")
// let email = prompt("Ingrese su direccion de correo electronico")
// let id = parseInt(prompt("Ingrese su id de empleado"))
// console.log(nombreUsuario, email, id)
// alert("Bienvenido al sistema de tickets "+nombreUsuario+" \n Correo:"+email+" \n Empleado N°"+id)
    
// let continuar = true
// while (continuar !==4){
//     let menu = parseInt(prompt("Ingrese: \n 1 - Para realizar una cotizacion por reparación \n 2 - Para consultar el estado de un reparación iniciada \n 3 - Para hablar con un técnico \n Otra tecla para salir"))
//     switch(menu){
//         case 1:
//             let tipoEquipo = parseInt(prompt("Que tipo de equipo tiene? \n 1 - Equipo de escritorio \n 2 - Notebook"))
//             if (tipoEquipo == 1) {  
//                 function sumaPc() {                  
//                 let antiguedadPc = parseInt(prompt("Hace cuantos años posee el equipo?"))
//                 let errorPc = parseInt(prompt("El tipo de error es de Hardware o Software? \n 1 - Hardware \n 2 - Software"))        
//                     if (antiguedadPc >= 3) {
//                         estadoGarantia = 0
//                     } else {
//                         estadoGarantia = 15000
//                     }
//                     if (errorPc == 1) {
//                         tipoError = 10000
//                     } else if (errorPc == 2) {
//                         tipoError = 15000
//                     }
//                     let cotizacionPc = estadoGarantia + tipoError
//                     return alert("La cotización para la reparación de su Equipo de escritorio, con una antigüedad de "+antiguedadPc+" año/s, y error de "+errorPc+" es de: $"+cotizacionPc)                  
//                 }
//                 sumaPc()
                        
                
//             }                   
//             else if (tipoEquipo = 2) {
//                 function sumaNb(){
//                 let antiguedadNb = parseInt(prompt("Hace cuantos años posee el equipo?"))
//                 let errorNb = parseInt(prompt("El tipo de error es de Hardware o Software? \n 1- Hardware \n 2 -Software"))
//                 let marcaNb = parseInt(prompt("Que marca es su equipo? \n 1 - HP \n 2- Dell \n 3 - Lenovo"))            
//                     if (antiguedadNb >= 3) {
//                         estadoGarantia = 0
//                     } else {
//                         estadoGarantia = 15000
//                     }
//                     if (errorNb == 1) {
//                         tipoError = 25000
//                     } else if (errorNb == 2) {
//                         tipoError = 20000
//                     }
//                     if (marcaNb == 1){
//                         marcaEquipo = 35000
//                     } else if (marcaNb == 2){
//                         marcaEquipo = 39000
//                     } else if (marcaNb == 3){
//                         marcaEquipo = 42000
//                     }
//                     let cotizacionNb = estadoGarantia + tipoError + marcaEquipo
//                     return alert("La cotización para la reparación de su Notebook marca "+marcaNb+", con una antigüedad de "+antiguedadNb+" año/s, y error de "+errorNb+" es de: $"+cotizacionNb)
//                 }
//                 sumaNb()       
//             }                 
//             break

//         case 2:
//             let ticketNro = parseInt(prompt("Ingrese el número de ticket que abrió con anterioridad"))
//             function chequeoNroticket(){
//                 if (ticketNro <= 1000){
//                     return alert("Un técnico se contactará a la brevedad al correo proporcionado")
//                 } else {
//                     return prompt("El número de ticket ingresado no se corresponde con nuestra base de datos")
//                 }
//             }
//             chequeoNroticket()
            
//             break
//         case 3:
//             alert("Un técnico se contactará a la brevedad al correo proporcionado")
//             break

//         default:
//             alert("Volverá al Menú principal")
//             break
//     }

//     let confirmar = prompt("Otra consulta? (SI/NO)").toLowerCase()
//     if(confirmar == "no") {
//         continuar = false
//         alert("Saludos")
//     }
// } 


//---------------------------------------------------------------------------


const vinos = [
    {
        id: 1,
        nombre: "El enemigo",
        variedad: "Malbec",
        precio: 18625
    },
    {
        id: 2,
        nombre: "DV Catena",
        variedad: "Malbec",
        precio: 17375
    },
    {
        id: 3,
        nombre: "Angelica Zapata",
        variedad: "Cabernet Sauvignon",
        precio: 21125
    },
    {
        id: 4,
        nombre: "Saint Felicien",
        variedad: "Malbec",
        precio: 8250
    },
    {
        id: 5,
        nombre: "Barda",
        variedad: "Pinot Noir",
        precio: 43750
    },
]

let cartVinos = []

let vinosContainer = document.getElementById("vinos-container")

function renderVinos(vinosArray){
    vinosArray.forEach(vino => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${vino.nombre}</h3>
                          <h4>Variedad:${vino.variedad}</h4>
                          <h4>Precio:$${vino.precio}</h4>
                          <button class="vinoAgregar" id="${vino.id}">Agregar</button>`
        vinosContainer.appendChild(card)
    }
    )
    addToCartButton()
}
renderVinos(vinos)

function addToCartButton () {
    addButton = document.querySelectorAll(".vinoAgregar")
    addButton.forEach(button =>{
        button.onclick = (e) => {
            const vinoId = e.currentTarget.id
            const selectedVino = vinos.find(vino => vino.id == vinoId)
            cartVinos.push(selectedVino)
            console.log(cartVinos)

            localStorage.setItem("cartVinos",JSON.stringify(cartVinos))
        }
    }
    )
}
