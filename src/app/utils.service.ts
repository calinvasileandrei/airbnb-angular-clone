import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  test = 'valore di prova';
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

  experiences = [
    { titleId: 'pasta_con_le_nonne',
      starsRating: 4.7,
      totalStarts: 1070,
      title: 'Pasta con le nonne', place: 'Palombara Sabina, Italia ',
      description: 'Italy means Pasta and ... Grandmas!\n' +
        '\n' +
        'Travel with us across the Grandma\'s kitchen around Italy to learn the authentic traditional recipes.\n' +
        '\n' +
        'There will be 5 crazy grandmas, their granddaughters and their entire families ready to welcome you in their own home... like you’re there, minus the jet lag!\n' +
        '\n' +
        'Check our schedule:\n' +
        'Monday- Trofie with Pistachio pesto (vegan)\n' +
        'Tuesday - Fettuccine with Ragu\n' +
        'Wednesday…',
      itemsNeeded: [
        'Large wood cutting board (even a table!) -- counter top is fine if that\'s all you have',
        'Rolling pin',
        'Big Knife with a flat blade -- think large cutting knife or a bread knife',
        '2 cups of "00" grade flour or "Doppio Zero" literally means "Double Zero"',
        '2 eggs (organic is better for taste)'
      ],
      introBoxes: [
        {img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-media_library/original/6583e1e1-5412-4c49-9b95-0eb65895234b.jpeg?im_w=720'},
        {img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-media_library/original/811ff0ef-4808-4329-8d07-a12e8008a6a9.jpeg?im_w=720'},
        {img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-active_media/original/e1c01595-f826-43ff-8370-03846f6c99ea.jpg?im_w=720'},
        {img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-active_media/original/cb74ccf9-4e4c-4d64-9fec-e5e64403863c.jpg?im_w=720'},
        {img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-active_media/original/1a9f2a4a-e613-4dfe-b871-1a2ec4841f04.jpg?im_w=720'},
      ]
    },
    { titleId: 'mangiare_in_modo_zen_per_arricchire_la_vita_quotidiana',
      starsRating: 4.98,
      totalStarts: 172,
      title: 'Mangiare in modo zen per arricchire la vita quotidiana', place: '東京, Giappone',
      description: 'Learn how to find inner calm and connect yourself by slowing down eating/\n' +
        'Are you looking for an activity that helps to enjoy every bite by learning to access new ways of eating?\n' +
        '\n' +
        'During this experience, I will take you on a 1-hour journey of eating meditation ' +
        'that will bring you peaceful and joyful energy.\n' +
        '\n' +
        'This experience is structured in three parts.\n' +
        'First, we will meet online.\n' +
        'This experience begins with an…',
      itemsNeeded: [
        'Your meal or snacks to join mindful eating session (anything to eat is fine but you may feel more comfortable if you bring something healthy…',
      ],
      introBoxes: [
        {img: 'https://a0.muscache.com/im/pictures/a0e52bd1-5870-480f-8d29-595d221361bc.jpg?im_w=720'},
        {img: 'https://a0.muscache.com/im/pictures/ce019edc-63d2-4e29-ad9e-2509696fb2e2.jpg?im_w=720'},
        {img: 'https://a0.muscache.com/im/pictures/20c27c24-4461-4735-8921-62d88a008037.jpg?im_w=720'},
        {img: 'https://a0.muscache.com/im/pictures/4ba4e416-2825-4648-a95b-20e65d4b120c.jpg?im_w=720'},
        {img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1685988-media_library/original/61359748-b52d-4137-a545-1e66ba549066.jpeg?im_w=720'},
      ]
    },
    { titleId: 'concerto_di_meditazione_con_pianoforte_da_parigi',
      starsRating: 4.99,
      totalStarts: 343,
      title: 'Concerto di meditazione con pianoforte da Parigi', place: 'Parigi, Francia',
      description: '⭐️✨ Airbnb\'s Top Wellness Experience 300+ 5-star reviews. Customisation, short sessions of 15- or 30-minutes, special occasions, date nights, new date/time requests: just send a message!\n' +
        '\n' +
        'Immerse yourself into a heart-opening meditative journey across calming and luxurious soundscapes and meditation guided performed by concert pianist Bea on her majestic 9\' (274cm) Hamburg Steinway concert grand piano live from her living room in Pari…',
      itemsNeeded: [
        'Everyone welcome. No previous meditation experience needed.',
        'Bring your favourite poem or intention for yourself, your family, friends, community and the world',
        'Bring your whole self ready to enjoy the beauty of music, poetry and an intimate group of people joining from all over world',
        'NOTE: There are quiet musical moments that work better with headphones',
        'Connect with audio and video so you can fully engage'

      ],
      introBoxes: [
        {img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1728507-media_library/original/68ab2de3-b0ee-431a-a015-823c860325c9.jpeg?im_w=720'},
        {img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1728507-media_library/original/0e0896ce-2f70-4200-b702-dc369b38e6d9.jpeg?im_w=720'},
        {img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1728507-media_library/original/96bc32e8-ed7f-4506-bfad-f72f20c7fdd7.jpeg?im_w=720'},
        {img: 'https://a0.muscache.com/im/pictures/b372f7c7-e345-4286-8d22-6b94c7d71655.jpg?im_w=720'},
        {img: 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1728507-media_library/original/3c96a585-8c7a-4708-906a-d721e22c06bb.jpeg?im_w=720'},
      ]
    }
  ];
  constructor() { }
}
