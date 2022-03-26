const lista1=[
    1,2,3,1,2,3,1,1,1,1,3,5,5,5,5,5,5,5,1,1,1
];
//hay que transformar el array en un objeto que tenga un elemento por cada elemento diferente

const lista1Count= {};

lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento]+=1;
        }
        else{
            lista1Count[elemento] = 1;
        }
    }
);
//el object.entries nos da como resultado un array de arrays, el array es de 2 elementos casa uno y se va a ir ordenando de acuerdo a al segundo elemento que es el numero de veces qye aparece un elemento (que queda en el primero)

// no se puede hacer directamente ocupar el sort hay que entrar en la segunda posicion
const lista1Array= Object.entries(lista1Count).sort(
    function(valorAcumulado, nuevoValor){
        valorAcumulado[1] - nuevoValor[1];
    }
);

const moda = lista1Array[lista1Array.length-1];