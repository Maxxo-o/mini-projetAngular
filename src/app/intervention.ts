export class Intervention {
    numeroDeSerie!: number;
    NomTechnicien!: string;
    NomClient!: string;
    adresseClient!: string;
    marqueModeleC!: string;
    dateDeMiseEnService!: Date;
    dateDIntervention!: Date;
    descriptionIntervention!: string;
    tempsPasseEnM!: number;
      
    constructor(NomTechnicien: string, NomClient: string, adresseClient: string, marqueModeleC: string, dateDeMiseEnService: Date,dateDIntervention: Date, descriptionIntervention: string, tempsPasseEnM: number) {
      this.NomTechnicien = NomTechnicien;
      this.NomClient = NomClient;
      this.adresseClient = adresseClient;
      this.marqueModeleC = marqueModeleC;
      this.dateDeMiseEnService = dateDeMiseEnService;
      this.dateDIntervention = dateDIntervention;
      this.descriptionIntervention = descriptionIntervention;
      this.tempsPasseEnM = tempsPasseEnM;
    }
}
