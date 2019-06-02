const options={
    nombre:{
        demand:true,
        alias:'n'
    },
    cedula:{
        demand:true,
        alias:'c'
    },
    id:{
        demand:true,
        alias:'i'
    }
}

const argv = require('yargs')
            .command('inscribir', 'Registro previo de un alumno a un curso', options)
            .argv
const fs= require('fs');

let cursos=[{
        id:1,
        nombre:"matematicas",
        valor: 100000,
        duracion: '4 semanas',
    },
    {
        id:2,
        nombre:"ingles",
        valor: 50000,
        duracion: '4 semanas'
    },
    {
        id:3,
        nombre:"programacion",
        valor: 150000,
        duracion: '4 semanas'
    }
]

let listarCursos=() =>{
    
        cursos.forEach(curso => {
            setTimeout(() => {
            console.log('El id del curso es:' + curso.id);
            console.log('El nombre del curso es:' + curso.nombre);
            console.log('El valor del curso es:' + curso.valor);
            console.log('La duración del curso es:' + curso.duracion);
            }, curso.id*2000);
        });
        
    

}

let prematricula=(id,nombre, cedula)=>{
    let texto="";
    let cursoEncontrado=  cursos.find( curso => curso.id == id)
    if(cursoEncontrado!=undefined)
    {
        console.log('El id del curso es: ' + cursoEncontrado.id);
        console.log('El nombre del curso es: '+ cursoEncontrado.nombre);
        console.log('El valor del curso es: ' + cursoEncontrado.valor);
        console.log('La duración del curso es:' + cursoEncontrado.duracion);
        texto= 'El id del curso es: ' + cursoEncontrado.id + '<br />'+
                   'El nombre del curso es: '+ cursoEncontrado.nombre + '<br />'+
                   'El valor del curso es: ' + cursoEncontrado.valor + '<br />'+
                   'La duración del curso es: ' + cursoEncontrado.duracion + '<br />'+
                   'El nombre del estudiante es: ' + nombre  + '<br />'+
                   'La cedula del estudiante es: ' + cedula;


  
        texto2= texto.replace(/<br\s*\/?>/mg,"\n");
        fs.writeFile('prematricula.txt', texto2, (err)=>{
            if(err) {console.log(err)}
            console.log('Archivo creado existosamente');
        }
        

        )
    }
    else
    {
        console.log("Curso no encontrado");
    }
return texto;
}


module.exports={ listarCursos, prematricula, argv }


