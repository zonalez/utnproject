// alert('hola')

var nombre = prompt ('Ingrese su nombre');
if (nombre!='admin') {
    document.getElementById('art1');
    art1.innerHTML='<h2>¡Hola ' +nombre+ '! </h2>';
} 

else {
    alert('Admin, por favor diríjase al panel de administración');
    art1.innerHTML='<h2>Bienvenido Administrador</h2>';
}


var proyectos = [   'Administración de redes y servidores en entornos globales',
                    'Coordinación de soporte técnico',
                    'Capacitación a usuarios',
                    'Gestión de proyectos de infraestructura y seguridad',
                    'Programación en SQL',
];


var capacitacion = [    'Desarrollo Front-End',
                        'Programación en Lenguaje SQL',
                        'Análisis y Diseño con SQL Server',
                        'Node.js',
];

var listaProyectos = document.getElementById('listaP');
for (var i=0 ; i<proyectos.length; i++) {
    listaProyectos.innerHTML += '<li>' +proyectos[i]+ '</li>';
}

var listaCapacitacion = document.getElementById('listaC');
for (var i=0; i<capacitacion.length; i++) {
    listaCapacitacion.innerHTML += '<li>' +capacitacion[i]+ '</li>';
}
