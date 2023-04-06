import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Intervention } from './intervention';
import { map, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InterventionsService {

  constructor(private http: HttpClient) { }
  getAllInterventions(): Observable<Intervention[]> {
    return this.http.get<Intervention[]>('http://localhost:3000/Intervention');
  }
  getInterventionById(numeroDeSerie: number): Observable<Intervention> {
    const intervention= this.http.get<Intervention>('http://localhost:3000/Intervention/'+ numeroDeSerie);
    if (intervention!==undefined) {
      return intervention;
    }
    else{
      throw new Error('Intervention non trouvée');
    }
  }

  newAddIntervention(intervention: Intervention): Observable<Intervention> {
    return this.getAllInterventions().pipe(
      map(interventions =>[...interventions].sort((a,b) => a.numeroDeSerie - b.numeroDeSerie)),
      map(interventions_tries => interventions_tries[interventions_tries.length-1]),
      map(intervention_max => (intervention.numeroDeSerie=intervention_max.numeroDeSerie+1)),
      switchMap(()=> this.http.post<Intervention>('http://localhost:3000/Intervention', intervention))
      );
  }
}