const options={
    nombre:{
        default:'NN',
        alias:'n'
    },
    matematicas:{
        default:0,
        alias:'m'
    },
    ingles:{
        default:0,
        alias:'i'
    },
    programacion:{
        demand:true,
        alias:'p'
    }
}

let obtenerPromedio= (nota_uno,nota_dos,nota_tres) => (nota_uno + nota_dos + nota_tres)/3;
const argv = require('yargs')
            .command('promedio', 'Calcular promedio', options)
            .argv
;

module.exports = {obtenerPromedio, argv};