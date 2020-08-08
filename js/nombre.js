var nombre = prompt ('Ingrese su nombre');

if (nombre!='admin') {
    document.getElementById('art1');
    art1.innerHTML='<h2>¡Hola ' +nombre+ '! </h2>';
} 

else {
    alert('Admin, por favor diríjase al panel de administración');
    art1.innerHTML='<h2>Bienvenido Administrador</h2>';
}
