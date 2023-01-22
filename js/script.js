const billInput = document.querySelector(".calculator__bill");
const peopleInput = document.querySelector(".calculator__people");
const tipPerPerson = document.querySelector(".calculator__tip");
const totalPerPerson = document.querySelector(".calculator__total");
const error = document.querySelector(".calculator__error");
const tipCustom = document.querySelector(".calculator__input--custom");
const tipsBtn = document.querySelectorAll(".btn__tip");
const resetBtn = document.querySelector(".btn__reset");

tipPerPerson.textContent = "$" + (0.0).toFixed(2);
totalPerPerson.textContent = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

const billInputFun = function () {
  billValue = parseFloat(billInput.value);
  calcTip();

  if (billValue < 1) {
    error.style.display = "flex";
    billInput.style.border = ".1rem solid red";
  } else {
    error.style.display = "none";
    billInput.style.border = "none";
    calcTip();
  }
};

const peopleInputFun = function () {
  peopleValue = parseFloat(peopleInput.value);

  if (peopleValue < 1) {
    error.style.display = "flex";
    peopleInput.style.border = ".1rem solid red";
  } else {
    error.style.display = "none";
    peopleInput.style.border = "none";
    calcTip();
  }
};

const tipInputFun = function () {
  tipValue = parseFloat(tipCustom.value / 100);

  tipsBtn.forEach((val) => val.classList.remove("btn--active"));
  calcTip();
};

const handleClick = function (e) {
  tipsBtn.forEach((val) => {
    if (e.target.innerHTML === val.innerHTML) {
      val.classList.toggle("btn--active");
      tipValue = parseFloat(val.innerHTML) / 100;
    }
  });
  calcTip();
};

const resetDisplay = function () {
  peopleInput.value = billInput.value = tipCustom.value = "";

  tipsBtn.forEach((val) => val.classList.remove("btn--active"));
  tipPerPerson.textContent = "$" + (0.0).toFixed(2);
  totalPerPerson.textContent = "$" + (0.0).toFixed(2);
};

const calcTip = function () {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = (billValue + tipAmount) / peopleValue;
    tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
    totalPerPerson.innerHTML = "$" + total.toFixed(2);
  }
};

tipsBtn.forEach((val) => val.addEventListener("click", handleClick));

resetBtn.addEventListener("click", resetDisplay);
billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tipCustom.addEventListener("input", tipInputFun);
