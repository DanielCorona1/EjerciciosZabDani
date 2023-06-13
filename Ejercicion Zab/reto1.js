function asterisco(n) {
    if (n <= 0 || n > 100){
console.log("El numero debe ser mayor a 0 y menor o igual a 100");
return;
}

for (let i = 1; i <= n; i++) {
    let espacio = "";
    for (let j = 1; j <= n; j++){
        if (j <= n - i){
            espacio += " ";
           }else{
            espacio += "*";
            }
        }
        console.log(espacio);
    }
}
asterisco(10);
