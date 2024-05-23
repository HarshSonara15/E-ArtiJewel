import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private router: Router ){}
   homepage() {
    this.router.navigateByUrl('/home');
    // window.scrollTo(0, 0); 
    document.documentElement.scrollTop = 0;
   } 
}
