//const {obtenerPromedio, argv} = require('./datos');
const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public'));


const {listarCursos, prematricula, argv}= require('./cursos');
const {argvCursos}= require('./yargs');
const funciones= require('./funciones');

//console.log(argv);
/*
if (argv._[0]=='promedio'){
    console.log('El promedio del estudiante es: '+ obtenerPromedio(argv.m,argv.i,argv.p));
}
else */
comando= argvCursos._[0];

switch (comando){
    case 'crear':
            funciones.crear(argvCursos);
    break;
    case 'mostrar':
            funciones.mostrar();
    break;
    case 'mostrarEst':
            funciones.mostrarEst(argvCursos.nombre);
    break;
    case 'mostrarMat':
            funciones.mostrarMat();
    break;
    case 'calcularPromedioEst':
          log.console('Promedio: '+ funciones.calcularPromedioEst(argvCursos.nombre));
    break;
    case 'mostrarEstudiantesGanadores':
            funciones.mostrarEstudiantesGanadores();
    break
    default:
        console.log('Elija una opción correcta');
        break;
}


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
