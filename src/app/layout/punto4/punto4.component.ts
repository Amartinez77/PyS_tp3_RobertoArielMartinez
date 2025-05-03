import { Component } from '@angular/core';
import { BoletoService } from '../../boleto.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  imports: [FormsModule, CommonModule],
  templateUrl: './punto4.component.html',
  styleUrl: './punto4.component.css'
})
export class Punto4Component {
  
  constructor(boletoService: BoletoService) { } // Constructor de la clase
  
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
    this.boleto.precio = this.precioTotal(this.boleto.categoriaTurista);
  }

}