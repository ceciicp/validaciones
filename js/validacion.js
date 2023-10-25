(function () {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
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
    
    document.getElementById("terminos").addEventListener("change",validacionTerminos);
    function validacionTerminos (){
      let termsandconditions = document.getElementById("terminos");
       if(termsandconditions.checked){
        termsandconditions.setCustomValidity('');
       }else{
        termsandconditions.setCustomValidity('todo mal');
       }
    };

})()
  