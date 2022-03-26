function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
       function(valorAcumulado = 0,nuevoElemento){ //cuand JS no nos envie nada lo iniciamos en 0
        return valorAcumulado + nuevoElemento;
       } 
    ); //aqui le enviamos como argumento una función, este elemento va a mutar a nuestro array
    
    const promedioListaRecibida=sumaLista/lista.length;
    return promedioListaRecibida;
}

const lista1=[
    100, 200, 900, 400000
];

const mitadLista= parseInt(lista1.length/2);
let mediana; 

function esPar(numerito){
    if(numerito%2===0){
        return true;
    }
    else{
        return false;
    }
}

if(esPar(lista1.length)){
    const elemento1= lista1[mitadLista];
    const elemento2= lista1[mitadLista-1];
    const promedioE1yE2 = calcularMediaAritmetica([elemento1,elemento2]);
    mediana= promedioE1yE2;
}
else{
    mediana=lista1[mitadLista];
}

function CalcularMediana(lista){
    lista.sort(function(a,b){return a-b}) ;
    const mitadLista= parseInt(lista.length/2);
    let mediana; 
    if(esPar(lista.length)){
        const elemento1= lista[mitadLista];
        const elemento2= lista[mitadLista-1];
        const promedioE1yE2 = calcularMediaAritmetica([elemento1,elemento2]);
        mediana= promedioE1yE2;
    }
    else{
        mediana=lista[mitadLista];
    }
    return mediana;
}
