document.getElementById("saveLab").addEventListener("click", function () {

    const testName = document.getElementById("testName").value;
    const testResult = document.getElementById("testResult").value;
    const referenceRange = document.getElementById("referenceRange").value;
    const labRemarks = document.getElementById("labRemarks").value;

    if (
        testName === "" ||
        testResult === "" ||
        referenceRange === ""
    ) {
        alert("Please complete all laboratory details.");
        return;
    }

    const selectedPatient = localStorage.getItem("selectedPatient");

    if (selectedPatient === null) {
        alert("No patient selected.");
        return;
    }

    const laboratoryResult = {
        patientIndex: selectedPatient,
        testName,
        testResult,
        referenceRange,
        labRemarks,
        date: new Date().toLocaleString()
    };

    let laboratoryRecords =
        JSON.parse(localStorage.getItem("laboratoryRecords")) || [];

    laboratoryRecords.push(laboratoryResult);

    localStorage.setItem(
        "laboratoryRecords",
        JSON.stringify(laboratoryRecords)
    );

    alert("Laboratory result saved successfully!");

});