import { Country } from "./country";

/*
Definimos una clase state con sus atributos y estos serán
similares a los que provee el servicio web para facilitar la
recepción y conversión de los datos de la API a un formato
definido locamente. En este caso NO creamos constructor
alguno.
*/
export class State {
  private _id!: number;
  name!: string;
  isoCode!: string;
  countryCode!: string;
  latitude!: string;
  longitude!: string;
  country!: Country;

  set id(id: number) {
    this._id = id + 100;
  }
  get id(): number {
    return this._id;
  }
}
