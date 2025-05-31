function addTodo() {
    var todoInput = document.getElementById("todoInput")
    // console.log("todoInput", todoInput.value)

    var userObj = JSON.parse(localStorage.getItem("userLogin"))
    // console.log("userObj", userObj)
    var todoObj = {
        todo: todoInput.value,
        email: userObj.email
    }
    // console.log("todoObj", todoObj)


    var todoData = localStorage.getItem("todos")
    console.log("todoData", todoData)

    if (todoData === null) {
        var arr = [todoObj]
        localStorage.setItem("todos", JSON.stringify(arr))
    } else {
        var todoArr = JSON.parse(todoData)
        todoArr.push(todoObj)
        console.log("todoArr", todoArr)
        localStorage.setItem("todos", JSON.stringify(todoArr))
    }

    renderUI()



}


function renderUI() {
    var todoData = JSON.parse(localStorage.getItem("todos"))
    console.log("renderUI", todoData)
    var parent = document.getElementById("listContainerid")
    parent.innerHTML = ""
    for (var i = 0; i < todoData.length; i++) {
        console.log(todoData[i].todo)
        parent.innerHTML += `<div class="list">
            <h5>${todoData[i].todo}</h5>
            <div class="listBtn">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>`
    }

}