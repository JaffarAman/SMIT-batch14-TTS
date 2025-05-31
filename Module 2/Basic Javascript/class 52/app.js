

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

    // get users on localStorage
    var users = localStorage.getItem("users")
    // console.log("users", users)


    if (users == null) {
        //first Time user
        var arr = [userObj]
        console.log("arr", arr)
        localStorage.setItem("users", JSON.stringify(arr))


    } else {
        // console.log("other then first")

        // parse Array of obj
        var usersArr = JSON.parse(users)
        // console.log("usersArr", usersArr)

        // Email address check
        for (var i = 0; i < usersArr.length; i++) {
            console.log(usersArr[i].email)
            if(userObj.email === usersArr[i].email ){
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
    }






}