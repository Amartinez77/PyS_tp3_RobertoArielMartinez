import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

  //definicion inteface Noticia
  interface Noticia {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  }
  
@Component({
  selector: 'app-punto1',
  imports: [CommonModule],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
  

export class Punto1Component {  

  noticias: Noticia[] = [
    {
      id: 1,
      title: 'Una IA para detectar el cáncer',
      description: 'La empresa china Alibaba tiene una IA para detectar el cáncer de páncreas. Es tan buena que EEUU ha acelerado su aprobación',
      imageUrl: '/assets/images/noticia1.jpeg'
    },
    {
      id: 2,
      title: 'Momento Histórico para Samsung',
      description: 'Samsung ha perdido un liderazgo de 30 años en la industria de los chips DRAM',
      imageUrl: 'assets/images/noticia2.jpeg'
    },
    {
      id: 3,
      title: 'De 1 KB a 200 GB',
      description: 'Lo que antes cabia en un disquete, hoy exige discos duros enteros. Los videojuegos no paran de crecer y su evolución guarda pistas sobre lo que se viene.',
      imageUrl: '/assets/images/noticia3.jpg'
    }
  ];

}
