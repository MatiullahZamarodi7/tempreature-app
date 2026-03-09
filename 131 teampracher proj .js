let addTemp = document.getElementById("addTemp");
let addNTemp = document.getElementById("addNTemp");
let AddNumbers = document.getElementById("number");
let result = document.getElementById("result");
let ConveartBtn = document.getElementById("ConveartBtn");
let RemoveBtn = document.getElementById("RemoveBtn");

function Conveart() {
    if (AddNumbers.value === "") {
        result.innerHTML = "چیز وارد  نشده  "
        result.style.color = "red"
    }
    else {
        if (addTemp.value === "Celsuse" && addNTemp.value === "Celsuse") {   // C to C
            result.innerHTML = AddNumbers.value + " C is : " + AddNumbers.value + " C"
            result.style.color = "green"
        }
        else if (addTemp.value === "Celsuse" && addNTemp.value === "Farnhaid") { // C to F
            let numbervalue = (AddNumbers.value * 1.8) + 32;
            result.innerHTML = AddNumbers.value + " C is : " + numbervalue.toFixed(2) + "F"
            result.style.color = "green"
        }
        else if (addTemp.value === "Celsuse" && addNTemp.value === "Kalvin") { // C to K
            let newnumbervalue = +AddNumbers.value + 273.15;
            result.innerHTML = AddNumbers.value + " C is : " + newnumbervalue + "K";
            result.style.color = "green"
        }
        else if (addTemp.value === "Farnhaid" && addNTemp.value === "Celsuse") { // F TO C
            let myvalue = (AddNumbers.value - 32) * (5 / 9);
            result.innerHTML = AddNumbers.value + " F is" + myvalue.toFixed(2) + "C"
            result.style.color = "green"
        }
        else if (addTemp.value === "Farnhaid" && addNTemp.value === "Farnhaid") { // F TO F
            result.innerHTML = AddNumbers.value + " F in " + AddNumbers.value + "F"
            result.style.color = "green"
        }
        else if (addTemp.value === "Farnhaid" && addNTemp.value === "Kalvin") { // F TO K
            let newvalue = (5 / 9) * (AddNumbers.value - 32) + 273.15;
            result.innerHTML = AddNumbers.value + " F in" + newvalue.toFixed(2) + "K"
            result.style.color = "green"
        }
        else if (addTemp.value === "Kalvin" && addNTemp.value === "Celsuse") { // K TO C
            let newnum = AddNumbers.value - 273.15;
            result.innerHTML = AddNumbers.value + " K in " + newnum + "C"
            result.style.color = "green"
        }
        else if (addTemp.value === "Kalvin" && addNTemp.value === "Farnhaid") { // K TO F
            let numb = ((9 / 5) * (AddNumbers.value - 273.15)) + 32;
            result.innerHTML = AddNumbers.value + " K in " + numb + "F"
            result.style.color = "green"
        }
        else if (addTemp.value === "Kalvin" && addNTemp.value === "Kalvin") { // K TO K
            result.innerHTML = AddNumbers.value + " K in " + AddNumbers.value + "K"
            result.style.color = "green"
        }
    }

}



function Remove() {
    result.innerHTML = " ";
    AddNumbers.value = " ";
}


result.addEventListener("click", function () {
    result.style.backgroundColor = "black"
    result.style.color = "white"
    result.style.borderRadius = "40px"
    // result.style.fontSize = "40px"
    
})



ConveartBtn.addEventListener("click", Conveart);
RemoveBtn.addEventListener("click", Remove);


