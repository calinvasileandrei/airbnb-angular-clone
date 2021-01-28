import { Component, OnInit } from '@angular/core';
import {UtilsService} from '../utils.service';
import {ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  card1 = {icon: 'people', title: 'Partecipa a una videochiamata', paragraph: 'Usa Zoom per partecipare dal tuo computer o dispositivo mobile. Una volta effettuata la prenotazione, riceverai un\'email con un link e i dettagli su come partecipare.\n', subtext: 'Mostra altro'};
  card2 = {icon: 'desktop_mac', title: 'Prenota come gruppo privato', paragraph: 'Chiara & Nonna può ospitare gruppi privati di qualsiasi dimensione, fino a 100 persone. Le tariffe per gruppi privati partono da 250€.\n', subtext: ''};
  experience;

  constructor(
    private route: ActivatedRoute,
    private utils: UtilsService
  ) { }


  retriveParameterId = () => {
    this.route.params.subscribe(param => {
      this.retriveData(param.titleId);
    });
  }

  retriveData = (titleID) => {
    // simple
    // this.experience = this.utils.experiences.find((esperience) => esperience.titleId == titleID);

    // find with lodash
    this.experience = _.find(this.utils.experiences, (e) => e.titleId === titleID);
  }



  ngOnInit(): void {
    this.retriveParameterId();
    console.log('retrived exp: ', this.experience);
  }

}
