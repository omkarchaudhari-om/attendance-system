document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("facultySelect").addEventListener("change", loadAttendance);
    document.getElementById("attendanceDate").addEventListener("change", loadAttendance);
    document.getElementById("facultyYear").addEventListener("change", updateSemesters);
    document.getElementById("semester").addEventListener("change", loadAttendance);
    updateSemesters();
});

function updateSemesters() {
    let year = document.getElementById("facultyYear").value;
    let semesterDropdown = document.getElementById("semester");
    semesterDropdown.innerHTML = "";
    const semesterOptions = {
        "First Year": ["Semester 1", "Semester 2"],
        "Second Year": ["Semester 3", "Semester 4"],
        "Third Year": ["Semester 5", "Semester 6"],
        "Fourth Year": ["Semester 7", "Semester 8"]
    };
    semesterOptions[year].forEach(sem => {
        let option = document.createElement("option");
        option.value = sem;
        option.textContent = sem;
        semesterDropdown.appendChild(option);
    });
    loadAttendance();
}

function loadAttendance() {
    let faculty = document.getElementById("facultySelect").value;
    let semester = document.getElementById("semester").value;
    let attendanceList = document.getElementById("attendanceList");
    attendanceList.innerHTML = "";
    let records = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
    records.forEach(record => {
        if (record.faculty === faculty) {
            let row = document.createElement("tr");
            row.innerHTML = `<td>${record.email}</td>
                             <td>${record.status}</td>`;
            attendanceList.appendChild(row);
        }
    });
}

function logout() {
    sessionStorage.clear();
    window.location.href = "login.html";
}
