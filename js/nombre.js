var nombre = prompt ('Ingrese su nombre (o admin si es el administrador del sitio)');

if (nombre!='admin') {
    document.getElementById('art1');
    art1.innerHTML='<h2 id="enfasis">¡Bienvenido, <br><span id="enfasis_nombre">' +nombre+ '</span>! </h2>';
} 

else {
    alert('Admin, por favor diríjase al panel de administración');
    art1.innerHTML='<h2 id="enfasis">Bienvenido Administrador</h2>';
}
