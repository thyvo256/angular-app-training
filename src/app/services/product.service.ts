import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

   }

   fetchProduct(): Observable<Object> {
    return this.http.get('/assets/data/data.json');
  }
}
