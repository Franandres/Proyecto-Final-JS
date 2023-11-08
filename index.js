// Hice un sumador de numeros pares que para saber
// si el numero es par, utilice un condicional para
// descartar los numeros impares

function sumaNumerosPares () {
    let suma = 0;

    for (let i = 0; i <= 8; i++) {

        if (i % 2 === 0) {
        suma += i;
      }

    }
  
    return suma;
  }
  
  const resultado = sumaNumerosPares();
  console.log("La suma de los números pares es: " + resultado);