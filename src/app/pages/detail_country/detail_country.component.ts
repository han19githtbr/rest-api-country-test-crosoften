import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Country, Currency, Language } from 'src/app/models/countryData';
import { tap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail_country',
  templateUrl: './detail_country.component.html',
  styleUrls: ['./detail_country.component.scss']
})
export class Detail_countryComponent implements OnInit {
  country: Observable<Country> | undefined;
  borderCountries: Observable<Country[]> | Observable<any[]> | undefined;
  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.country = this.api.getCountryByName(params['country']).pipe(
        tap((res) => res),

        mergeMap((res) => {
          this.borderCountries = this.api.getCountryByCodes(res.borders);

          return of(res);
        })
      );
    });
  }

  displayCurrencies(currencies: Currency[]) {
    return currencies.map((currency) => currency.name).join(',');
  }

  displayLanguages(languages: Language[]) {
    return languages.map((language) => language.name).join(',');
  }
}
