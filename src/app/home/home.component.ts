import { Component, OnInit} from '@angular/core';
import { Product, SuggestedProduct } from '../models/models';
import { NavigationService } from '../services/navigation.service';
import { UtilityService } from '../services/utility.service';
import { url } from 'inspector';
import { userInfo } from 'os';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  // Slider Images 
  sliderimages = [
    {
      imgSrc: '/assets/img/Slider/Slider-1.jpg',
      imgAlt: 'Jewellery',
    },
    {
      imgSrc: '/assets/img/Slider/Slider-2.jpg', 
      imgAlt: 'Jewellery',
    },
    {
      imgSrc: '/assets/img/Slider/Slider-3.jpg',
      imgAlt: 'Jewellery',
    },
    {
      imgSrc: '/assets/img/Slider/Slider-4.jpg',
      imgAlt: 'Jewellery',
    },
    {
      imgSrc: '/assets/img/Slider/Slider-5.jpg',
      imgAlt: 'Jewellery',
    },
  ];


  // Banner Images 
  suggestedProducts: SuggestedProduct[] = [
    {
      banerimage: 'Banner/Banner-1.png',
      category: {
        id: 0,
        category: 'Diamond',
        subCategory: 'Necklace',
      },
    },
    {
      banerimage: 'Banner/Banner-2.png',
      category: {
        id: 1,
        category: 'Gold',
        subCategory: 'Necklace',
      },
    },
    {
      banerimage: 'Banner/Banner-3.png',
      category: {
        id: 1,
        category: 'Silver',
        subCategory: 'Necklace',
      },
    },
  ]
  constructor(private navigationService: NavigationService, public utilityService: UtilityService) { }

  ngOnInit(): void {
  }
  
}
