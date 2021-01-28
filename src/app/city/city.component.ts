import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilsService} from '../utils.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  id;
  places;

  constructor(
    private route: ActivatedRoute,
    private utils: UtilsService
  ) { }

  recuperaId = () => {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });
  }

  findPlace = (id) => {
    return this.places.find((place) => place.id == id );
  }

  verificaImportService = () => {
    console.log(this.utils.places);
  }

  ngOnInit(): void {
    this.places = this.utils.places;
    this.recuperaId();
    console.log(this.findPlace(this.id));
    this.verificaImportService();
  }

}
