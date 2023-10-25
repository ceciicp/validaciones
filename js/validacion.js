(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          let terminosValid = validacionTerminos();
          if (!form.checkValidity() || !terminosValid) {
            event.preventDefault()
            event.stopPropagation()
          } 
          form.classList.add('was-validated')
        }, false)
      })

      
    document.getElementById('password2').addEventListener('input', validacionPassword2);
    document.getElementById('password1').addEventListener('input', validacionPassword1);

    function validacionPassword2() {
      let inpPass1 = document.getElementById('password1');
      let inpPass2 = document.getElementById('password2');

      if (inpPass1.value !== inpPass2.value) {
        inpPass2.setCustomValidity('Las contraseñas no coinciden.');
      } else {
        inpPass2.setCustomValidity('');
      };

    };

    function validacionPassword1() {
      let inpPass1 = document.getElementById('password1');

      if (inpPass1.value.length < 6) {
        inpPass1.setCustomValidity('La contraseña debe tener al menos 6 caracteres');
      } else {
        inpPass1.setCustomValidity('');
      };
      
    };
    
    function validacionTerminos (){
      let terminos = document.getElementById("terminos");
      if (!terminos.checked){
        document.getElementById("feedback-modal-terminos").style.display = "inline";
        document.getElementById("btn-modal-terminos").style.display = "inline";
        document.getElementById("botoncito").style.color = "red";
      }
      else{
        document.getElementById("feedback-modal-terminos").style.display = "none";
        document.getElementById("btn-modal-terminos").style.display = "none";
        document.getElementById("botoncito").style.color = "";
      }
      return terminos.checked;
    };

})()
  