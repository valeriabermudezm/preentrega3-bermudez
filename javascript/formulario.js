// boton de enviar o guardar formulario//
let boton = document.getElementById ("enviar1")

boton.addEventListener("click", funcionClick)

function funcionClick () { 
    //Array para cada cliente, alamcenamiento de datos//
    class Cliente {
        constructor (nombre, correo, texto){
        this.nombre = nombre;
        this.correo = correo;
        this.texto = texto;
        }
    }
    const cliente = []
    
    let nuevoCliente = 0 

    while (nuevoCliente < 1){
        let pregunta = new Cliente(document.getElementById ("nombre1"),
                                    document.getElementById ("correo1"),
                                    document.getElementById ("texto1"))

        //local storage donde la key es el correo y el valor el nombre de la persona//
        cliente.push(pregunta)
        localStorage.setItem(document.getElementById("correo1"), document.getElementById("nombre1"))
        console.log(cliente)
        nuevoCliente++
    }
    alert("Nos comunicaremos contigo lo más pronto posible")
}