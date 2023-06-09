function viajar(destino) {
  if (destino === 'Brasil') {
    console.log('Gire a la izquierda');
  } else if (destino === 'Argentina') {
    console.log('Gire a la derecha');
  } else {
    console.log('Nos perdimos'); ''
  }
};
viajar('Brasil');
viajar('Argentia');


for (let i = 0; i < 5; i++) {
  suma = suma + i;
  console.log('Variable de iteración: ', i);
}
console.log('Variable suma: ', suma);

while (suma < 3) {
  suma = suma + 1;
  console.log(suma);
};

var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);



// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);

// POP y SHIFT
colores.shift();
colores.pop();

console.log(colores)


// FOREACH
var numeros = [1, 2, 3, 4];
numeros.forEach((num) => { console.log(num) })

// MAP
var numeros = [1, 2, 3, 4];
var masUno = numeros.map((num) => { return num + 1 });

console.log(masUno);

// esta es un commit de prueba para ver que hace el git restore
