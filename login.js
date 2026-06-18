const login = document.getElementById("login");

login.addEventListener("click"function ()){
    event.preventDefault()
    const email = document.getElementById(document).value;
    const password = document.getElementById(password).value;
    console.log(password)
    if (email) === "" || password === "") {
        alert("please fill ll the fields")
        return
    }
    const users=JSON.parse(localStorage.getItem("users"))
    const matchedUser=users.find(function (user){
        user.email===email && user.password === password
    })
    if(matchedUser){
        alert("login succesful")
        window.location.href="index.html"
    }
    else {
        alert("username or password mismatch")
    }
}