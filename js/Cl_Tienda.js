export default class Tienda {
    constructor() {
        this.cntProductosDebajoStock = 0;
        this.acPrecios = 0.0;
        this.cntProductosProcesados = 0;

    }

    procesarProductos(producto) {

        if (producto.existencia < producto.stock)
            this.cntProductosDebajoStock++

        this.acPrecios += producto.precio

        this.cntProductosProcesados++

    }

    cantidadProductosDebajoStock() {
        return this.cntProductosDebajoStock
    }

    promedioPrecioProductos() {
        if (this.cntProductosProcesados > 0)
            return this.acPrecios / this.cntProductosProcesados
        else
            return 0

    }

}