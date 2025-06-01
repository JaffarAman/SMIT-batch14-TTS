function onload() {
    const report = JSON.parse(localStorage.getItem("report"))
    console.log("onload", report)
    const parent = document.getElementById("parent")


    parent.innerHTML = `<h1>REPORT CARD</h1>
        <h3>Total Ques: ${report.totalQues} </h3>
        <h3>Correct Ques: ${report.correctAnsCount} </h3>
        <h3>Wrong Ques: ${report.wrongAnsCount} </h3>
        <h3>Percentage%: ${report.percentage} </h3>
        <h3>RANK%: ${report.rank} </h3>
        `
}

onload()