let numero = 6;
let iteracion = 1;
let texto = "";

if (numero <= 0){
    console.log("El numero debe ser mayor a 0 ");
    return;
}

while(iteracion <= numero){

    texto += "[" + iteracion + "]" ;    
    iteracion++;

}console.log(texto);