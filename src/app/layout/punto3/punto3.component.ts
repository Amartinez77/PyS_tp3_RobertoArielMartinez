import { Component } from '@angular/core';

@Component({
  selector: 'app-punto3',
  imports: [],
  templateUrl: './punto3.component.html',
  styleUrl: './punto3.component.css'
})
export class Punto3Component {

  palabras: string[] = ['PERRO', 'ASADO', 'RATON', 'ELEFANTE', 'PIZZA', 'TIGRE', 'MARTILLO', 'PAJARO', 'MESA', 'CABALLO'];
  letras: string[] = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
  letrasAdivinadas: string[] = [];
  intentos: number = 6;
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
    console.log(letra);
    console.log(this.palabraAleatoria);
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
    console.log(this.mensaje);
    console.log(this.letrasAdivinadas);
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
  
  // funcion para cargar las imagenes
  cargarImagen(): string{
    switch(this.intentos) {
      case 6: return 'assets/images/base.png';
      case 5: return 'assets/images/01.png'; // imagen inicial
      case 4: return 'assets/images/02.png';
      case 3: return 'assets/images/03.png';
      case 2: return 'assets/images/04.png';
      case 1: return 'assets/images/05.png';
      case 0: return 'assets/images/06.png'; // imagen final
      default: return 'assets/images/00.png'; // imagen inicial
    }

  }
  


}

