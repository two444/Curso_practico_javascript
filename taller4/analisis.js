
//helpers functions o Utils functions
function esPar(numerito){
    return (numerito % 2 === 0); 
    //Esto automaticamente nos da true o false devuelve 0 o 1
}
const salariosCol= mexico.map(
    function(personita){
        return personita.salary;
});

const arrayOriginalSize=salariosCol.length;

const salariosColSorted=salariosCol.sort(
    function(salaryA,salaryB){
        return salaryA-salaryB;
    }
);


function medianaSalario(lista){
    const mitad=parseInt(lista.length/2);
    if(esPar(lista.length)){
        const personitaMitad1=lista[mitad-1];
        const personitaMitad2=lista[mitad];
        return (personitaMitad1+personitaMitad2)/2;
    }else{
        const personitaMitad=lista[mitad];
        return personitaMitad;
    }
}

const MedianaGeneralMx=medianaSalario(salariosColSorted);

//mediana GEneral de salarios, de aqui hay que sacar el diez por ciento de nuestro array rdenado

// aca vamos a tener cómo cortar nuestro array para quitar el diez por ciento más alto de todos los elementos en el array
const spliceStart=parseInt(salariosColSorted.length*0.90);
const spliceCount=salariosColSorted.length-spliceStart;

const salariosMxTop10= salariosColSorted.splice(spliceStart,spliceCount);
const MedianaTopMx=medianaSalario(salariosMxTop10);

console.log(
    arrayOriginalSize, salariosMxTop10,
    MedianaGeneralMx, MedianaTopMx,
);