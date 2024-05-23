import { Component, Input } from '@angular/core';
import { Slide } from '../models/models';



@Component({
  selector: 'app-touch-slider',
  templateUrl: './touch-slider.component.html',
  styleUrl: './touch-slider.component.css'
})

export class TouchSliderComponent {

  @Input() sliderimages: Slide[]=[];

  selectedIndex = 0;

  showPrev (i:number) {
    if(this.selectedIndex > 0) {
      this.selectedIndex = i - 1;
    }
  }

  showNext (i:number) {
    if(this.selectedIndex < this.sliderimages.length - 1) {
      this.selectedIndex = i + 1;
    }
  }

}
