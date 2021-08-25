document.addEventListener("DOMContentLoaded", startup);
let bill = 0;
let people = 0;
let percent = 0;



function startup() {
  let arrayBtn = document.getElementsByClassName("btnPercent");

  initialValues();
  cleanBorder(arrayBtn);
  setPercent(arrayBtn);
  setCalculateValues(arrayBtn);

  document.addEventListener("mousemove", outBorder);
  // document.addEventListener("keyup", calculeValues);

  // window.addEventListener("touchend", calculeValuesMobile, false);
  document.getElementById("resetButon").addEventListener("click", resetValues);
}


function initialValues() {
  document.querySelector("#inputBillText").value = "0.00";
  document.querySelector("#inputPeopleText").value = "-";
  document.querySelector("#tipPerPerson").innerHTML = "$0.00";
  document.querySelector("#tipTotal").innerHTML = "$0.00";
  document.querySelector("#inputCustomField").value = "Custom";
  return;
}

document.addEventListener("keyup", function () {
  // document.getElementById("billOutput").innerHTML = bill;
  // document.getElementById("peopleOutput").innerHTML = people;
  // document.getElementById("percentOutput").innerHTML = percent;
});


function cleanBorder(array) {
  for (let index = 0; index < array.length; index++) {
    array[index].classList.add("shadow-none");
  }
  // Another way to do the same
  // Array.prototype.forEach.call(arrayBtn,function(element) {
  //   element.classList.add("shadow-none");
  // });
  return;
}

function resetBillValue() {
  bill = 0;
  let billFormField = document.querySelector("#inputBillText");
  billFormField.value = null;
  billFormField.style.backgroundColor = "#f4fafa";
  billFormField.style.border = "0.15rem solid #26c0ab";
  return;
}

function resetPeopleValue() {
  people = 0;
  let peopleFormField = document.querySelector("#inputPeopleText");
  peopleFormField.value = null;
  peopleFormField.style.backgroundColor = "#f4fafa";
  peopleFormField.style.border = "0.15rem solid #26c0ab";
  return;
}

function resetCustomValue() {
  percent = 0;
  let customFormField = document.querySelector("#inputCustomField");
  customFormField.value = null;
  customFormField.style.backgroundColor = "#f4fafa";
  customFormField.style.border = "0.15rem solid #26c0ab";
  return;
}

function onlyNumberKeyDot(evt) {
  let inputBillPut = document.querySelector("#inputBillText").value;
  document.getElementById("peopleOutput").innerHTML = inputBillPut;
  console.log(inputBillPut);
  document.getElementById("billOutput").innerHTML = evt.key;
  console.log("evt.key", evt.key);
  bill = bill + evt.key;  
  document.querySelector("#inputBillText").value = inputBillPut;
  // Only ASCII character in that range allowed
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode;
  document.getElementById("percentOutput").innerHTML = ASCIICode;
  console.log(ASCIICode);
  if (ASCIICode > 31 && (ASCIICode < 46 || ASCIICode > 57) || (ASCIICode == 47))
    return false;
  return true;
}

function onlyNumberKey(evt) {
  let inputPeoplePut = document.querySelector("#inputPeopleText").value;
  people = people + evt.key;
  let fieldPeople = document.querySelector("#inputPeopleText");
  fieldPeople.value = inputPeoplePut;
  fieldPeople.addEventListener("input", calculeValues);
  let numberCero = document.getElementById("invalid-feedback");
  // Only ASCII character in that range allowed
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode;
  if (inputPeoplePut == 0 && ASCIICode == 48) {
    numberCero.style.display = "block";
    fieldPeople.style.border = "0.2rem red solid";
    return false;
  }
  numberCero.style.display = "none";
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
    return false;
  } else {
    return true;
  }
}

function onlyCustomValue(evt) {
  let inCustomPercent = document.querySelector("#inputCustomField").value;
  percent = percent + evt.key;
  console.log(percent);
  document.querySelector("#inputCustomField").value = inCustomPercent;
  // document.getElementById("inputCustomField").addEventListener("input", calculeValues);
  // Only ASCII character in that range allowed
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 46 || ASCIICode > 57) || (ASCIICode == 47))
    return false;
  return true;
}
// (e.keyCode >= 96 && e.keyCode <= 105)

function outBorder() {
  let billFormField = document.querySelector("#inputBillText");
  billFormField.style.border = "none";
  let peopleFormField = document.querySelector("#inputPeopleText");
  peopleFormField.style.border = "none";
  let customFormField = document.querySelector("#inputCustomField");
  customFormField.style.border = "none"
  return;
}

function calculeValues() {
  let tipPerson = 0;
  let totalPerson = 0;
  percent = parseFloat(percent);
  bill = parseFloat(bill);
  people = parseFloat(people);
  console.log(bill, percent, people);
  if ((percent || bill || people) == 0 || (percent || bill || people) == "0") {
    putResult(tipPerson, totalPerson);
    return false;
  } else {
    tipPerson = ((percent * bill / 100) / people);
    totalPerson = ((bill / people) + tipPerson);
    putResult(tipPerson, totalPerson);
    return;
  }
}

function putResult(tipPerson, totalPerson) {
  if (bill == (undefined || 0) ||
    percent == (undefined || 0) ||
    people == (undefined || 0)) {
    document.getElementById("tipPerPerson").innerHTML = "$0.00";
    document.getElementById("tipTotal").innerHTML = "$0.00";
    return;
  } else {
    document.getElementById("tipPerPerson").innerHTML = "$" + tipPerson.toFixed(2);
    document.getElementById("tipTotal").innerHTML = "$" + totalPerson.toFixed(2);
  }
  return;
}

function resetValues() {
  bill, people = 0;
  percent = 0;
  resetBillValue();
  resetPeopleValue();
  resetCustomValue();
  initialValues();
  removeClassBtnSelected();
  return;
}

function removeClassBtnSelected() {
  let array = document.getElementsByClassName("btnPercent");
  for (let index = 0; index < array.length; index++) {
    array[index].classList.remove("btnSelected");
  }
  return;
}

function setPercent(array) {
  for (let index = 0; index < array.length; index++) {
    array[index].addEventListener("click", function () {
      percent = this.id;
      array[index].classList.add("btnSelected");
    });
  }
  return;
}

function setCalculateValues(array) {
  for (let index = 0; index < array.length; index++) {
    array[index].addEventListener("click", calculeValues);
  }
  return;
}


var responsiveClass = document.getElementsByClassName('container')[0].classList;

var minWidth769 = window.matchMedia("(min-width: 769px)");

function match() {
  if (minWidth769.matches) {
    responsiveClass.add('px-5')
  } else {
    responsiveClass.remove('px-5');
  }
}

minWidth769.addListener(match);

match();