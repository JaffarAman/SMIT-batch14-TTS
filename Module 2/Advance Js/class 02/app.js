// const age = 34


// const obj = {
//     name: "Jaffar",
//     age: 24,
//     gender: "Male"
// }



// const { name, age: userAge, gender } = obj




// console.log(name)
// console.log(age)
// console.log(gender)


// const arr = ["karachi", "lahore", "multan"]
// // const [city1, city2, city3] = arr

// const [city1, , city3] = arr

// console.log(city1, city3)






const quizQuestions = [
    {
        id: 1,
        question: "HTML stands for?",
        options: {
            a: "Hyper Text Markup Language",
            b: "Hyper Text Programming Language",
            c: "Hyper Text Styling Language",
            d: "Hyper Text Scripting Language"
        },
        answer: "Hyper Text Markup Language"
    },
    {
        id: 2,
        question: "Which language is used for styling web pages?",
        options: {
            a: "HTML",
            b: "CSS",
            c: "JavaScript",
            d: "PHP"
        },
        answer: "CSS"
    },
    {
        id: 3,
        question: "Which of these is a JavaScript framework?",
        options: {
            a: "Django",
            b: "React",
            c: "Laravel",
            d: "Bootstrap"
        },
        answer: "React"
    },
    {
        id: 4,
        question: "Which tag is used to define a hyperlink in HTML?",
        options: {
            a: "link",
            b: "a",
            c: "href",
            d: "url"
        },
        answer: "a"
    },
    {
        id: 5,
        question: "Which company developed JavaScript?",
        options: {
            a: "Microsoft",
            b: "Netscape",
            c: "Oracle",
            d: "Sun Microsystems"
        },
        answer: "Netscape"
    },
    // {
    //     id: 6,
    //     question: "Which of these is not a programming language?",
    //     options: {
    //         a: "Python",
    //         b: "HTML",
    //         c: "Java",
    //         d: "C++"
    //     },
    //     answer: "HTML"
    // },
    // {
    //     id: 7,
    //     question: "What does CSS stand for?",
    //     options: {
    //         a: "Creative Style Sheets",
    //         b: "Cascading Style Sheets",
    //         c: "Colorful Style Sheets",
    //         d: "Cascading Script Sheets"
    //     },
    //     answer: "Cascading Style Sheets"
    // },
    // {
    //     id: 8,
    //     question: "Which HTML tag is used to display an image?",
    //     options: {
    //         a: "img",
    //         b: "image",
    //         c: "picture",
    //         d: "src"
    //     },
    //     answer: "img"
    // },
    // {
    //     id: 9,
    //     question: "Which HTML tag is used to define a table?",
    //     options: {
    //         a: "table",
    //         b: "thead",
    //         c: "tr",
    //         d: "tb"
    //     },
    //     answer: "table"
    // },
    // {
    //     id: 10,
    //     question: "Which one is not a JavaScript data type?",
    //     options: {
    //         a: "String",
    //         b: "Boolean",
    //         c: "Object",
    //         d: "Function"
    //     },
    //     answer: "Function"
    // }
];


let indexNumber = 0
const count = document.getElementById("count")
count.innerHTML = `${indexNumber + 1} / ${quizQuestions.length} `

function uiRender() {
    const question = document.getElementById("question")
    const options = document.getElementById("options")

    question.innerHTML = quizQuestions[indexNumber].question
    // options.innerHTML = `<li> ${quizQuestions[0].options.a} </li>
    //             <li>${quizQuestions[0].options.b}</li>
    //             <li>${quizQuestions[0].options.c}</li>
    //             <li> ${quizQuestions[0].options.d} </li>`

    const optionList = quizQuestions[indexNumber].options
    console.log("optionList", optionList)


    options.innerHTML = ""
    for (var key in optionList) {
        console.log(optionList[key])
        options.innerHTML += `<li onclick="checkAns(this)" >${optionList[key]}</li>`
    }





    // console.log("uiRender", uiRender)
}




function nextQues() {
    indexNumber++
    console.log("indexNumber", indexNumber)
    uiRender()


    count.innerHTML = `${indexNumber + 1} / ${quizQuestions.length} `

}



function checkAns(ele) {
    console.log("checkAns", ele.innerHTML)
    const allLi = document.getElementById("options").children
    const userSelection = ele.innerHTML
    const correctAns = quizQuestions[indexNumber].answer

    if (userSelection === correctAns) {
        console.log("correct ans")
        ele.style.background = "green"

    } else {
        console.log("wrong ans")
        ele.style.background = "red"

        for (var i = 0; i < allLi.length; i++) {
                // console.log(allLi[i].innerHTML)
            if(allLi[i].innerHTML === correctAns){
                allLi[i].style.background ="green"
                break
            }

        }

    }



    console.log("allLi", allLi)
    for (var i = 0; i < allLi.length; i++) {
        allLi[i].style.pointerEvents = "none"
    }


}



console.log("quizQuestions", quizQuestions)
