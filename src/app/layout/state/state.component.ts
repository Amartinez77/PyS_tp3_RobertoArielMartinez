import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { State } from '../../models/state';
import { GeoService } from '../../services/geo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-state',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './state.component.html',
  styleUrl: './state.component.css'
})
export class StateComponent implements OnInit {

  //states!: Array<State>;
  //states: any[] = [];
  states: State[] = [];
  state!: State;

  constructor(
    private geoService: GeoService,
    private route: ActivatedRoute
  ) {
    //console.log('Constructor de StateComponent');
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const countryCode = params['countryCode'];
      console.log('Country code:', countryCode);
      this.geoService.getStatesByCountryCode(countryCode)
        .subscribe({
          next: (data: any[]) => {
            this.states = data.map(item => {
              const state = new State();
              return Object.assign(state, item);
            });
          },
          error: (error) => {
            console.error('Error al obtener estados:', error);
          }
        });
    });
    
  }

  /* cargarStates(countryCode: string) {
    this.geoService.getStatesByCountryCode(countryCode).subscribe(
      (result: any) => {
        // convertimos los estados recibidos en JSON a objetos javascript
        this.states = new Array<State>();
        result.forEach((element: any) => {
          this.state = new State();
          Object.assign(this.state, element); //covertimos el objeto JSON a un objeto de tipo State
          this.states.push(this.state); //agregamos el objeto a la lista de estados
        });
        console.log(this.states);
      },
      (error) => {
        alert("Error en la peticion");
      }
    );
  }
 */
}
