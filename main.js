const btnBack = document.getElementById("btnBack");
const textBack = document.getElementById("textBack");
const btnBackMinus = document.getElementById("btnBackMinus");

const btnWatchOut = document.getElementById("btnWatchOut");
const textWatchOut = document.getElementById("textWatchOut");
const btnWatchOutMinus = document.getElementById("btnWatchOutMinus");

const btnSuperior = document.getElementById("btnSuperior");
const textSuperior = document.getElementById("textSuperior");
const btnSuperiorMinus = document.getElementById("btnSuperiorMinus");

let countBack = 0;
let countWatchOut = 0;
let countSuperior = 0;

let resultArea = document.getElementById("resultArea");
const toDo = document.getElementById("toDo");

function updateResultArea() {
    resultArea.textContent = `${toDo.value}${countWatchOut}`;
}

btnBack.addEventListener("click",function(){
    countBack += 1;
    textBack.textContent = "差し戻し数: " + countBack;
    console.log("差し戻し数カウント" + countBack);
});

btnBackMinus.addEventListener("click",function(){
    if(countBack > 0){
        countBack -= 1;
    }
    textBack.textContent = "差し戻し数: " + countBack;
    console.log("差し戻し数カウント" + countBack);
});

btnWatchOut.addEventListener("click",function(){
    countWatchOut += 1;
    textWatchOut.textContent = "要注意人物報告数: " + countWatchOut;
    console.log("要注意人物報告数カウント" + countWatchOut);
});
btnWatchOutMinus.addEventListener("click",function(){
    if(countWatchOut > 0){
        countWatchOut -= 1;
    }
    textWatchOut.textContent = "要注意人物報告数: " + countWatchOut;
    console.log("要注意人物報告数カウント" + countWatchOut);
});

btnSuperior.addEventListener("click",function(){
    countSuperior += 1;
    textSuperior.textContent = "優秀添削報告数: " + countSuperior;
    console.log("優秀添削報告数カウント" + countSuperior);
});

btnSuperiorMinus.addEventListener("click",function(){
    if(countSuperior > 0){
        countSuperior -= 1;
    }
    textSuperior.textContent = "優秀添削報告数: " + countSuperior;
    console.log("優秀添削報告数カウント" + countSuperior);
});

toDo.addEventListener("input", updateResultArea);