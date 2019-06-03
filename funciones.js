fs= require('fs');
listaEstudiantes=[];

const crear= (estudiante)=>{
    listar();
    let est={
        nombre : estudiante.nombre,
        matematicas : estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion

    };

    let duplicado= listaEstudiantes.find(nom=>nom.nombre==estudiante.nombre);
    if(!duplicado){
        listaEstudiantes.push(est);
        console.log(listaEstudiantes);
        guardar();
    }
    else
        console.log('El estudiante ya se encuentra creado');
 
}

const guardar=()=>{
    let datos= JSON.stringify(listaEstudiantes);
    fs.writeFile('estudiantes.json',datos, (err)=>{
        if (err) { throw (err)};
        console.log('Archivo creado exitosamente');
    });
}

const listar=()=>{
    try{
        listaEstudiantes= require('./estudiantes.json');
        //listaEstudiantes= JSON.parse(fs.readFileSync('estudiantes.json'));
    }
    catch(err){
        listaEstudiantes=[];
    }
}

const mostrar=()=>{
        listar();
        console.log('Notas de los estudiantes');
        listaEstudiantes.forEach(element => {
            console.log('Nombre: '+ element.nombre);
            console.log('Notas: ');
            console.log(' Matematicas: ' +  element.matematicas);
            console.log(' Ingles: ' +  element.ingles);
            console.log(' Programación: ' +  element.programacion + '\n');
        });
}

const mostrarEst=(nom)=>{
    listar();
    let est= listaEstudiantes.find(element=>element.nombre==nom);
    if(est){
                console.log('Nombre: '+ est.nombre);
                console.log('Notas: ');
                console.log(' Matematicas: ' +  est.matematicas);
                console.log(' Ingles: ' +  est.ingles);
                console.log(' Programación: ' +  est.programacion + '\n');

    }
    else
    {
        console.log('Estudiante no encontrado');
    }
}
const mostrarMat=()=>{
    listar();
    let est= listaEstudiantes.filter(element=>element.matematicas>=3);

    if(est.length>0){
        est.forEach(element => {
            console.log('Nombre: '+ element.nombre);
            console.log('Notas: ');
            console.log(' Matematicas: ' +  element.matematicas);
        });
    }
    else
    {
        console.log('Ningun estudiante va ganando');
    }
}

const calcularPromedioEst=(nom)=>
    {
        listar();
        promedio=0;
        let est= listaEstudiantes.find(element=>element.nombre==nom);
        if(est){
        promedio= (est.matematicas+est.ingles+est.programacion)/3;
       
        }
         
        return promedio;
    }
const mostrarEstudiantesGanadores=()=>
    {    
         listar();
         console.log('Estudiantes ganadores:');
         listaEstudiantes.forEach(element => {
            promedio=calcularPromedioEst(element.nombre);
            if(promedio>=3){                
                console.log('Nombre: '+ element.nombre);
                console.log('Promedio: '+ promedio );
            }
        });


    }


module.exports =  {crear, mostrar,mostrarEst, mostrarMat, calcularPromedioEst, mostrarEstudiantesGanadores};