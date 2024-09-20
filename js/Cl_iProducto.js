export default class iProducto{

leerCodigo() {
 return prompt ("Ingrese el Codigo del producto")
}

leerPrecio() {
    return prompt ("Ingrese el precio del Producto")
   }


leerExistencia() {
 return prompt ("Ingrese la Existencia del Producto")   
}

leerStock() {
 return prompt ("Ingrese el Stock Minimo del Producto")
}

solicitarOpcion(){
    return prompt ("Desea procesar otro producto?:  1--> Para Continuar 2 --> Para Salir")
}
}

