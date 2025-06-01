function submitHandler() {
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value

    console.log(name)
    console.log(email)

    const userObj = {
        name,
        email,
    }

    localStorage.setItem("user", JSON.stringify(userObj))
    window.location.replace("./quizApp.html")



}