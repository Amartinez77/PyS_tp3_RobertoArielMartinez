import { Component } from '@angular/core';

@Component({
  selector: 'app-punto3',
  imports: [],
  templateUrl: './punto3.component.html',
  styleUrl: './punto3.component.css'
})
export class Punto3Component {

  palabras: string[] = ['perro', 'asado', 'raton', 'elefante', 'pizza', 'tigre', 'martillo', 'pajaro', 'mesa', 'caballo'];
  letras: string[] = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  letrasAdivinadas: string[] = [];
  intentos: number = 5;
  palabraAleatoria: string = this.obtenerPalabraAleatoria(); //palabra aleatoria inicial
  mensaje: string = "";
  
  //funcion que elije una palabra aleatoria de la lista
  obtenerPalabraAleatoria() {
    return this.palabras[Math.floor(Math.random() * this.palabras.length)];
  }

  //funcion para capturar la letra del boton
  letraIngresada(letra: string) {
  this.agregarLetra(letra);
  
  if (this.verificarGanador()) {
    this.mensaje = "¡Felicidades! Has adivinado la palabra: " + this.palabraAleatoria;
  } else if (this.verificarIntentos()) {
    // Ya pusiste mensaje en verificarIntentos, no hace falta más
  }
}


  //agregar letra a la lista de letras adivinadas
agregarLetra(letra: string) {
  if (this.letrasAdivinadas.includes(letra)) {
    this.mensaje = "Ya has adivinado esta letra";
  } else {
    this.letrasAdivinadas.push(letra);
    if (!this.verificarLetra(letra)) {
      this.intentos--;
      this.mensaje = `Letra incorrecta, te quedan ${this.intentos} intentos`;
    } else {
      this.mensaje = "¡Letra correcta!";
    }
  }
}


  //verificar si se han agotado los intentos
  verificarIntentos(): boolean {
    if (this.intentos <= 0) {
      this.mensaje = "Has perdido, la palabra era: " + this.palabraAleatoria;
      return true;
    }
    return false;
  }

  //verificar si la letra esta en la palabra
  verificarLetra(letra: string): boolean {
    return this.palabraAleatoria.includes(letra);
  }

  //verificar si se ha ganado
  verificarGanador(): boolean {
    for (let letra of this.palabraAleatoria) {
      if (!this.letrasAdivinadas.includes(letra)) {
        return false;
      }
    }
    return true;
  } 

  //obtener la palabra oculta
  obtenerPalabraOculta(): string {
  let resultado = '';
  for (let letra of this.palabraAleatoria) {
    if (this.letrasAdivinadas.includes(letra)) {
      resultado += letra + ' ';
    } else {
      resultado += '_ ';
    }
  }
  return resultado.trim();
}


}

