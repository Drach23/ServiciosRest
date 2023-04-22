function dateRegister() {
    let name = document.getElementById("inputName").value;
    let phone = document.getElementById("inputPhone").value;
    let email = document.getElementById("inputEmail").value;
    let service = document.getElementById("selectService").value;
    let date = document.getElementById("inputDate").value;
    let schedule = document.getElementById("selectSchedule").value;
    //validaciones
    if (name === "") {
        alert("Por favor ingresa un nombre válido");
        document.getElementById("inputName").focus();
        return;
    }

    if (phone === "" || isNaN(phone)) {
        alert("Por favor ingresa un número de teléfono válido");
        document.getElementById("inputPhone").focus();
        return;
    }

    if (email === "" || !email.includes("@")) {
        alert("Por favor ingresa un correo electrónico válido");
        document.getElementById("inputEmail").focus();
        return;
    }

    if (service === "disabled") {
        alert("Por favor selecciona un tipo de cita");
        document.getElementById("SelectService").focus();
        return;
    }

    if (date === "" || new Date(date) < new Date()) {
        alert("Por favor ingresa una fecha válida");
        document.getElementById("inputDate").focus();
        return;
    }

    if (schedule === "disabled") {
        alert("Por favor selecciona un horario");
        document.getElementById("inputSchedule").focus();
        return;
    }

    //llamada de la funcion post para enviar el form
    let url = "http://localhost:8080/date";

    postData(url, {name: name, phone: phone, email: email, service: service, date: date, schedule: schedule}).then(
        data => {
            console.log(data);
            alert("cita Registrada con exito");
            clean();
        }
    ).catch(error => {
            console.error(error);
        }
    );
    resetForm();
}
//implementacion de la funcion del post para envio
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

//funcion para borrar el form
function resetForm() {
    document.getElementById("form").reset();
}

//funcion para limpiar consola:
function clean()
{
    let name = document.getElementById("inputName");
    let phone = document.getElementById("inputPhone");
    let email = document.getElementById("inputEmail");
    let service = document.getElementById("selectService");
    let date = document.getElementById("inputDate");
    let schedule = document.getElementById("selectSchedule");

    name.value = "";
    email.value = "";
    phone.value = "";
    service.value = "";
    date.value = "";
    schedule.value = "";
}



