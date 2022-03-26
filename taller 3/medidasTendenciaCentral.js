const lista1=[
    100, 200, 300, 500
];

let sumaLista1=0;
for(let i=0; i<lista1.length; i++){
    sumaLista1= sumaLista1 + lista1[i];
}
const promedioLista=sumaLista1/lista1.length;

function calcularMediaAritmetica(lista){
    //let sumaLista=0;
        // for(let i=0; i<lista.length; i++){
        // sumaLista= sumaLista + lista[i];  
        // }
    const sumaLista = lista.reduce(
       function(valorAcumulado = 0,nuevoElemento){ //cuand JS no nos envie nada lo iniciamos en 0
        return valorAcumulado + nuevoElemento;
       } 
    ); //aqui le enviamos como argumento una función, este elemento va a mutar a nuestro array
    
    const promedioListaRecibida=sumaLista/lista.length;
    return promedioListaRecibida;
}

//no solo podemos usar for para iterar por cada elemento