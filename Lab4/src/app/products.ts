export interface Product {
  id: number;
  name: string;
  description: string;
  link: string;
  imageLink: string;
  rating: number;

}

export const products = [
  {
    id: 1,
    name: 'Beats Solo3 Wireless On-Ear Headphones',
    link: 'https://www.amazon.com/Beats-Solo3-Wireless-Ear-Headphones/dp/B07YVYZ8T5/ref=sr_1_4?c=ts&keywords=On-Ear+Headphones&qid=1647029619&s=aht&sr=1-4&ts_id=12097480011',
    description:
      'Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip',
    imageLink:
      'https://m.media-amazon.com/images/I/51QxA-98Q+L._AC_SL1000_.jpg',
    rating: 4.3,
  },
  {
    id: 2,
    name: 'Oculus Quest 2',
    link: 'https://www.amazon.com/Oculus-Quest-Advanced-All-One-Virtual/dp/B09B8DQ26F/ref=Oct_d_otopr_468642?pd_rd_i=B09B8DQ26F&pd_rd_r=e1030a7a-9e73-4763-8b52-fe1b18e7d127&pd_rd_w=OaTAV&pd_rd_wg=qmfGM&pf_rd_p=a9721c24-ab67-4cc5-95a4-a0b0fafa4feb&pf_rd_r=3HJFFCMSWC3Z48W7H2G1&th=1',
    description:
      'Oculus Quest 2 is a virtual reality headset — most advanced all-in-one VR system yet.',
    imageLink: 'https://m.media-amazon.com/images/I/61kwRNPtMpL._SL1500_.jpg',
    rating: 4.8,
  },
  {
    id: 3,
    name: '100 Pack Disposable Face Masks, 3 Ply Filter Protection Black Disposable Face Masks',
    link: 'https://www.amazon.com/Black-Disposable-Face-Masks-Protection/dp/B09B6V9Q8J',
    description:
      '100pcs disposable face masks in each package. Ziplock package bag design is great to take with you on the go.',
    imageLink: 'https://m.media-amazon.com/images/I/71FIeKwQ40L._SL1500_.jpg',
    rating: 4,
  },
  {
    id: 4,
    name: 'Canon EOS R6 Full-Frame Mirrorless Camera with 4K Video',
    link: 'https://www.amazon.com/dp/B08BVT9CK2/ref=s9_acsd_otopr_hd_bw_b1B76_c2_x_1_t?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-2&pf_rd_r=AHX49J5HYJ33C7A7AEAD&pf_rd_t=101&pf_rd_p=cfeb90af-4c28-4a4b-9ea9-a8ace453d07e&pf_rd_i=281052',
    description:
      'Full-Frame CMOS Senor, DIGIC X Image Processor, Dual UHS-II SD Memory Card Slots, and Up to 12 fps with Mechnical Shutter, Body Only, Black',
    imageLink:
      'https://m.media-amazon.com/images/I/81HwzslD2oL._AC_SL1500_.jpg',
    rating: 4.5,
  },
  {
    id: 5,
    name: 'McAfee Total Protection 2022 | 3 Device | Antivirus Internet Security Software | VPN, Password Manager & Dark Web Monitoring Included',
    link: 'https://www.amazon.com/McAfee-Total-Protection-Device-Activation/dp/B07CCK6KV5/ref=sr_1_23?qid=1647033110&s=software-intl-ship&sr=1-23',
    description:
      'AWARD WINNING ANTIVIRUS: rest easy knowing McAfee’s protecting you from the latest threats.PROTECT YOUR IDENTITY:  We will monitor your life online, from bank account numbers, credit cards, to your emails and more.BROWSE CONFIDENTLY AND PRIVATELY: Secure VPN keeps your info safe from prying eyes.',
    imageLink:
      'https://m.media-amazon.com/images/I/61Dd-4MnIzL._AC_SL1475_.jpg',
    rating: 4.6,
  },
  {
    id: 6,
    name: 'Window 11 Pro USB | English | 1 PC | 2022 Version | New',
    link: 'https://www.amazon.com/Window-USB-English-2022-Version/dp/B09Q91HTZ2/ref=sr_1_14?qid=1647033101&s=software-intl-ship&sr=1-14',
    description:
      'Windows 11 Pro Bundle: USB Flash and License key.Bring balance to your desktop. Organize Windows with Snap Assist.Quickly organize open apps.Keep your files protected and backed up.The latest in PC gaming performance.Media : USB Flash Drive',
    imageLink:
      'https://m.media-amazon.com/images/I/51hTCJRMSIL._AC_SL1500_.jpg',
    rating: 4.8,
  },
  {
    id: 7,
    name: 'Multipet Lambchop Plush Dog Toy 10 with Squeaker',
    link: 'https://www.amazon.com/Multipet-Plush-Dog-Toy-Lambchop/dp/B003XVYKVI/ref=sr_1_17?qid=1647032476&s=pet-supplies&sr=1-17&th=1',
    description:
      'Shari Lewis classic and beloved lamb is adored by dogs.Extra soft plush exterior is great for cuddling.Includes squeaker for playtime fun.10 regular size dog toy.Pet should be supervised while playing.',
    imageLink:
      'https://m.media-amazon.com/images/I/81O7mf19NeL._AC_SL1500_.jpg',
    rating: 3.2,
  },
  {
    id: 8,
    name: 'PetSafe Stainless 360 Pet Fountaino',
    link: 'https://www.amazon.com/PetSafe-Drinkwell-Multi-Pet-Stainless-Fountain/dp/B002SB91QS/ref=sr_1_1_sspa?qid=1647032476&s=pet-supplies&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE1N1NTNkhYWkJTNFomZW5jcnlwdGVkSWQ9QTA1NzY5NjIyU0UwUEM2TVFHOEFXJmVuY3J5cHRlZEFkSWQ9QTA2OTIyMjcxRDJKOERKMUgwNFhEJndpZGdldE5hbWU9c3BfYXRmX2Jyb3dzZSZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
    description:
      '1 Gallon (128 oz) Dog and Cat Water Fountain - Water Filters Remove Hair - Water Dispenser Entices Pets to Drink - Customizable Cat and Dog Water Bowl Dispenser',
    imageLink:
      'https://m.media-amazon.com/images/I/81+kxj3V0XL._AC_SL1500_.jpg',
    rating: 5,
  },
  {
    id: 9,
    name: 'ANGRY ORANGE Pet Odor Eliminator for Strong Odor - Citrus Deodorizer for Dog or Cat Urine Smells on Carpet, Furniture & Floors',
    link: 'https://www.amazon.com/Odor-Eliminator-Pet-Carpet-Deodorizer/dp/B07N316V8C/ref=lp_16225013011_1_3',
    description:
      'Powerful - A little goes a long way with the Angry Orange pet odor eliminator for home use. It’s a carpet deodorizer that targets strong, lingering smells at the source and destroys them.',
    imageLink:
      'https://m.media-amazon.com/images/I/61hpPlNukcL._AC_SL1500_.jpg',
    rating: 4.0,
  },
  {
    id: 10,
    name: 'Bona Hardwood Floor Cleaner Refill, 128 Fl Oz',
    link: 'https://www.amazon.com/Bona®-Hardwood-Floor-Cleaner-Refill/dp/B000ARPVIY',
    description:
      'Ready-to-use economy size refill.Splashless technology ensures a smoother pour.Waterbased cleaning formula dries fast, is residue-free, and safer for people, pets and the planet.',
    imageLink:
      'https://m.media-amazon.com/images/I/71GE+J9MwFS._AC_SL1500_.jpg',
    rating: 4.9,
  },

  // {
  //   id: 2,
  //   name: 'Phone Mini',
  //   price: 699,
  //   description: 'A great phone with one of the best cameras',
  // },
  // {
  //   id: 3,
  //   name: 'Phone Standard',
  //   price: 299,
  //   description: '',
  // },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
