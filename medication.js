document.getElementById("saveMedication").addEventListener("click", function () {

    const drugName = document.getElementById("drugName").value;
    const dose = document.getElementById("dose").value;
    const route = document.getElementById("route").value;
    const timeGiven = document.getElementById("timeGiven").value;
    const remarks = document.getElementById("remarks").value;

    if (
        drugName === "" ||
        dose === "" ||
        route === "" ||
        timeGiven === ""
    ) {
        alert("Please complete all medication details.");
        return;
    }

    const selectedPatient = localStorage.getItem("selectedPatient");

    if (selectedPatient === null) {
        alert("No patient selected.");
        return;
    }

    const medication = {
        patientIndex: selectedPatient,
        drugName,
        dose,
        route,
        timeGiven,
        remarks,
        date: new Date().toLocaleString()
    };

    let medications =
        JSON.parse(localStorage.getItem("medications")) || [];

    medications.push(medication);

    localStorage.setItem(
        "medications",
        JSON.stringify(medications)
    );

    alert("Medication recorded successfully!");

});