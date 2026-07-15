document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var studentId = document.getElementById("studentId").value.trim();
    var email = document.getElementById("email").value.trim();
    var credit = document.getElementById("credit").value;
    var department = document.getElementById("department").value;
    var hasError = false;

    document.getElementById("firstNameError").innerHTML = "";
    document.getElementById("lastNameError").innerHTML = "";
    document.getElementById("studentIdError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("creditError").innerHTML = "";
    document.getElementById("departmentError").innerHTML = "";

    if (firstName == "") {
        document.getElementById("firstNameError").innerHTML = "First name can't be empty";
        hasError = true;
    }

    if (lastName == "") {
        document.getElementById("lastNameError").innerHTML = "Last name can't be empty";
        hasError = true;
    }

    if (!studentId.includes("-")) {
        document.getElementById("studentIdError").innerHTML = "Student ID must contain \"-\"";
        hasError = true;
    }

    if (!email.includes("@student.aiub.edu")) {
        document.getElementById("emailError").innerHTML = "Email must contain @student.aiub.edu";
        hasError = true;
    }

    if (credit == "" || credit < 0 || credit >= 148) {
        document.getElementById("creditError").innerHTML = "Credit must be 0 or more but less than 148";
        hasError = true;
    }

    if (department == "") {
        document.getElementById("departmentError").innerHTML = "Department is required";
        hasError = true;
    }

    if (hasError) {
        return;
    }

    var table = document.getElementById("studentList");
    var row = table.insertRow();

    row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${studentId}</td>
        <td>${email}</td>
        <td>${credit}</td>
        <td>${department}</td>
    `;

    document.getElementById("studentForm").reset();
});
