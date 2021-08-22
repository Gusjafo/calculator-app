let bill = 0; 
let people = 0;
let percent = 10;


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false)
    })
})()


function initialValues() {
  // initial values for Bill and People
  let inputBill = "0.00";
  document.querySelector("#inputBillText").value = inputBill;
  let inputPeople = "-";
  document.querySelector("#inputPeopleText").value = inputPeople;
}

initialValues();

function resetBillValue() {
  bill = 0;
  let billFormField = document.querySelector("#inputBillText");
  billFormField.value = null;
  billFormField.style.backgroundColor = "#f4fafa";
  billFormField.style.border = "0.15rem solid #26c0ab"
}

function resetPeopleValue() {
  people = 0;
  let peopleFormField = document.querySelector("#inputPeopleText");
  peopleFormField.value = null;
  peopleFormField.style.backgroundColor = "#f4fafa";
  peopleFormField.style.border = "0.15rem solid #26c0ab"
}

function onlyNumberKeyDot(evt) {
  let inputBillPut = document.querySelector("#inputBillText").value;
  bill = bill + evt.key;
  document.querySelector("#inputBillText").value = inputBillPut;

  // Only ASCII character in that range allowed
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode
  if (ASCIICode > 31 && (ASCIICode < 46 || ASCIICode > 57) || (ASCIICode == 47))
    return false;
  return true;
}

function onlyNumberKey(evt) {
  let inputPeoplePut = document.querySelector("#inputPeopleText").value;
  people = people + evt.key; 
  document.querySelector("#inputPeopleText").value = inputPeoplePut;

  let numberCero = document.getElementById("invalid-feedback");
  // Only ASCII character in that range allowed
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode
  if (inputPeoplePut == 0 && ASCIICode == 48) {
    numberCero.style.display = "block";
    return false;
  }
  numberCero.style.display = "none";
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
    return false;
  return true;
}

let arrayBtn = document.getElementsByTagName("button");
for (let index = 0; index < arrayBtn.length; index++) {
  arrayBtn[index].classList.add("shadow-none");
}
// Another way to do the same
// Array.prototype.forEach.call(arrayBtn,function(element) {
//   element.classList.add("shadow-none");
// });


document.addEventListener("mousemove", function () {
  let billFormField = document.querySelector("#inputBillText");
  billFormField.style.border = "none"

  let peopleFormField = document.querySelector("#inputPeopleText");
  peopleFormField.style.border = "none"
})

document.addEventListener("keydown", function(){
  let tipPerson = (percent * bill / 100);
  document.getElementById("tipPerPerson").innerHTML = tipPerson;
})


