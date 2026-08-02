const patients = JSON.parse(localStorage.getItem("patients")) || [];

const table = document.getElementById("patientsTable");

function openProfile(index) {
    localStorage.setItem("selectedPatient", index);
    window.location.href = "patient-profile.html";
}

function displayPatients(patientList) {

    table.innerHTML = "";

    const header = document.createElement("tr");

    header.innerHTML = `
        <th>Patient ID</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Profile</th>
    `;

    table.appendChild(header);

    patientList.forEach((patient, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>MZH-2026-${String(index + 1).padStart(5, "0")}</td>
            <td>${patient.firstName} ${patient.lastName}</td>
            <td>${patient.gender}</td>
            <td><button onclick="openProfile(${index})">View Profile</button></td>
        `;

        table.appendChild(row);

    });

}

displayPatients(patients);

const searchBox = document.getElementById("searchPatient");

searchBox.addEventListener("keyup", function () {

    const search = this.value.toLowerCase();

    const filteredPatients = patients.filter(function(patient) {

        return (
            patient.firstName + " " + patient.lastName
        ).toLowerCase().includes(search);

    });

    displayPatients(filteredPatients);

});