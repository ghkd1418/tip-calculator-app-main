/*  
    사용자가 bill 을 입력 -> price
    select to tip (5% => 0.05)  -> tip
    사람수를 입력하면 -> person

    tip amount per person = price * 0.tip / person
    total per person = {price+(price* 0.tip)/person
*/

function PrintPrice() { 
    const price = document.getElementById(`num`).value;
    document.getElementById(`amount`).innerText = price;
}

function five_per() {
    let amount
    const per = 
}
