document.addEventListener("DOMContentLoaded", function () {
    let faculty = sessionStorage.getItem("faculty") || "Not Assigned";
    document.getElementById("facultyName").textContent = "Faculty: " + faculty;
    let today = new Date().toISOString().split("T")[0];
    document.getElementById("attendanceDate").setAttribute("max", today);
    updateSemesters();
});

document.getElementById("semester").addEventListener("change", loadSubjects);
document.getElementById("facultyYear").addEventListener("change", updateSemesters);

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
    loadSubjects();
}

function loadSubjects() {
    let faculty = sessionStorage.getItem("faculty");
    let semester = document.getElementById("semester").value;
    let subjects = {
        "Mechanical Engineering": { "Semester 1": ["Maths", "Physics"], "Semester 2": ["Chemistry", "Graphics"] },
        "Computer Science Engineering": { "Semester 1": ["Programming", "Digital Logic"], "Semester 2": ["Data Structures", "Algorithms"] }
    };
    let subjectList = document.getElementById("subjectList");
    subjectList.innerHTML = "";
    if (subjects[faculty] && subjects[faculty][semester]) {
        subjects[faculty][semester].forEach(sub => {
            let row = document.createElement("tr");
            row.innerHTML = `<td>${sub}</td>
                             <td>
                                 <button class='present' onclick='markAttendance(this, "Present")'>Present</button>
                                 <button class='absent' onclick='markAttendance(this, "Absent")'>Absent</button>
                                 <button class='on-leave' onclick='markAttendance(this, "On Leave")'>On Leave</button>
                             </td>`;
            subjectList.appendChild(row);
        });
    }
}

function markAttendance(button, status) {
    alert("Attendance marked as " + status);
}

function logout() {
    sessionStorage.clear();
    window.location.href = "login.html";
}
