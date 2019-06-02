//const {obtenerPromedio, argv} = require('./datos');
const express = require('express')
const app = express()
const {listarCursos, prematricula, argv}= require('./cursos');
app.use(express.static(__dirname + '/public'));
//onsole.log(argv);
/*
if (argv._[0]=='promedio'){
    console.log('El promedio del estudiante es: '+ obtenerPromedio(argv.m,argv.i,argv.p));
}
else */
if(argv._[0]=='listarCursos'){
    listarCursos()
}
else if(argv._[0]=='inscribir'){
    inscripcion= prematricula(argv.id, argv.nombre, argv.cedula);
}
else{
    console.log('Elija una opción correcta');
}
 
app.get('/', function (req, res) {
  res.send(inscripcion)
})
 
app.listen(3000)