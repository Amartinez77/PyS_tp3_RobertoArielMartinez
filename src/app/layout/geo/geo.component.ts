import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { GeoService } from '../../services/geo.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
//import { StateComponent } from '../state/state.component';

@Component({
  selector: 'app-geo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './geo.component.html',
  styleUrl: './geo.component.css'
})
export class GeoComponent implements OnInit {

  countries!: Array<Country>;
  country!: Country;

  constructor(private geoService: GeoService, private router: Router) { 
    this.cargarCountries();
  }

  ngOnInit(): void {
  }

  cargarCountries() { 
    this.geoService.getCountries().subscribe(
      (result) => { 
        // convertimos los paises recibidos en JSON a objetos javascript
        this.countries = new Array<Country>();
        result.forEach((element: any) => {
          this.country = new Country();
          Object.assign(this.country, element); //covertimos el objeto JSON a un objeto de tipo Country
          this.countries.push(this.country); //agregamos el objeto a la lista de paises
        });
        console.log(this.countries);
      },
      (error) => {
        alert("Error en la peticion");
      }
    )
  }

  verProvincias(countryCode: string) {
    console.log('Iniciando navegación...');
    console.log('URL objetivo:', `/states/${countryCode}`);
    this.router.navigate(['/paises', countryCode, 'estados'])
      .then(() => {
        console.log('Navegación exitosa');
        console.log('URL actual:', window.location.href);
      })
      .catch(err => {
        console.error('Error en navegación:', err);
        console.log('URL actual:', window.location.href);
      });
}


}
