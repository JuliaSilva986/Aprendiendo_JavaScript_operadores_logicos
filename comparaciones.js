let nota=Number(prompt("Ingresa tu calificacion"));

if (nota >= 90){
    console.log("el estudiante aprueba con Excelente.")
}else if(75 <= nota && nota < 90){
    console.log("el estudiante aprueba con Bien.")
}else if(60 <= nota && nota < 75){
    console.log("el estudiante aprueba con Suficiente.")
}else{
    console.log("el estudiante no aprueba.")
}