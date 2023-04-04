import { Component,Input, OnInit } from '@angular/core';
import { Intervention } from '../intervention';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.scss']
})
export class InterventionComponent implements OnInit {
  uneIntervention!: Intervention; 
  idIntervention!: string;
  constructor() { }

  ngOnInit(): void {
  }

}

}
