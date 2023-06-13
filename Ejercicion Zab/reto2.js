function paginas(n, p) {
    if (1 > n || n > Math.pow(10,5)){
console.log("El numero de paginas esta fuera de rango");
return;
}
if (p > n){
    console.log("El numero de pagina que se busca supera el numero de paginas del libro");
    return;
    }

else {vueltas = p/2;
    console.log(Math.floor(vueltas) + " vueltas");
    }

}
paginas(100000,10);