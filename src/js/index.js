let balance = 921.48;
let datas = [17.45, 34.91, 52.36, 31.07, 23.39, 43.2, 25.48];
let totalMonth = 478.33;
let media = 2.4;
let myBalance = document.getElementById("value-balance");
let total = document.getElementById("total");
let percentage = document.getElementById("percentage");
let items = document.querySelectorAll(".item-datas");

myBalance.innerHTML = '$' + balance;
total.innerHTML = '$' + totalMonth;
percentage.innerHTML = '+' + media + '%';


items[0].style.height = datas[0] + 'px';

items.forEach((item, index) => {
    items[index].style.height = datas[index] + 'px';
});
