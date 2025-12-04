const btnBack = document.getElementById("btnBack");
const textBack = document.getElementById("textBack");
const btnWatchOut = document.getElementById("btnWatchOut");
const textWatchOut = document.getElementById("textWatchOut");
const btnSuperior = document.getElementById("btnSuperior");
const textSuperior = document.getElementById("textSuperior");
let countBack = 0;
let countWatchOut = 0;
let countSuperior = 0;

btnBack.addEventListener("click",function(){
    countBack += 1;
    textBack.textContent = "差し戻し数: " + countBack;
    console.log("差し戻し数カウント" + countBack);
});

btnWatchOut.addEventListener("click",function(){
    countWatchOut += 1;
    textWatchOut.textContent = "要注意人物報告数: " + countWatchOut;
    console.log("要注意人物報告数カウント" + countWatchOut);
});

btnSuperior.addEventListener("click",function(){
    countSuperior += 1;
    textSuperior.textContent = "優秀添削報告数: " + countSuperior;
    console.log("優秀添削報告数カウント" + countSuperior);
});