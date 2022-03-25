function arcaica(precio, descuento){
    const descuentoFinal=100-descuento;
    const precioFinal= descuentoFinal*precio/100;
    return precioFinal;
}


function CalcularDescuento(){
    const inputDescuento=document.getElementById("formulario__descuento");
    const InputPrecio=document.getElementById("formulario__precio");
    const valorPrecio= InputPrecio.value;
    const valorDescuento=inputDescuento.value;
    const precioConDescuento= arcaica(valorPrecio, valorDescuento);
    const resultPrice=document.getElementById("resultPrice");
    resultPrice.innerText="El precio con descuento de son: $"+ precioConDescuento;
}