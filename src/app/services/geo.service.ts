import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor(private _http: HttpClient) { }

  public getCountries(): Observable<any> {
    // peticion por get a esa url de un apirest
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '0d67c15fc8mshf05bd9e4f6655bfp1a0bd6jsn30b062fd0d5c',
        'x-rapidapi-host': 'country-state-city-search-rest-api.p.rapidapi.com',
        
      })
    };
    return this._http.get("https://country-state-city-search-rest-api.p.rapidapi.com/allcountries", httpOptions);
  }

  public getStatesByCountryCode(countryCode: string) { 
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '0d67c15fc8mshf05bd9e4f6655bfp1a0bd6jsn30b062fd0d5c',
        'x-rapidapi-host': 'country-state-city-search-rest-api.p.rapidapi.com',
        
      })
    };
    return this._http.get<any[]>(`https://country-state-city-search-rest-api.p.rapidapi.com/states-by-countrycode?countrycode=${countryCode.toLowerCase()}`
    , httpOptions);
  }


}