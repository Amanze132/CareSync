document.querySelector("button").addEventListener("click", function () {

    const organization = document.getElementById("organization").value;
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (
        organization === "Select Organization" ||
        email === "" ||
        password === ""
    ) {
        alert("Please complete all fields.");
    } else {
        window.location.href = "dashboard.html";
    }

});