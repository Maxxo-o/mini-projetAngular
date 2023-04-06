import { Component,Input, OnInit } from '@angular/core';
import { Intervention } from '../intervention';
import { InterventionsService } from '../interventions.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.scss']
})
export class InterventionComponent implements OnInit {
  @Input() lIntervention!: Intervention;
  uneIntervention!: Intervention; 
  idIntervention!: string;
  constructor(private myInterventionservice: InterventionsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idIntervention = this.route.snapshot.params['numeroDeSerie'];
    if (this.idIntervention===undefined) {
      this.uneIntervention = this.lIntervention;  
    }
    else {
      this.myInterventionservice.getInterventionById(+this.idIntervention).subscribe(Intervention => this.uneIntervention = Intervention);
    }
  }

  

}


