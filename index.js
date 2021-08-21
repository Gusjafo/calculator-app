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


let inputBill = "0.00";
let inputBillPut = null;
document.querySelector("#inputBillText").value = inputBill;

function putBillValue() {
    inputBillPut = document.querySelector("#inputBillText").value;
    document.querySelector("#inputBillText").value = inputBillPut;    
}

function resetBillValue(){
  document.querySelector("#inputBillText").value = inputBillPut;
}



// let resetBtn = document.getElementById("resetButon");
// let outPerPerson = document.getElementById("tipPerPerson");
// let outTotal = document.getElementById("tipTotal");
// outPerPerson.innerHTML = inputBill;
// outTotal.innerHTML = inputBill;

