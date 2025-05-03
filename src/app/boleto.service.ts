import { Injectable } from '@angular/core';
import { Boleto } from './layout/punto4/punto4.component';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  // Array para almacenar los boletos
  private boletos: Boleto[] = [];
  
  constructor() { }

  // metodo para agregar un boleto al array de boletos
  agregarBoleto(boleto: Boleto): void{
    this.boletos.push(boleto);
  }

  // metodo para obtener todos los boletos
  obtenerBoletos(): Boleto[] { 
    return this.boletos;
  }
}
