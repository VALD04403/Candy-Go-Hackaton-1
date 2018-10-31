import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BonbonService {

  tabenergy: any;
  score = 0;

  constructor(private service: HttpClient) { }
  readAll(): Observable<any> {
    return this.service.get<any>('https://fr-en.openfoodfacts.org/category/candies.json');
  }

  readById(id: string): Observable<any> {
    return this.service.get<any>(`https://fr-en.openfoodfacts.org/category/candies/1.json`);
  }

  totalEnergy(gain) {
    this.score = this.score + gain;
  }

}
