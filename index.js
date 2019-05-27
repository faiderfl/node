const {obtenerPromedio, argv} = require('./datos');

console.log(argv);
if (argv._[0]=='promedio'){
    console.log('El promedio del estudiante es: '+ obtenerPromedio(argv.m,argv.i,argv.p));
}
else{
    console.log('El promedio no fue calculado');
}
gi