let balance = 921.48;
let datas = [17.45, 34.91, 52.36, 31.07, 23.39, 43.2, 25.48];
let totalMonth = 478.33;
let media = 2.4;
let myBalance = document.getElementById("value-balance");
let total = document.getElementById("total");
let percentage = document.getElementById("percentage");
let items = document.querySelectorAll(".item-datas");
let values = document.querySelectorAll(".data-statick");

myBalance.innerHTML = '$' + balance;
total.innerHTML = '$' + totalMonth;
percentage.innerHTML = '+' + media + '%';

items.forEach((item, index) => {
    items[index].style.height = datas[index] + '%';
    values[index].innerHTML = '$' + datas[index];
    values[index].style.bottom = datas[index] + 10 + '%';
});

for(let item = 0; item < items.length; item++){
    items[item].addEventListener("click", () => {
        values[item].classList.toggle("show")
    });
};
