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
    // console.log("renderUI", todoData)
    var parent = document.getElementById("listContainerid")
    parent.innerHTML = ""
    if (!todoData) {
        return
    }
    for (var i = 0; i < todoData.length; i++) {
        // console.log("indexNumber", i, todoData[i])
        parent.innerHTML += `<div class="list">
            <h5>${todoData[i].todo}</h5>
            <div class="listBtn">
                <button onclick="editTodo(${i})" >Edit</button>
                <button onclick="deleteTodo(${i})" >Delete</button>
            </div>
        </div>`
    }

}


function editTodo(indexNumber) {
    // console.log("indexNumber", indexNumber)
    var todoArr = JSON.parse(localStorage.getItem("todos"))
    var oldObj = todoArr[indexNumber]
    console.log(oldObj, "oldObj")

    var todoPrompt = prompt("Enter updated value", oldObj.todo)
    // console.log("todoPrompt", todoPrompt)
    var updateObj = {
        todo: todoPrompt,
        email: oldObj.email
    }

    console.log("updateObj", updateObj)

    // todoArr.splice(indexNumber, 1, updateObj)
    todoArr[indexNumber] = updateObj
    console.log("todoArr", todoArr)

    localStorage.setItem("todos", JSON.stringify(todoArr))
    renderUI()





}


function deleteTodo(indexNumber) {
    // console.log("ele", ele.parentNode.parentNode.remove())

    console.log("indexNumber", indexNumber)
    var todoArr = JSON.parse(localStorage.getItem("todos"))
    todoArr.splice(indexNumber, 1)
    console.log(todoArr)
    localStorage.setItem("todos", JSON.stringify(todoArr))

    // // remove UI Element 
    // ele.parentNode.parentNode.remove()
    renderUI()



}