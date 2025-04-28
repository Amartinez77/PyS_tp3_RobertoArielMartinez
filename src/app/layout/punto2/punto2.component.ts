import { Component } from '@angular/core';

interface ProductoCarrito{
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  cantidad:number;
}

@Component({
  selector: 'app-punto2',
  imports: [],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})
export class Punto2Component {

  //array de productos
  productos = [
    {
      id: 1,
      nombre: 'Monitor Valkyrie 24"',
      precio: 339999,
      descripcion: 'Monitor Valkyrie Vh2410v2 200hz-144hz G-sync 24 1ms Ips Hdr',
      imagen: 'assets/images/Prod_monitor.webp',
      cantidad: 99
    },
    {
      id: 2,
      nombre: 'Procesador AMD Ryzen 7 5700G',
      precio: 283377,
      descripcion: 'Procesador AMD Ryzen 7 5700G 100-100000263BOX de 8 núcleos y 4.6GHz de frecuencia con gráfica integrada',
      imagen: 'assets/images/prod_micro.webp',
      cantidad: 99
    },
    {
      id: 3,
      nombre: 'Gabinete Tecware Arc M',
      precio: 100501,
      descripcion: 'Gabinete Tecware Arc M M-atx Doble Camara Vidrio Curvo Y Lcd Color Blanco',
      imagen: 'assets/images/prod_gab.webp',
      cantidad: 99
    },
    {
      id: 4,
      nombre: 'Notebook Lenovo Ideapad Slim 3',
      precio: 943799,
      descripcion: 'Notebook Lenovo Ideapad Slim 3 15,6 Ryzen 5 8gb 512ssd W11 Color Azul',
      imagen: 'assets/images/prod_noteb.webp',
      cantidad: 99
    },
    {
      id: 5,
      nombre: 'Motherboard Asus Tuf Gaming B650m-plus Wifi',
      precio: 422865,
      descripcion: 'Motherboard Asus Tuf Gaming B650m-plus Wifi Socket Am5 Ddr5',
      imagen: 'assets/images/prod_mother.webp',
      cantidad: 99
    },
    {
      id: 6,
      nombre: 'Memoria RAM Fury Beast DDR4',
      precio: 33690,
      descripcion: 'Memoria RAM Fury Beast DDR4 gamer color negro 8GB 1 Kingston KF432C16BB/8',
      imagen: 'assets/images/prod_mem.webp',
      cantidad: 99
    },
  ]

  carrito: ProductoCarrito[] = [];
  total: number = 0;

  //funcionalidad del carrito

  agregarAlCarrito(producto: any) {
    const productoEnCarrito = this.carrito.find(item => item.id === producto.id);

    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
      this.total += producto.precio;
    } else {
      this.carrito.push({
        ...producto,
        cantidad: 1
      });

      this.total += producto.precio;
    }

    console.log('carrito actualizado', this.carrito);
  }
  
  eliminarDelCarrito(id: number) {
    const productoEnCarrito = this.carrito.find(item => item.id === id);

    if (productoEnCarrito) {
      if (productoEnCarrito.cantidad > 1) {
        productoEnCarrito.cantidad--;
        this.total -= productoEnCarrito.precio;
      }else {
        this.carrito = this.carrito.filter(item => item.id !== id);
        this.total -= productoEnCarrito.precio;
      }
  
    }
  }
  
  vaciarCarrito() {
    this.carrito = [];
    this.total = 0;
  }

}
