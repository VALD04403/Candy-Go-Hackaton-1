import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddresseService {


  constructor(private service: HttpClient) { }
  readAll(): Observable<any> {
    return this.service.get<any>('https://api-adresse.data.gouv.fr/search/?q=tours&postcode=37000&limit=50');
  }

}
