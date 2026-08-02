document.getElementById("saveNote").addEventListener("click", function () {

    const note = document.getElementById("nursingNote").value;

    if (note === "") {

        alert("Please enter a nursing note.");
        return;

    }

    const selectedPatient = localStorage.getItem("selectedPatient");

    if (selectedPatient === null) {

        alert("No patient selected.");
        return;

    }

    let notes = JSON.parse(localStorage.getItem("nursingNotes")) || [];

    notes.push({

        patientIndex: selectedPatient,

        note: note,

        date: new Date().toLocaleString()

    });

    localStorage.setItem("nursingNotes", JSON.stringify(notes));

    alert("Nursing note saved successfully!");

    document.getElementById("nursingNote").value = "";

});