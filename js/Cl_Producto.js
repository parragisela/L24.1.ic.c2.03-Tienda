export default class Producto {
    constructor(codigo, precio, existencia, stock) {
        this.codigo = codigo;
        this.precio = precio;
        this.existencia = existencia;
        this.stock = stock;
        
    }

    set codigo(c)
    {
      this._codigo = c
    }
    get codigo()
    {
        return this._codigo 
    }

    set existencia(e)
    {
      this._existencia = +e
    }
    get existencia()
    {
       return this._existencia 
    }
    set stock(s)
    {
      this._stock = +s
    }
    get stock()
    {
        return this._stock 
    }

    set precio(p)
    {
      this._precio = +p
    }
    get precio()
    {
        return this._precio 
    }








}