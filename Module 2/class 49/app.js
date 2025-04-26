// var str = "My name is";
// str = str + userName;
// console.log("str", str);

// var userName = "Jaffar";
// var str1 = "my name  userName ";
// console.log("str1", str1);

// var str = `My ${userName} name is    `;

// console.log(`addition=>> ${2 + 2} `);

var parent = document.getElementById("parent");
function createTodo() {
  //   var div = document.createElement("div");
  //   div.innerHTML = "TODO NOTE";
  //   div.className = "alert alert-primary";

  //   parent.append(div);
  var title = "CARD TITLE";
  var desc = "hello desc";

  var cardUI = ` <div class="card" style="width: 18rem">
<img src="..." class="card-img-top" alt="..." />
<div class="card-body">
  <h5 class="card-title"> ${title} </h5>
  <p class="card-text">
    ${desc}
  </p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;

  parent.innerHTML += cardUI;
}
