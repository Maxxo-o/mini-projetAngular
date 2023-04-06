import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Intervention } from '../intervention';
import { InterventionsService } from '../interventions.service';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-nv-intervention',
  templateUrl: './nv-intervention.component.html',
  styleUrls: ['./nv-intervention.component.scss']
})
export class NvInterventionComponent implements OnInit{

  formulaire!: FormGroup;
  currentIntervention$!: Observable<Intervention>;
  
  constructor(private fb: FormBuilder, private myInterventionservice: InterventionsService, private router: Router) { }
  
  ngOnInit(): void {
    this.formulaire = this.fb.group({
      NomTechnicien: [null,[Validators.required,Validators.minLength(3)]],
      NomClient: [null,[Validators.required,Validators.minLength(3)]],
      adresseClient: [null,[Validators.required,Validators.minLength(3)]],
      marqueModeleC: [null,[Validators.required,Validators.minLength(3)]],
      dateDeMiseEnService: [null,[Validators.required,Validators.minLength(1)]],
      dateDIntervention: [null,[Validators.required,Validators.minLength(1)]],
      descriptionIntervention: [null,[Validators.required]],
      tempsPasseEnM: [null,[Validators.required,Validators.min(1)]],
    },{
      updateOn: 'blur'
    });

    this.currentIntervention$ = this.formulaire.valueChanges.pipe(map(formValue => (
      {
        numeroDeSerie: 0,
        NomTechnicien: formValue.NomTechnicien,
        NomClient: formValue.NomClient,
        adresseClient: formValue.adresseClient,
        marqueModeleC: formValue.marqueModeleC,
        dateDeMiseEnService: formValue.dateDeMiseEnService,
        dateDIntervention: formValue.dateDIntervention,
        descriptionIntervention: formValue.descriptionIntervention,
        tempsPasseEnM: formValue.tempsPasseEnM,
      }
    )));
    
  }
  addIntervention() {
    let nvIntervention: Intervention = {
      numeroDeSerie: 0,
      NomTechnicien: this.formulaire.get('NomTechnicien')?.value,
      NomClient: this.formulaire.get('NomClient')?.value,
      adresseClient: this.formulaire.get('adresseClient')?.value,
      marqueModeleC: this.formulaire.get('marqueModeleC')?.value,
      dateDeMiseEnService: this.formulaire.get('dateDeMiseEnService')?.value,
      dateDIntervention: this.formulaire.get('dateDIntervention')?.value,
      descriptionIntervention: this.formulaire.get('descriptionIntervention')?.value,
      tempsPasseEnM: this.formulaire.get('tempsPasseEnM')?.value,
      
    } 
      
    this.myInterventionservice.newAddIntervention(nvIntervention).pipe(
      tap(() => this.router.navigateByUrl('/catalogue'))  
    ).subscribe();  
  }
  }
  

