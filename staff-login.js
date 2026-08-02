document.getElementById("loginButton").addEventListener("click", function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let staff = JSON.parse(localStorage.getItem("staff")) || [];

    const user = staff.find(s =>
        s.staffEmail === email &&
        s.password === password
    );

    if (!user) {
        alert("Invalid email or password.");
        return;
    }

    localStorage.setItem("loggedInStaff", JSON.stringify(user));

    alert("Welcome " + user.staffName + "!");

    window.location.href = "dashboard.html";

});