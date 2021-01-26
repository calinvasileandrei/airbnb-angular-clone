import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inlinecard',
  templateUrl: './inlinecard.component.html',
  styleUrls: ['./inlinecard.component.css']
})
export class InlinecardComponent implements OnInit {

  @Input() place;

  constructor() { }

  ngOnInit(): void {
  }

}
