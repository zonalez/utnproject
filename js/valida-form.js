var nombreForm = document.getElementById('nombreForm');
var correo = document.getElementById('correo');
var mensaje = document.getElementById('mensaje');

function validarNombre() {
    if (nombreForm.value=='') {
            $('#nombreForm').css('border-bottom','2px solid green');
            nombreForm.setCustomValidity('El nombre es obligatorio');
    } else { 
            nombreForm.style.borderBottom="2px solid #C5C6C6";
            nombreForm.setCustomValidity('')
    }
}

function validarCorreo () {
    if (correo.value=='') {
        $('#correo').css('border-bottom','2px solid purple');
        correo.setCustomValidity('El correo es obligatorio');
    } else {
        correo.style.borderBottom="2px solid #C5C6C6";
        correo.setCustomValidity('');
    }
}

function validarForm () {
    nombreForm.addEventListener('input', validarNombre);
    correo.addEventListener('input',validarCorreo);
    validarNombre();
    validarCorreo();
}


window.addEventListener('load', validarForm);

