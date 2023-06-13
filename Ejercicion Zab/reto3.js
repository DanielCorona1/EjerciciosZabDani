function avesEnMigracion(aves) {
    let contador = []; 
    let frecuencia = 0; 
    let aveComun = aves [0]; 
    for (let i = 0; i < aves.length; i++) { 
      let tipo = aves[i]; 
  
      if (!contador[tipo]) { 
        contador[tipo] = 0; 
      }
      contador [tipo] ++; 
  
      if (contador[tipo] > frecuencia) {
        
       frecuencia = contador[tipo];
        aveComun = tipo;
      } else if (contador[tipo] === frecuencia && tipo < aveComun) {
   
        aveComun = tipo;
      }
    }
    return "tipo: " + aveComun;
}

let aves = [1, 4, 4, 2, 1, 1, 1, 2, 2, 2 ,2];
let resul = avesEnMigracion(aves);
console.log(resul); 
