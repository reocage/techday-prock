import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techday-formular',
  templateUrl: './techday-formular.component.html',
  styleUrls: ['./techday-formular.component.scss']
})
export class TechdayFormularComponent implements OnInit {

  hidden: boolean;
  interesse: string;
  vorname: string;
  nachname: string;
  konzerteAb: Date;

  submit() {
    alert("Erfolgreich angemeldet");
    this.interesse = undefined;
    this.vorname = undefined;
    this.nachname = undefined;
    this.konzerteAb = undefined;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
