function getUserData() {
    var userData = JSON.parse(localStorage.getItem("userLogin"))
    console.log("getUserData", userData)

    var firstName = document.getElementById("firstName")
    var lastName = document.getElementById("lastName")
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    firstName.value = userData.firstName
    lastName.value = userData.lastName
    email.value = userData.email
    password.value = userData.password


}


function updateUser() {
    var firstName = document.getElementById("firstName")
    var lastName = document.getElementById("lastName")
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    var updateObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
    }

    var userArr = JSON.parse(localStorage.getItem("users"))
    var indexNumber;
    for (var i = 0; i < userArr.length; i++) {
        if (userArr[i].email === email.value) {
            // console.log("indexNumber", i)
            indexNumber = i
        }
    }

    userArr[indexNumber] = updateObj
    console.log("userArr", userArr)
    localStorage.setItem("users", JSON.stringify(userArr))

}   