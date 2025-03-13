document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;
    let faculty = document.getElementById("faculty").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    let existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert("User already exists! Please login.");
        window.location.href = "login.html";
        return;
    }
    
    users.push({ username, email, password, role, faculty });
    localStorage.setItem("users", JSON.stringify(users));
    
    alert("Signup successful! Redirecting to login...");
    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
});