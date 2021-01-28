import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() boxChild;
  @Input() notrounded;
  @Input() square;
  constructor() { }

  generateCustomClass = () => {
    if (this.notrounded){
      return 'image-card square-card';
    }else{
      return 'image-card-rounded square-card';
    }
  }

  ngOnInit(): void {
  }

}
