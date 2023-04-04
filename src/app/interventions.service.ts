import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InterventionsService {

  constructor() { }
  getAllInterventions(): Observable<Intervention[]> {
    return this.http.get<Intervention[]>(this.url);
  }
  getInterventionById(id: number): Observable<Intervention> {
    return this.http.get<Intervention>(this.url + "/" + id);
  }
}
