document.getElementById("savePatient").addEventListener("click", function () {

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    if (
        firstName === "" ||
        lastName === "" ||
        dob === "" ||
        gender === "Select Gender" ||
        phone === "" ||
        address === ""
    ) {
        alert("Please complete all fields.");
        return;
    }

    const patient = {
        firstName,
        lastName,
        dob,
        gender,
        phone,
        address
    };

    let patients = JSON.parse(localStorage.getItem("patients")) || [];

    patients.push(patient);

    localStorage.setItem("patients", JSON.stringify(patients));

    alert("Patient registered successfully!");

});