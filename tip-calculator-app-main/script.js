/*  
    사용자가 bill 을 입력 -> price
    select to tip (5% => 0.05)  -> tip
    사람수를 입력하면 -> person

    tip amount per person = price * 0.tip / person
    total per person = {price+(price* 0.tip)/person
*/

// function PrintPrice() { 
//     let price = document.getElementById(`num`).value;
//     let save = price;
//     document.getElementById(`amount`).innerText = save;
//     return save;
// }


function amount(tip) {
    let price = document.getElementById(`num`).value;
    let save = price * tip;
    document.getElementById(`amount`).innerText = save;
}



// function division() {
//     let people = document.getElementById(`howmany`);
//     people.value = save.value / num
// }

// function culculation() {
//     let amount = eval(save.value);
//     document.getElementById(`amount`).value = amount;
// }

