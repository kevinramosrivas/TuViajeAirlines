const formularioTarjeta = document.querySelector(".form");
const inputNumero = document.getElementById("inputNumero");
const inputNombre = document.getElementById("inputNombre");
const selectMes = document.getElementById("selectMes");
const selectYear = document.getElementById("selectYear");
const inputCCV = document.getElementById("inputCCV");
const inputDireccion = document.getElementById("inputDireccion");
const inputCiudad = document.getElementById("inputCiudad");
const selectDepartamento = document.getElementById("selectDepartamento");
const inputCP = document.getElementById("inputCP");
const btnEnviar = document.getElementById("btnEnviar");
const btnCorreo = document.getElementById("btnCorreo");
const correoVerificacion = document.getElementById("correoVerificacion");

document.addEventListener('DOMContentLoaded', () => {
    btnEnviar.addEventListener('click', validateForm);
    btnCorreo.addEventListener('click',muestra);
})


const validateForm = (e) => {
    e.preventDefault();
    const numeroTarjeta = inputNumero.value; 
    const nombreTarjeta = inputNombre.value; 
    const mesTarjeta = selectMes.value;
    const anioTarjeta= selectYear.value;
    const ccvTarjeta =inputCCV.value;
    const direccionCliente = inputDireccion.value; 
    const ciudadCliente = inputCiudad.value; 
    const depCiente = selectDepartamento.value; 
    const codPostal = inputCP.value;
    console.log(numeroTarjeta,nombreTarjeta,mesTarjeta,anioTarjeta ,ccvTarjeta ,direccionCliente,ciudadCliente,depCiente ,codPostal);
    if(numeroTarjeta === '' || nombreTarjeta === '' ||
    mesTarjeta === ''|| anioTarjeta ==='' ||ccvTarjeta ===''
    ||direccionCliente === '' || ciudadCliente ===  ''||
    depCiente === ''|| codPostal === '' ){
        console.log("ga");
        swal.fire({
            title: 'Error',
            text: 'Debe completar todos los campos',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#48BB78'
        })
        return;
    }
    else{
        window.location.href = "http://localhost/xampp/TuViajeAirlines/index_sesion_iniciada.html?mensaje=1";
    }
    
}

const muestra = (e) =>{
    e.preventDefault();
    if(correoVerificacion.value === ''){
        swal.fire({
            text: 'Debe completar este campo',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#48BB78'
        })
        return;
    }
    else{
        swal.fire({
            text: 'El correo fue añadido exitosamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#48BB78'
        })
        return;
    }

    
}