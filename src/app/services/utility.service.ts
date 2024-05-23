import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Cart, CartItem, Payment, Product, User } from '../models/models';
import { NavigationService } from './navigation.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  changeCart = new Subject();
  
  constructor(private navigationService: NavigationService, private jwt: JwtHelperService, private router: Router) { }

  applyDiscount(price: number, discount: number): number {
    let finalPrice: number = price - price * (discount / 100);
    return finalPrice;
  }

  // JWT Helper Service
  getUser(): User {
    let token = this.jwt.decodeToken();
    let user: User = {
      id: token.id,
      firstName: token.firstName,
      lastName: token.lastName,
      address: token.address,
      mobile: token.mobile,
      email: token.email,
      password: '',
      createdAt: token.createdAt,
      modifiedAt: token.modifiedAt,
    };
    return user;
  }

  setUser(token: string) {
    localStorage.setItem('user', token);
  }  

  isLoggedIn() {
    return localStorage.getItem('user') ? true : false;
  }

  logoutUser() {
    localStorage.removeItem('user');
  }

  addToCart(product: Product) {
    let productid = product.id;
    let userid = this.getUser().id;

    this.navigationService.addToCart(userid, productid).subscribe((res) => {
      if (res.toString() == 'inserted') this.changeCart.next(1);
    });
  }

  calculatePayment(cart: Cart, payment: Payment) {
    payment.totalAmount = 0;
    payment.amountPaid = 0;
    payment.amountReduced = 0;

    for (let cartitem of cart.cartItems) {
      payment.totalAmount += cartitem.product.price;

      payment.amountReduced += cartitem.product.price - this.applyDiscount(cartitem.product.price, cartitem.product.offer.discount);

      payment.amountPaid += this.applyDiscount(cartitem.product.price, cartitem.product.offer.discount);
    }

    if (payment.amountPaid > 50000) payment.shipingCharges = 2000;
    else if (payment.amountPaid > 20000) payment.shipingCharges = 1000;
    else if (payment.amountPaid > 5000) payment.shipingCharges = 500;
    else payment.shipingCharges = 200; 
  }

  calculatePricePaid(cart: Cart) { 
    let pricepaid = 0;
    for (let cartitem of cart.cartItems) {
      pricepaid += this.applyDiscount(cartitem.product.price, cartitem.product.offer.discount);
    }
    return pricepaid.toFixed(2);
  }

  
  // Remove Product from Cart 
  removePfC(product: Product) {
    let productid = product.id;
    let userid = this.getUser().id;

    if (confirm('Are you sure you want to remove product?'))
    this.navigationService.removeFromCart(userid, productid).subscribe((res) => {
      if (res.toString() == 'deleted') {
        window.location.reload();
        this.changeCart.next(-1);
      }
    });
  }

}
