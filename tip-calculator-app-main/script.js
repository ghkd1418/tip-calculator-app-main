/*  
    사용자가 bill 을 입력 -> price
    select to tip (5% => 0.05)  -> tip
    사람수를 입력하면 -> person

    tip amount per person = price * 0.tip / person
    total per person = {price+(price* 0.tip)/person
*/
// custom 입력시 퍼센테이지로 입력되야함 ㅜㅜ


function amount(tip) {
    let price = document.getElementById(`num`).value;
    let save = price * tip;
    document.getElementById(`amount`).innerText = save;
}

function AmountPerPeople() {
    let people = document.getElementById(`howmany`).value;
    let price = document.getElementById(`num`).value;
    let save = price/people;
    document.getElementById(`amount`).innerText = save;
}

// total per person = {price+(price* 0.tip)/person

function total() {
    let price = document.getElementById(`num`).value;
    let people = document.getElementById(`howmany`).value;
    let save = amount(tip) + price / people;
    document.getElementById(`total`).innerText = save;
}

