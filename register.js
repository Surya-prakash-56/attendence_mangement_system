const regbt = document.getElementById("register");

regbt.addEventListener("click", function () {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repassword = document.getElementById("repassword").value;

    if (password !== repassword) {
        alert("password Mismatch")
        return
    }
    const user = {
        name: name,
        email: email,
        pass: password
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));
    alert("registration sucessful")
    window.location.href = "login.html"

})