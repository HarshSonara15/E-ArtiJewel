import { Component, Input, OnInit } from '@angular/core';
import { Cart, Payment, Product } from '../models/models';
import { UtilityService } from '../services/utility.service';
import { NavigationService } from '../services/navigation.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  @Input() view: 'grid' | 'list' | 'currentcartitem' | 'previouscartitem' = 'grid';
  @Input() product: Product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    quantity: 0,
    productCategory: {
      id: 0,
      category: '',
      subCategory: '',
    },
    offer: {
      id: 0,
      title: '',
      discount: 0,
    },
    imageName: '',
  };

  constructor(public utilityService: UtilityService, private navigationService: NavigationService) { }

  ngOnInit(): void {
  }
 
}
