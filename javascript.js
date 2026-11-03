/* =========================
   Student Search
========================= */

const searchInput = document.getElementById("searchInput");
const studentTableBody = document.getElementById("studentTableBody");

searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value.toLowerCase();
    const studentRows = studentTableBody.querySelectorAll("tr");

    studentRows.forEach(function (row) {
        const studentInformation = row.textContent.toLowerCase();

        if (studentInformation.includes(searchValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});

/* =========================
   Add Student Button
========================= */

const addStudentBtn = document.getElementById("addStudentBtn");

addStudentBtn.addEventListener("click", function () {
    const studentName = prompt("Enter student's full name:");

    if (!studentName || studentName.trim() === "") {
        alert("Student name is required.");
        return;
    }

    const studentCourse = prompt("Enter student's course:");

    if (!studentCourse || studentCourse.trim() === "") {
        alert("Student course is required.");
        return;
    }

    const studentEmail = prompt("Enter student's email:");

    if (!studentEmail || studentEmail.trim() === "") {
        alert("Student email is required.");
        return;
    }

    const studentCount = studentTableBody.querySelectorAll("tr").length + 1;
    const studentId = "ST" + String(studentCount).padStart(3, "0");

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${studentId}</td>
        <td>${studentName}</td>
        <td>${studentCourse}</td>
        <td>${studentEmail}</td>
        <td><span class="status active-status">Active</span></td>
    `;

    studentTableBody.appendChild(newRow);

    alert("Student added successfully!");
});