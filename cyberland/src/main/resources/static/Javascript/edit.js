function editDate() {
    let id = parseInt(document.getElementById("idSearch").value);
    let idEdit = document.getElementById("idEdit");
    let inputNameEdit = document.getElementById("inputNameEdit");
    let inputPhoneEdit = document.getElementById("inputPhoneEdit");
    let inputEmailEdit = document.getElementById("inputEmailEdit");
    let selectServiceEdit = document.getElementById("selectServiceEdit");
    let inputDateEdit = document.getElementById("inputDateEdit");
    let selectScheduleEdit = document.getElementById("selectScheduleEdit");
    const url = "http://localhost:8080/date/"+id;
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            idEdit.value = parseInt(id);
            inputNameEdit.value = data.name;
            inputPhoneEdit.value = data.phone;
            inputEmailEdit.value = data.email;
            selectServiceEdit.value = data.service;
            inputDateEdit.value = data.date;
            selectScheduleEdit.value = data.schedule;
        })
        .catch(error => {
            console.error("Hubo un error: ", error);
        });


}

function saveDate(){
    let idEdit = document.getElementById("idEdit").value;
    const url = "http://localhost:8080/date/"+idEdit;

    let inputNameEdit = document.getElementById("inputNameEdit");
    let inputPhoneEdit = document.getElementById("inputPhoneEdit");
    let inputEmailEdit = document.getElementById("inputEmailEdit");
    let selectServiceEdit = document.getElementById("selectServiceEdit");
    let inputDateEdit = document.getElementById("inputDateEdit");
    let selectScheduleEdit = document.getElementById("selectScheduleEdit");

    let id = parseInt(idEdit);
    let name = inputNameEdit.value;
    let phone = parseInt(inputPhoneEdit.value);
    let email = inputEmailEdit.value;
    let service = selectServiceEdit.value;
    let date = inputDateEdit.value;
    let schedule = selectScheduleEdit.value;

    const data = {
        id: id,
        name: name,
        phone: phone,
        email: email,
        service: service,
        date: date,
        schedule: schedule
    };
    console.log(data);

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                console.log("Cita actualizada con éxito");
                alert("cita registrada con exito");
            } else {
                throw new Error("Error al actualizar la cita");
            }
        })
        .catch(error => {
            console.error(error);
        });
}