import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  introBoxes = [
    {img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-media_library/original/6583e1e1-5412-4c49-9b95-0eb65895234b.jpeg?im_w=720'},
    {img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-media_library/original/811ff0ef-4808-4329-8d07-a12e8008a6a9.jpeg?im_w=720'},
    {img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-active_media/original/e1c01595-f826-43ff-8370-03846f6c99ea.jpg?im_w=720'},
    {img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-active_media/original/cb74ccf9-4e4c-4d64-9fec-e5e64403863c.jpg?im_w=720'},
    {img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-active_media/original/1a9f2a4a-e613-4dfe-b871-1a2ec4841f04.jpg?im_w=720'},
  ];

  card1 = {icon: 'people', title: 'Partecipa a una videochiamata', paragraph: 'Usa Zoom per partecipare dal tuo computer o dispositivo mobile. Una volta effettuata la prenotazione, riceverai un\'email con un link e i dettagli su come partecipare.\n', subtext: 'Mostra altro'};
  card2 = {icon: 'desktop_mac', title: 'Prenota come gruppo privato', paragraph: 'Chiara & Nonna può ospitare gruppi privati di qualsiasi dimensione, fino a 100 persone. Le tariffe per gruppi privati partono da 250€.\n', subtext: ''};

  ingredients = ['Large wood cutting board (even a table!) -- counter top is fine if that\'s all you have', 'Rolling pin', 'Big Knife with a flat blade -- think large cutting knife or a bread knife', '2 cups of "00" grade flour or "Doppio Zero" literally means "Double Zero"', '2 eggs (organic is better for taste)' ];
  constructor() { }

  ngOnInit(): void {
  }

}
