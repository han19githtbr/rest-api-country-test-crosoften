import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/countryData';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api_country = 'https://restcountries.com/v2';

  constructor(private http: HttpClient){}

  getAllCountries() {
    return this.http.get<Country[]>(`${this.api_country}/all`);
  }

  getCountryByName(name: string) {
    return this.http
      .get<Country[]>(`${this.api_country}/name/${name}`)
      .pipe(map(([res]) => res));
  }

  getCountryByCodes(codes: string[]) {
    if (codes) {
      return this.http.get<Country[]>(
        `${this.api_country}/alpha?codes=${codes.join(',')}`
      );
    } else {
      return of([] as any);
    }
  }
}
