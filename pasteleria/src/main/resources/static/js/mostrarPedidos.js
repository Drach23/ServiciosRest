// Define la URL para la solicitud HTTP
let url = "http://localhost:8080/compra";

// Realiza la solicitud HTTP a la URL usando fetch y convierte la respuesta en un objeto JSON
fetch(url)
    .then(response => response.json())

    // Una vez que se han obtenido los datos, se agrega cada objeto de datos a una fila en una tabla HTML
    .then(data => {
            console.log(data);
            let tableBody = document.getElementById("pedidoTableBody");

            data.forEach(compra => {
                    let row = document.createElement("tr");
                    let idCelda = document.createElement("td");
                    let nombreCelda = document.createElement("td");
                    let telefonoCelda = document.createElement("td");
                    let emailCelda = document.createElement("td");
                    let tipoPastelCelda = document.createElement("td");
                    let costoPastelCelda = document.createElement("td");

                    idCelda.setAttribute("data-field", "id");
                    nombreCelda.setAttribute("data-field", "nombre");
                    telefonoCelda.setAttribute("data-field", "telefono");
                    emailCelda.setAttribute("data-field", "email");
                    tipoPastelCelda.setAttribute("data-field", "tipoPastel");
                    costoPastelCelda.setAttribute("data-field", "costoPastel");

                    // Asigna los valores de los datos a las celdas de la fila
                    idCelda.innerHTML = compra.id;
                    nombreCelda.innerHTML = compra.nombre;
                    telefonoCelda.innerHTML = compra.telefono;
                    emailCelda.innerHTML = compra.email;
                    tipoPastelCelda.innerHTML = compra.tipoPastel;
                    costoPastelCelda.innerHTML = compra.costoPastel;

                    // Agrega las celdas a la fila
                    row.appendChild(idCelda);
                    row.appendChild(nombreCelda);
                    row.appendChild(telefonoCelda);
                    row.appendChild(emailCelda);
                    row.appendChild(tipoPastelCelda);
                    row.appendChild(costoPastelCelda)


                    // Agrega la fila a la tabla
                    tableBody.appendChild(row);
            });

            // Imprime los datos en la consola para verificar que se obtuvieron correctamente
            console.log(data);
    })

    // Maneja errores en caso de que la solicitud HTTP no se pueda completar correctamente
    .catch(error => {
            console.error("Se produjo el siguiente error: ", error);
    });
