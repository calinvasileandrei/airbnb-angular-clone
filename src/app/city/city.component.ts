import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  identificativo;
  constructor(
    private route: ActivatedRoute
  ) { }

  recuperaId = () => {
    this.route.params.subscribe((params) => {
      this.identificativo = params.id;
    });
  }

  ngOnInit(): void {
    this.recuperaId();
  }

}
