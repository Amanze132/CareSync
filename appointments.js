document.getElementById("saveAppointment").addEventListener("click", function () {

    const appointmentDate = document.getElementById("appointmentDate").value;
    const appointmentTime = document.getElementById("appointmentTime").value;
    const providerName = document.getElementById("providerName").value;
    const appointmentReason = document.getElementById("appointmentReason").value;

    if (
        appointmentDate === "" ||
        appointmentTime === "" ||
        providerName === "" ||
        appointmentReason === ""
    ) {
        alert("Please complete all appointment details.");
        return;
    }

    const selectedPatient = localStorage.getItem("selectedPatient");

    if (selectedPatient === null) {
        alert("No patient selected.");
        return;
    }

    const appointment = {
        patientIndex: selectedPatient,
        appointmentDate,
        appointmentTime,
        providerName,
        appointmentReason,
        dateCreated: new Date().toLocaleString()
    };

    let appointments =
        JSON.parse(localStorage.getItem("appointments")) || [];

    appointments.push(appointment);

    localStorage.setItem(
        "appointments",
        JSON.stringify(appointments)
    );

    alert("Appointment saved successfully!");

});