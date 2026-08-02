document.getElementById("saveOrganization").addEventListener("click", function () {

    const orgName = document.getElementById("orgName").value;
    const hospitalType = document.getElementById("hospitalType").value;
    const country = document.getElementById("country").value;
    const state = document.getElementById("state").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (
        orgName === "" ||
        hospitalType === "" ||
        country === "" ||
        state === "" ||
        address === "" ||
        email === "" ||
        phone === ""
    ) {
        alert("Please complete all organization details.");
        return;
    }

    alert("Organization registered successfully!");
});