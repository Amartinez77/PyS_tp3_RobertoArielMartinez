/* Definimos una clase Country con sus atributos y estos serán
similares a los que provee el servicio web para facilitar la
recepción y conversión de los datos de la API a un formato
definido locamente. Definimos un constructor parametrizado.
*/

export class Country {
  name: string;
  isoCode: string;
  flag: string;
  phonecode: number;
  currency: string;
  latitude: string;
  longitude: string;
  

  constructor(name: string = "", isoCode: string = "", flag: string = "", phonecode: number = 0, currency: string = "", latitude: string = "", longitude: string = "") {
    this.name = name;
    this.isoCode = isoCode;
    this.flag = flag;
    this.phonecode = phonecode;
    this.currency = currency;
    this.latitude = latitude;
    this.longitude = longitude;
    
  }

}
