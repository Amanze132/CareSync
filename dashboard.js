const user = JSON.parse(localStorage.getItem("loggedInStaff"));

if (user) {

    document.getElementById("welcomeName").innerHTML =
        "Welcome, " + user.staffName;

    document.getElementById("staffRole").innerHTML =
        "Role: " + user.staffRole;

    document.getElementById("staffDepartment").innerHTML =
        "Department: " + user.department;

}