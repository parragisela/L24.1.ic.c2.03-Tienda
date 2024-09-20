/** Análisis de datos
 * Una tienda debe llevar el control de cada uno de los productos Premium que ofrece. 
 * De cada uno se conoce: código, existencia y stock mínimo. Se espera que realice un 
 * programa que reporte la cantidad de productos que están por debajo del stock mínimo y 
 * el promedio de los precios de los productos.
 * 
 */

import Cl_Producto from "./Cl_Producto.js";
import Cl_iProducto from "./Cl_iProducto.js";

import Cl_Tienda from "./Cl_Tienda.js";
import Cl_iTienda from "./Cl_iTienda.js";



let iTienda = new Cl_iTienda(),
   tienda= new Cl_Tienda(),
   salida = document.getElementById("salida");

  let opc =1;
while (opc == 1) {
     let iProducto = new Cl_iProducto(),
          c = iProducto.leerCodigo(),
          p = iProducto.leerPrecio(),
          e = iProducto.leerExistencia(),     
          s = iProducto.leerStock(),
         

          producto = new Cl_Producto(c,p,e,s);

     tienda.procesarProductos(producto);

     opc = iProducto.solicitarOpcion();

}
salida = document.getElementById("salida");
salida.innerHTML += iTienda.reporteTienda(tienda.cantidadProductosDebajoStock(), 
                                          tienda.promedioPrecioProductos());

   