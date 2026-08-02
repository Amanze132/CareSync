document.getElementById("saveStaff").addEventListener("click", function () {

    const staffName = document.getElementById("staffName").value;
    const staffEmail = document.getElementById("staffEmail").value;
    const staffPhone = document.getElementById("staffPhone").value;
    const staffRole = document.getElementById("staffRole").value;
    const department = document.getElementById("department").value;
    const password = document.getElementById("password").value;

    if (
        staffName === "" ||
        staffEmail === "" ||
        staffPhone === "" ||
        staffRole === "" ||
        department === "" ||
        password === ""
    ) {
        alert("Please complete all staff details.");
        return;
    }

    let staff = JSON.parse(localStorage.getItem("staff")) || [];

    staff.push({
        staffName,
        staffEmail,
        staffPhone,
        staffRole,
        department,
        password
    });

    localStorage.setItem("staff", JSON.stringify(staff));

    alert("Staff registered successfully!");

});