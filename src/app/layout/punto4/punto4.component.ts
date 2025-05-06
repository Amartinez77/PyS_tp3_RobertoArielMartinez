import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { BoletoService } from '../../boleto.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { Subject } from 'rxjs';

//interface para el objeto boleto
export interface Boleto{
  dni: string;
  nombre: string;
  categoriaTurista: number;
  fechaCompra: Date;
  email: string;
  precio: number;
}

@Component({
  selector: 'app-punto4',
  imports: [FormsModule, CommonModule, DataTablesModule],
  templateUrl: './punto4.component.html',
  styleUrl: './punto4.component.css'
})
export class Punto4Component implements OnInit, OnDestroy {

  boletosVendidos: Boleto[] = []; // Array para almacenar los boletos vendidos

  // para el datatable
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  
  constructor(private boletoService: BoletoService) { } // Constructor de la clase
  
  precioBase: number = 10000;
  precioConDescuento: number = 0;

  boleto: Boleto = {
    dni: '',
    nombre: '',
    categoriaTurista: 0,
    fechaCompra: new Date(),
    email: '',
    precio: 0
  };

  // funcion para calcular el precio total del boleto

  precioTotal(categoriaTurista: number): number {
  if (this.precioBase && categoriaTurista === 1) {
    return this.precioBase * 0.65; // 35% de descuento
  } else if (this.precioBase && categoriaTurista === 2) {
    return this.precioBase; // sin descuento
  } else if (this.precioBase && categoriaTurista === 3) {
    return this.precioBase * 0.5; // 50% de descuento
  } else {
    return 0; // por si no coincide ninguna categoría válida
  }
}

  //funcion para actualer el precio del boleto
  actualizarPrecio(): void {
    this.precioConDescuento = this.precioTotal(this.boleto.categoriaTurista);
  }

  // funcion para agregar el boleto al array de boletos
  agregarBoleto(): void {
    this.boleto.precio = this.precioFinal; // Asignar el precio final al boleto
    this.boletoService.agregarBoleto(this.boleto);

    this.boletosVendidos = this.boletoService.obtenerBoletos(); // Actualizar el array de boletos vendidos
    this.actualizarResumen(); // Actualizar el resumen de ventas

    this.boleto = {
      dni: '',
      nombre: '',
      categoriaTurista: 0,
      fechaCompra: new Date(),
      email: '',
      precio: 0
    };
  }

  // funcion que devuelve al html el precio con descuento

  get precioFinal(): number { 
    if (!this.boleto.categoriaTurista || !this.precioBase) return 0;

    console.log(this.boleto.categoriaTurista, this.precioBase);

    switch (this.boleto.categoriaTurista) {
      case 1: return this.precioBase * 0.65; // 35% de descuento
      case 2: return this.precioBase; // sin descuento
      case 3: return this.precioBase * 0.5; // 50% de descuento
      default: return this.precioBase; // por si no coincide ninguna categoría válida
    }
  }



  // funcion para inicializar el datatable
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json'
      }      
    };

    this.actualizarResumen() // Actualiza el resumen de ventas al iniciar el componente
    this.boletosVendidos = this.boletoService.obtenerBoletos();
    this.dtTrigger.next(null); // inicia el DataTable
  }
  

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  // array de categorias de turistas
  categorias = [
    { id: 0, nombre: 'Todos' },
    { id: 1, nombre: 'Menor' },
    { id: 2, nombre: 'Adulto' },
    { id: 3, nombre: 'Jubilado' },
  ];

  categoriaSeleccionada: number = 0; // variable para almacenar la categoria seleccionada por el usuario


  resumenTotalVentas: number = 0;
  resumenTotalRecaudado: number = 0;
  boletosFiltrados: Boleto[] = [];
  actualizarResumen(): void {
    
    console.log(this.categoriaSeleccionada);
    const boletos = this.boletoService.obtenerBoletos();
    console.log(boletos);
    console.log('Tipo de categoría seleccionada:', typeof this.categoriaSeleccionada);


    const filtrados = this.categoriaSeleccionada === 0
      ? boletos
      : boletos.filter(b => b.categoriaTurista === this.categoriaSeleccionada);

    this.boletosFiltrados = filtrados; // Actualizar el array de boletos filtrados
    this.resumenTotalVentas = filtrados.length;
    console.log('listado de boletos por categoria:', filtrados);
    this.resumenTotalRecaudado = filtrados.reduce((suma, b) => suma + b.precio, 0);
}

  // funcion para eliminar un boleto por su dni
  eliminarBoleto(dni: string): void{
    this.boletoService.eliminarBoleto(dni); // eliminar el boleto del array de boletos
    this.boletosVendidos = this.boletoService.obtenerBoletos(); // actualizar el array de boletos vendidos
    this.actualizarResumen(); // actualizar el resumen de ventas  

  }

  // objeto map 
  categoriasMap: { [key: number]: string } = {
    0: 'Todos',
    1: 'Menor',
    2: 'Adulto',
    3: 'Jubilado'
  }
}