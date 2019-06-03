Node.JS TDEA

Primera parte y Bonus Inscribir:

* Para incribir un estudiante se debe ejecutar alguno de estos comandos:

    node index inscribir -n="faider" -c=1128274738 -i=1 

    node index inscribir --nombre="faider" -cedula=1128274738 --id=1

Esto ejecutará el archivo index.js en la opción de inscribir y mostrará en la dirección 127.0.0.1:3000 y guardará el archivo preinscribir.txt

* Para crear un estudiante: 
    
    node index crear, --nombre='faider', --matematicas=3, --ingles=3,--programacion=4

* Para el comando de listar los cursos se debe usar:

    node index listarCursos 

Bonus Promedio y Estudiantes Ganadores:

* Para calcular el promedio de un estudiante utilice el comando: 
 
    node index calcularPromedioEst -n="faider"

* Para mostrar los estudiantes ganadores utilice el comando:

    node index mostrarEstudiantesGanadores