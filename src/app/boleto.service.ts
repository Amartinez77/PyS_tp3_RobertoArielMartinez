import { Injectable } from '@angular/core';
import { Boleto } from './layout/punto4/punto4.component';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  private boletosKey: string = 'boletosVendidos'; //clave LocalStorage borrar para usar memoria

  // Array para almacenar los boletos
  private boletos: Boleto[] = [];
  
  constructor() { }

  // metodo para agregar un boleto al array de boletos
  //agregarBoleto(boleto: Boleto): void{
  //  this.boletos.push(boleto);
  //}

  //metodo para agregar un boleto al LocalStorage
  agregarBoleto(boleto: Boleto): void {
    const boletos = this.obtenerBoletos(); // Obtener los boletos existentes
    boletos.push(boleto); // Agregar el nuevo boleto al array
    localStorage.setItem(this.boletosKey, JSON.stringify(boletos)); // Guardar en LocalStorage
  }

  // metodo para obtener todos los boletos
  /* obtenerBoletos(): Boleto[] {
    return this.boletos;
  } */
  
  // metodo para obtener todos los boletos del LocalStorage
  obtenerBoletos(): Boleto[] {
    const boletos = localStorage.getItem(this.boletosKey); // Obtener los boletos del LocalStorage
    return boletos ? JSON.parse(boletos) : []; // Parsear y devolver el array de boletos o un array vacío si no hay boletos
  }

  // metodo para eliminar un boleto por su dni
  /* eliminarBoleto(dni: string): void {
    this.boletos = this.boletos.filter(boleto => boleto.dni !== dni)
  } */

  // metodo para eliminar un boleto por su dni del LocalStorage
  eliminarBoleto(dni: string): void {
    let boletos = this.obtenerBoletos(); // Obtener los boletos existentes
    boletos = boletos.filter(boleto => boleto.dni !== dni); // Filtrar los boletos que no coinciden con el dni
    localStorage.setItem(this.boletosKey, JSON.stringify(boletos)); // Guardar el nuevo array en LocalStorage

  }
}