import { Component, OnInit } from '@angular/core';
import {RouterLink} from '@angular/router';
import "bootstrap-icons/font/bootstrap-icons.css";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  places = [
    {id: 1, city: 'Rome', distance: '1', img: '/assets/images/icon-card.jpg'},
    {id: 2, city: 'Montalto', distance: '2', img: '/assets/images/icon-card.jpg'},
    {id: 3, city: 'Ovindoli', distance: '1', img: '/assets/images/icon-card.jpg'},
    {id: 4, city: 'Tarquinia', distance: '1.4', img: '/assets/images/icon-card.jpg'},
    {id: 5, city: 'Viterbo', distance: '2', img: '/assets/images/icon-card.jpg'},
    {id: 6, city: 'Bari', distance: '8', img: '/assets/images/icon-card.jpg'},
    {id: 7, city: 'Lecce', distance: '7', img: '/assets/images/icon-card.jpg'},
    {id: 8, city: 'Catanzaro', distance: '10', img: '/assets/images/icon-card.jpg'},
  ];
  boxTitles = [
    {title: 'Case Intere', img: 'https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg'},
    {title: 'Chalet e cottage', img: 'https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg'},
    {title: 'Spazi unici', img: 'https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg'},
    {title: 'Animali domestici accettati', img: 'https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg'},
  ];

  darkBoxTitles = [
    {title: 'Esperienze online', subtitle: 'Viaggia per il mondo senza uscire di casa.', img: 'https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg?im_w=720'},
    {link: 'experiences', title: 'Esperienze', subtitle: 'Attività a cui partecipare, ovunque sei.', img: 'https://a0.muscache.com/im/pictures/e81fce5f-2f51-4342-938e-5bc18ae237f4.jpg?im_w=720'},
    {title: 'Avventure', subtitle: 'Gite di più giorni con vitto e alloggio', img: 'https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=720'},
  ];

  whiteBoxTitles = [
    {title: 'Diventa un host', img: 'https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg?im_w=720'},
    {title: 'Offri un\'Esperienza online', img: 'https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg?im_w=720'},
    {title: 'Offri un\'Esperienza', img: 'https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg?im_w=720'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
