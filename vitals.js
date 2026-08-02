document.getElementById("saveVitals").addEventListener("click", function () {

    const temperature = document.getElementById("temperature").value;
    const pulse = document.getElementById("pulse").value;
    const respiration = document.getElementById("respiration").value;
    const bloodPressure = document.getElementById("bloodPressure").value;
    const spo2 = document.getElementById("spo2").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    if (
        temperature === "" ||
        pulse === "" ||
        respiration === "" ||
        bloodPressure === "" ||
        spo2 === "" ||
        weight === "" ||
        height === ""
    ) {
        alert("Please complete all vital signs.");
        return;
    }

    const selectedPatient = localStorage.getItem("selectedPatient");

    if (selectedPatient === null) {
        alert("No patient selected.");
        return;
    }

    const vitals = {
        patientIndex: selectedPatient,
        temperature,
        pulse,
        respiration,
        bloodPressure,
        spo2,
        weight,
        height,
        date: new Date().toLocaleString()
    };

    let vitalRecords =
        JSON.parse(localStorage.getItem("vitalRecords")) || [];

    vitalRecords.push(vitals);

    localStorage.setItem(
        "vitalRecords",
        JSON.stringify(vitalRecords)
    );

    alert("Vital signs saved successfully!");

});