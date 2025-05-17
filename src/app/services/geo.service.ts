import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor(private _http: HttpClient) { }

  public getCountries(): Observable<any> {
    // peticion por get a esa url de un apirest
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': environment.rapidApiKey,
        'x-rapidapi-host': environment.rapidApiHost,
        
      })
    };
    return this._http.get("https://country-state-city-search-rest-api.p.rapidapi.com/allcountries", httpOptions);
  }

  public getStatesByCountryCode(countryCode: string) { 
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': environment.rapidApiKey,
        'x-rapidapi-host': environment.rapidApiHost,
        
      })
    };
    return this._http.get<any[]>(`https://country-state-city-search-rest-api.p.rapidapi.com/states-by-countrycode?countrycode=${countryCode.toLowerCase()}`
    , httpOptions);
  }


}