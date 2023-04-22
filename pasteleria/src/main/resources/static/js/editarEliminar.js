function editarPedido() {
    //parseInt cambia el valor de string a entero
    let id = parseInt(document.getElementById("inputId").value);
    let editarId = document.getElementById("editarId");
    let inputNombreEditar = document.getElementById("inputNombreEditar");
    let inputTelefonoEditar = document.getElementById("inputTelefonoEditar");
    let inputEmailEditar = document.getElementById("inputEmailEditar");
    let selectorPastelEditar = document.getElementById("selectorPastelEditar");
    let costoPastelEditar = document.getElementById("costoPastelEditar");
    const url = "http://localhost:8080/compra/"+id;
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            editarId.value = parseInt(id);//parseInt para cambiar el valor de string a entero
            inputNombreEditar.value = data.nombre;
            inputTelefonoEditar.value = data.telefono;
            inputEmailEditar.value = data.email;
            selectorPastelEditar.value = data.tipoPastel;
            costoPastelEditar.value = data.costoPastel;
        })
        .catch(error => {
            console.error("Hubo un error: ", error);
            alert("hubo un error al buscar");
            limpiar();
        });
}

function guardarPedido(){
    let idEditado = document.getElementById("editarId").value;
    const url = "http://localhost:8080/compra/"+idEditado;

    let inputNombreEditar = document.getElementById("inputNombreEditar");
    let inputTelefonoEditar = document.getElementById("inputTelefonoEditar");
    let inputEmailEditar = document.getElementById("inputEmailEditar");
    let selectorPastelEditar = document.getElementById("selectorPastelEditar");
    let costoPastelEditar = document.getElementById("costoPastelEditar");

    let id = parseInt(idEditado);
    let nombre = inputNombreEditar.value;
    let telefono = parseInt(inputTelefonoEditar.value);
    let email = inputEmailEditar.value;
    let selector = selectorPastelEditar.value;
    let costo = costoPastelEditar.value;

    const data = {
        id: id,
        nombre: nombre,
        telefono: telefono,
        email: email,
        tipoPastel: selector,
        costoPastel: costo
    };
    console.log(data);

    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert("El pedido se modificó exitosamente.");
        })
        .catch(error => {
            console.error("Hubo un error: ", error);
            alert("hubo un error al modificar");
            limpiar();
        });
}

// Funcion para Borrar pedido
function eliminarPedido() {
    let idPedido = parseInt(document.getElementById("editarId").value);
    const url = "http://localhost:8080/compra/" + idPedido;
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                console.log("Eliminado con exito");
                alert("Eliminado con exito");
                limpiar();
            } else {
                throw new Error("error al eliminar");
                alert("Hubo un error al eliminar");
                limpiar();
            }
        })
        .catch(error => {
            console.error(error);
        });
}

function limpiar()
{
    let nombre = document.getElementById("inputNombreEditar");
    let telefono = document.getElementById("inputTelefonoEditar");
    let email = document.getElementById("inputEmailEditar");
    let tipoPastel = document.getElementById("selectorPastelEditar");
    let costoPastel = document.getElementById("costoPastelEditar");

    nombre.value = "";
    email.value = "";
    telefono.value = "";
    tipoPastel.value = "";
    costoPastel.value = "";
}

