import { Component, OnInit } from '@angular/core';
import {RouterLink} from '@angular/router';
import "bootstrap-icons/font/bootstrap-icons.css";
import {UtilsService} from '../utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  places;
  boxTitles = [
    {title: 'Case Intere', img: 'https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg'},
    {title: 'Chalet e cottage', img: 'https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg'},
    {title: 'Spazi unici', img: 'https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg'},
    {title: 'Animali domestici accettati', img: 'https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg'},
  ];

  darkBoxTitles = [
    {link: 'experiences', experience: 'concerto_di_meditazione_con_pianoforte_da_parigi', title: 'Esperienze online', subtitle: 'Concerto di meditazione con pianoforte da Parigi', img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1728507-media_library/original/68ab2de3-b0ee-431a-a015-823c860325c9.jpeg?im_w=720'},
    {link: 'experiences', experience: 'pasta_con_le_nonne', title: 'Esperienze Online', subtitle: 'Attività a cui partecipare, ovunque sei.', img: 'https://a0.muscache.com/im/pictures/e81fce5f-2f51-4342-938e-5bc18ae237f4.jpg'},
    {link: 'experiences', experience: 'mangiare_in_modo_zen_per_arricchire_la_vita_quotidiana', title: 'Esperienza', subtitle: 'Filosofia zen e alimentazione cosciente', img: 'https://a0.muscache.com/im/pictures/a0e52bd1-5870-480f-8d29-595d221361bc.jpg'},
  ];

  whiteBoxTitles = [
    {title: 'Diventa un host', img: 'https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg?im_w=720'},
    {title: 'Offri un\'Esperienza online', img: 'https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg?im_w=720'},
    {title: 'Offri un\'Esperienza', img: 'https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg?im_w=720'},
  ];

  constructor(
    private utils: UtilsService
  ) { }

  ngOnInit(): void {
    this.places = this.utils.places;
  }

}
