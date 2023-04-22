






function registro() {
    //Asignamos primero una nueva variable llamada url la cual le asignamos localhost de nuestro servidor
    //adicional la parte requestmapping creada en UsuarioController "/compra"
    let url = "http://localhost:8080/compra";
    //preparacion de los datos para el envio
    let nombre = document.getElementById("inputNombre").value;
    let telefono = document.getElementById("inputTelefono").value;
    let email = document.getElementById("inputEmail").value;
    let tipoPastel = document.getElementById("selectorPastel").value;
    let costoPastel = document.getElementById("costoPastel").value;
    postData(url, {nombre: nombre, telefono: telefono, email: email, tipoPastel: tipoPastel, costoPastel: costoPastel}).then(
        data => {
            console.log(data);
            alert("Pedido Asignado con exito");
            limpiar();
        }
    ).catch(error => {
            console.error(error);
        }
    );
}

//Funcion para el envio de los datos preparados anteriormente
async function postData(url, data) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    });
    return response.json();
}



//funcion para limpiar consola:
function limpiar()
{
    let nombre = document.getElementById("inputNombre");
    let telefono = document.getElementById("inputTelefono");
    let email = document.getElementById("inputEmail");
    let tipoPastel = document.getElementById("selectorPastel");
    let costoPastel = document.getElementById("costoPastel");

    nombre.value = "";
    email.value = "";
    telefono.value = "";
    tipoPastel.value = "";
    costoPastel.value = "";
}


