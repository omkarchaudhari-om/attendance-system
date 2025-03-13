document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    let user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        alert("Login successful! Redirecting...");
        sessionStorage.setItem("username", user.username);
        sessionStorage.setItem("role", user.role);
        sessionStorage.setItem("faculty", user.faculty);
        
        setTimeout(() => {
            if (user.role === "student") {
                window.location.href = "student.html";
            } else {
                window.location.href = "professor.html";
            }
        }, 2000);
    } else {
        alert("Login failed: Invalid email or password!");
    }
});
