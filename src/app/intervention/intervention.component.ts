import { Component,Input, OnInit } from '@angular/core';
import { Intervention } from '../intervention';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.scss']
})
export class InterventionComponent implements OnInit {
  @Input() lIntervention!: Intervention;
  uneIntervention!: Intervention; 
  idIntervention!: string;
  constructor() { }

  ngOnInit(): void {
    this.idIntervention = this.route.
    if (this.idIntervention===undefined) {
      this.uneIntervention = this.lIntervention;  
    }
    else {
      this.myCDservice.getCDById(+this.idcd).subscribe(cd => this.unCd = cd);
    }
  }

}

}
