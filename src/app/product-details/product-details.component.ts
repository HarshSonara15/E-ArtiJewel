import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { NavigationService } from '../services/navigation.service';
import { ActivatedRoute } from '@angular/router';
import { Product, Review } from '../models/models';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  imageIndex: number = 1;
  product !: Product;
  reviewControl = new FormControl('');
  showError = false;
  reviewSaved = false;
  otherReviews: Review[] = [];

  // imageChange: number = 1;
  constructor(
    private actviatedRoute: ActivatedRoute,
    private navigationService: NavigationService,
    public utilityService: UtilityService){}

  ngOnInit(): void {
    this.actviatedRoute.queryParams.subscribe((params: any) => {
      this.actviatedRoute.queryParams.subscribe((params: any) => {
        let id = params.id;
        this.navigationService.getProduct(id).subscribe((res: any) => { 
          this.product = res; 
          this.fetchAllReviews();
        });
      })
    });

    
  }  

  submitReview(){
    let review = this.reviewControl.value;

    if (review == '' || review == null) {
      this.showError = true;
      return;
    }

    let userid = this.utilityService.getUser().id;
    let productid = this.product.id;

    this.navigationService.submitReview(userid, productid, review).subscribe((res) => {
        this.reviewSaved = true;
        this.fetchAllReviews();
        this.reviewControl.setValue('');
      });
  } 

  fetchAllReviews() {
    this.otherReviews = [];
    this.navigationService.getAllReviewsOfProduct(this.product.id).subscribe((res: any) => {
      for (let review of res) {
        this.otherReviews.push(review);
      }
    });
  }

}
