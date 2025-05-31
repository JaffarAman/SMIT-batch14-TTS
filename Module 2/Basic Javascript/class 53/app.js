

function signupHandler() {
    // get inputs fields
    var firstName = document.getElementById("firstName")
    var lastName = document.getElementById("lastName")
    var email = document.getElementById("email")
    var password = document.getElementById("password")


    // console.log(firstName.value, "firstName")
    // console.log(lastName.value, "lastName")
    // console.log(email.value, "email")
    // console.log(password.value, "password")

    // create user obj
    var userObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
    }

    // var arr = [userObj]
    // localStorage.setItem("users", JSON.stringify(arr))

    // get users on localStorage
    var getUsers = localStorage.getItem("users")
    console.log("users", getUsers)



    if (getUsers == null) {
        //first Time user
        var arr = [userObj]
        console.log("arr", arr)
        localStorage.setItem("users", JSON.stringify(arr))
        alert("user successfully signup!")
        window.location.href = "./index.html"

    } else {
        // console.log("other then first")

        // parse Array of obj
        var usersArr = JSON.parse(getUsers)
        console.log("usersArr", usersArr)

        // Email address check
        for (var i = 0; i < usersArr.length; i++) {
            console.log(usersArr[i].email)
            if (userObj.email === usersArr[i].email) {
                alert("Email Address Already exist")
                return
            }
        }

        // push new user 
        usersArr.push(userObj)
        console.log("usersArr updated", usersArr)
        // usersArr.push(userObj)

        // set old and new user array of object on localstorage
        localStorage.setItem("users", JSON.stringify(usersArr))
        alert("user successfully signup!")
        window.location.href = "./index.html"
    }

}


function loginHandler() {
    var email = document.getElementById("email")
    var password = document.getElementById("password")


    //get users
    var getUsers = JSON.parse(localStorage.getItem("users"))

    console.log(getUsers, "getUsers")
    if (!getUsers) {
        alert("invalid email or password")
        return
    }
    // for in == object
    // for of == array
    // var arr = [1, 2, 3, 45, 6, 78, 9]
    for (var userObj of getUsers) {
        // console.log("userObj", userObj.email)
        // console.log("userObj", userObj.password)
        if (userObj.email === email.value &&
            userObj.password === password.value) {
            localStorage.setItem("userLogin", JSON.stringify(userObj))
            alert("LOGIN Successfully!")
            window.location.href = "./dashboard.html"

            return
        }
    }
    alert("invalid email or password")


}