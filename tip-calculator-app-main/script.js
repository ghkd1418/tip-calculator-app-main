// tip amount per person = bill * tip / person
// total per person = bill/person + result
function amount(tip) {
    let bill = document.getElementById(`num`).value;
    let person = document.getElementById(`howmany`).value;
    let result = bill*tip/person;
    let save = bill/person + result;

    document.getElementById(`amount`).innerText = `$` + result.toFixed(2);
    document.getElementById(`total`).innerText = `$` + save.toFixed(2);
}
//reset버튼
let resetBtn = document.querySelector(`.reset`);    
    resetBtn.addEventListener("click", click);

function click() {
    document.getElementById(`howmany`).value = null;
    document.getElementById(`num`).value = null;
    document.getElementById(`custom`).value = null;
    document.getElementById(`amount`).innerText = null;
    document.getElementById(`total`).innerText = null;
}
// custom 을 퍼센트로 변환
function transPerCustom(custom) {
    let percustom = parseInt(custom) / 100;
    amount(percustom);          //percustom가 result와 save에 들어감.
}