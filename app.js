document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const user = document.getElementById("username").value;
            console.log("Logged in as:", user);
        });
    }
});
