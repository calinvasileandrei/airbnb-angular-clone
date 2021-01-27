import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent implements OnInit {
  @Input() cardData;
  constructor() { }

  ngOnInit(): void {
  }

}
