
let url = "http://localhost:8080/date"; //declaramos una variable con el URL de la pagina
fetch(url)
    .then(response => response.json()) //con fetch llamamos la url y
    // luego obtenemos todos los elementos como JSON

    .then(data => {//Luego de la respuesta convertida en JSON le asignamos el nombre data
        // la cual hace lo siguiente:

        console.log(data);
        let tableBody = document.getElementById("dateTableBody"); //declaramos el cuerpo de la tabla
        data.forEach( //se itera cada elemento de nuestro data
            function (date) {// se itera usuario.
                let row = document.createElement("tr"); //Creamos la fila
                let idCell = document.createElement("td");//Creamos los elementos (Celdas)
                let nameCell = document.createElement("td");
                let phoneCell = document.createElement("td");
                let emailCell = document.createElement("td");
                let serviceCell = document.createElement("td");
                let dateCell = document.createElement("td");
                let scheduleCell = document.createElement("td");
                let deleteCell = document.createElement("td");
                let editCell = document.createElement("td");
                let deleteButton = document.createElement("button");
                let editButton = document.createElement("button");

                idCell.setAttribute("data-field", "id");
                nameCell.setAttribute("data-field", "nombre");
                phoneCell.setAttribute("data-field", "telefono");
                emailCell.setAttribute("data-field", "email");
                serviceCell.setAttribute("data-field", "servicio");
                dateCell.setAttribute("data-field", "fecha");
                scheduleCell.setAttribute("data-field", "horario");
                deleteButton.setAttribute('data-id', '{{date.id}}');


                idCell.innerHTML = date.id; //Asignamos valores a las celdas
                nameCell.innerHTML = date.name;
                phoneCell.innerHTML = date.phone;
                emailCell.innerHTML = date.email;
                serviceCell.innerHTML = date.service;
                dateCell.innerHTML = date.date;
                scheduleCell.innerHTML = date.schedule;
                //botones para editar
                editButton.textContent ="Editar";
                editButton.dataset.dateId = date.id;
                editButton.classList.add('edit-button');
                editButton.innerHTML = "<i class=\"fa fa-pencil\"></i>"

                console.log(idCell);
                //botones para borrar
                deleteButton.textContent = "Borrar";
                deleteButton.dataset.dateId = date.id;
                deleteButton.classList.add('delete-button');
                deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
                deleteButton.addEventListener("click", Delete())

                editCell.appendChild(editButton);
                deleteCell.appendChild(deleteButton);



                row.appendChild(idCell);//Agregamos los valores a la fila
                row.appendChild(nameCell);
                row.appendChild(phoneCell);
                row.appendChild(emailCell);
                row.appendChild(dateCell);
                row.appendChild(scheduleCell);
                row.appendChild(serviceCell);//Agregamos los valores a la fila
                row.appendChild(editCell);
                row.appendChild(deleteCell);

                tableBody.appendChild(row); //Agregamos la fila al cuerpo de la tabla
            }
        );
        console.log(data); //Impresion en consola para verificar que los datos traidos estan bien y completos
    }).catch(error => {
    console.error("Tuvimos el error siguiente: ", error);
})

//seccion para funcion de busqueda
// función de búsqueda
function search() {
    const searchInput = document.getElementById("searchInput");
    const searchField = document.getElementById("searchField");
    const searchText = searchInput.value.toLowerCase();
    const searchCategory = searchField.value;
    const tableRows = document.querySelectorAll("#dateTable tbody tr");

    tableRows.forEach(function(row) {
        if (searchCategory === "id") {
            const cellText = row.querySelector(`td[data-field="${searchCategory}"]`).textContent;

            if (cellText === searchText) {
                row.style.display = "table-row";
            } else {
                row.style.display = "none";
            }
        } else {
            const cellText = row.querySelector(`td[data-field="${searchCategory}"]`).textContent.toLowerCase();

            if (cellText.includes(searchText)) {
                row.style.display = "table-row";
            } else {
                row.style.display = "none";
            }
        }
    });
}

const searchInput = document.getElementById("searchInput");
const searchField = document.getElementById("searchField");

searchInput.addEventListener("input", function() {
    search();
});

searchField.addEventListener("change", function() {
    search();
});

//funcion del boton delete:
function Delete() {
    // Agrega un evento click al botón "Borrar" de cada fila de la tabla
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', function () {
            // Obtiene el id del registro a eliminar del atributo personalizado "data-id" del botón "Borrar"
            const id = parseInt(this.dataset.dateId); // convierte el id a un número entero
            console.log(id);
            // Envía una petición de eliminación al servidor utilizando la API Fetch
            fetch(`/date/${id}`, {
                method: 'DELETE'
            }).then(() => {
                // Elimina la fila correspondiente de la tabla
                this.closest('tr').remove();
            }).catch(error => {
                console.error("Tuvimos el error siguiente: ", error);
            });
        });
    });
}
