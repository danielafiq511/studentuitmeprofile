document.getElementById('loginForm').addEventListener('submit', (e) => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("All fields are required!");
        e.preventDefault();
    }
});

document.getElementById("logoutButton").addEventListener("click", () => {
    // Clear user session data
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");

    // Redirect to login page
    window.location.href = "index.html";
});
