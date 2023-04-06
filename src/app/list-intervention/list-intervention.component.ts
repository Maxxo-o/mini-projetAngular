import { Component,OnInit } from '@angular/core';
import { InterventionsService } from '../interventions.service';
import { Intervention } from '../intervention';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-intervention',
  templateUrl: './list-intervention.component.html',
  styleUrls: ['./list-intervention.component.scss']
})
export class ListInterventionComponent implements OnInit {
  listIntervention$!: Observable<Intervention[]>;

  constructor(private myInterventionservice: InterventionsService) { }

  ngOnInit(): void {
    this.listIntervention$ = this.myInterventionservice.getAllInterventions();
  }

}


