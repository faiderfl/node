const nombre ={
        default:'NN',
        alias:'n'
    }

const matematicas={
        default:0,
        alias:'m'
    }

const ingles={
        default:0,
        alias:'i'
    }
const programacion= {
        demand:true,
        alias:'p'
    }

    
const creacion ={
    nombre,
    matematicas,
    ingles,
    programacion

}

const mostraEst={
    nombre
}
const calcularPromedioEst={
    nombre
}

const argvCursos = require('yargs')
            .command('crear', 'Creación de un estudiante en mi BD', creacion)
            .command('mostrar', 'Mostrar la lista de estudiantes')
            .command('mostrarEst', 'Mostrar un estudiante', mostraEst)
            .command('mostrarMat', 'Mostrar los estudiantes que van ganado Matematicas')
            .command('calcularPromedioEst', 'Calcular el promedio de un estudiante')
            .command('mostrarEstudiantesGanadores', 'Muestra los estudiantes que tienen promedio mayor o igual a 3')
            .argv

module.exports = {argvCursos};