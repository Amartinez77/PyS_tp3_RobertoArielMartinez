import { Component } from '@angular/core';

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
      precio: 339.99,
      descripcion: 'Monitor Valkyrie Vh2410v2 200hz-144hz G-sync 24 1ms Ips Hdr',
      imagen: 'assets/images/Prod_monitor.webp'
    },
    {
      id: 2,
      nombre: 'Procesador AMD Ryzen 7 5700G',
      precio: 283.377,
      descripcion: 'Procesador AMD Ryzen 7 5700G 100-100000263BOX de 8 núcleos y 4.6GHz de frecuencia con gráfica integrada',
      imagen: 'assets/images/prod_micro.webp'
    },
    {
      id: 3,
      nombre: 'Gabinete Tecware Arc M',
      precio: 100.501,
      descripcion: 'Gabinete Tecware Arc M M-atx Doble Camara Vidrio Curvo Y Lcd Color Blanco',
      imagen: 'assets/images/prod_gab.webp'
    },
    {
      id: 4,
      nombre: 'Notebook Lenovo Ideapad Slim 3',
      precio: 943.799,
      descripcion: 'Notebook Lenovo Ideapad Slim 3 15,6 Ryzen 5 8gb 512ssd W11 Color Azul',
      imagen: 'assets/images/prod_noteb.webp'
    },
    {
      id: 5,
      nombre: 'Motherboard Asus Tuf Gaming B650m-plus Wifi',
      precio: 422.865,
      descripcion: 'Motherboard Asus Tuf Gaming B650m-plus Wifi Socket Am5 Ddr5',
      imagen: 'assets/images/prod_mother.webp'
    },
    {
      id: 6,
      nombre: 'Memoria RAM Fury Beast DDR4',
      precio: 33.690,
      descripcion: 'Memoria RAM Fury Beast DDR4 gamer color negro 8GB 1 Kingston KF432C16BB/8',
      imagen: 'assets/images/prod_mem.webp'
    },
  ]

}
