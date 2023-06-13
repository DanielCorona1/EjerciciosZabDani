console.log("**** Fila del banco ****")

const fila = ["Sofia", "David", "Juan"];
console.log(fila);

let pushFila = fila.push("Sara", "Agustin");
console.log(fila);

let spliceFila = fila.splice(0, 1);
console.log(fila);

let replacedFila = fila.splice(1,0, "Renata");
console.log(fila);

let pushFila2 = fila.push("Elena");
console.log(fila);