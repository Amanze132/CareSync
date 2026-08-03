const patients = JSON.parse(localStorage.getItem("patients")) || [];

const index = localStorage.getItem("selectedPatient");

const patient = patients[index];

if (patient) {

    document.getElementById("patientId").innerHTML =
        "MZH-2026-" + String(Number(index) + 1).padStart(5, "0");

    document.getElementById("patientName").innerHTML =
        patient.firstName + " " + patient.lastName;

    document.getElementById("patientGender").innerHTML =
        patient.gender;

    document.getElementById("patientDob").innerHTML =
        patient.dob;

    document.getElementById("patientPhone").innerHTML =
        patient.phone;

    document.getElementById("patientAddress").innerHTML =
        patient.address;

}
const vitalRecords = JSON.parse(localStorage.getItem("vitalRecords")) || [];

const patientVitals = vitalRecords.filter(function(vital) {
    return vital.patientIndex == index;
});

if (patientVitals.length > 0) {

    const latestVital = patientVitals[patientVitals.length - 1];

    document.getElementById("latestTemperature").innerHTML = latestVital.temperature;
    document.getElementById("latestPulse").innerHTML = latestVital.pulse;
    document.getElementById("latestRespiration").innerHTML = latestVital.respiration;
    document.getElementById("latestBP").innerHTML = latestVital.bloodPressure;
    document.getElementById("latestSpo2").innerHTML = latestVital.spo2;
    document.getElementById("latestWeight").innerHTML = latestVital.weight;
    document.getElementById("latestHeight").innerHTML = latestVital.height;

}
const nursingNotes = JSON.parse(localStorage.getItem("nursingNotes")) || [];

const patientNotes = nursingNotes.filter(function(note) {
    return note.patientIndex == index;
});

if (patientNotes.length > 0) {

    const latestNote = patientNotes[patientNotes.length - 1];

    document.getElementById("latestNursingNote").innerHTML =
        latestNote.note;

}
const medications = JSON.parse(localStorage.getItem("medications")) || [];

const patientMedications = medications.filter(function(medication) {
    return medication.patientIndex == index;
});

if (patientMedications.length > 0) {

    const latestMedication = patientMedications[patientMedications.length - 1];

    document.getElementById("latestDrug").innerHTML =
        latestMedication.drugName;

    document.getElementById("latestDose").innerHTML =
        latestMedication.dose;

    document.getElementById("latestRoute").innerHTML =
        latestMedication.route;

    document.getElementById("latestTime").innerHTML =
        latestMedication.timeGiven;

    document.getElementById("latestRemarks").innerHTML =
        latestMedication.remarks;

}
const laboratoryRecords = JSON.parse(localStorage.getItem("laboratoryRecords")) || [];

const patientLabResults = laboratoryRecords.filter(function(record) {
    return record.patientIndex == index;
});

if (patientLabResults.length > 0) {

    const latestLab = patientLabResults[patientLabResults.length - 1];

    document.getElementById("latestTest").innerHTML =
        latestLab.testName;

    document.getElementById("latestResult").innerHTML =
        latestLab.testResult;

    document.getElementById("latestReference").innerHTML =
        latestLab.referenceRange;

    document.getElementById("latestLabRemarks").innerHTML =
        latestLab.labRemarks;

}