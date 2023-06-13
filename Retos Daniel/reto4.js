function Sumatoria(n){
    let i=0;
    
    while(i <= n){
    if (n <= 0){
        return 0;
    }
    return n + Sumatoria(n - 1)
}
}
console.log(Sumatoria(5));

