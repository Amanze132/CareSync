function saveDoctorOrder() {

    const doctorOrder = {
        date: document.getElementById("orderDate").value,
        doctor: document.getElementById("doctorName").value,
        department: document.getElementById("department").value,
        type: document.getElementById("orderType").value,
        order: document.getElementById("orderDetails").value,
        priority: document.getElementById("priority").value,
        status: document.getElementById("status").value
    };

    localStorage.setItem("doctorOrder", JSON.stringify(doctorOrder));

    displayDoctorOrder();

    alert("Doctor order saved successfully!");
}

function displayDoctorOrder() {

    const doctorOrder = JSON.parse(localStorage.getItem("doctorOrder"));

    if (!doctorOrder) return;

    document.getElementById("displayDate").textContent = doctorOrder.date;
    document.getElementById("displayDoctor").textContent = doctorOrder.doctor;
    document.getElementById("displayDepartment").textContent = doctorOrder.department;
    document.getElementById("displayType").textContent = doctorOrder.type;
    document.getElementById("displayOrder").textContent = doctorOrder.order;
    document.getElementById("displayPriority").textContent = doctorOrder.priority;
    document.getElementById("displayStatus").textContent = doctorOrder.status;
}

displayDoctorOrder();