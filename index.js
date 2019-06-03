//const {obtenerPromedio, argv} = require('./datos');
const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public'));


const {listarCursos, prematricula}= require('./cursos');
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

    case 'listarCursos':
          listarCursos();
    break;
    case 'inscribir':
            inscripcion= prematricula(argvCursos.id, argvCursos.nombre, argvCursos.cedula);
            app.get('/', function (req, res) {
                res.send(inscripcion);
              });
               
              app.listen(3000);
    break;
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
          console.log('Promedio: '+ funciones.calcularPromedioEst(argvCursos.nombre));
    break;
    case 'mostrarEstudiantesGanadores':
            funciones.mostrarEstudiantesGanadores();
    break
    default:
        console.log('Elija una opción correcta');
        break;
}