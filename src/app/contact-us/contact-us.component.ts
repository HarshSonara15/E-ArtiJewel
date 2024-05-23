import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UtilityService } from '../services/utility.service';
import { NavigationService } from '../services/navigation.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  emailcontrol = new FormControl('');
  contactmsgControl = new FormControl('');
  showError = false;
  msgSent = false;

  constructor(public utilityService: UtilityService, private navigationService: NavigationService) { }

  ngOnInit(): void {
    // For Fetching current user's email address
    const currentUser = this.utilityService.getUser(); // Assuming you have a method to get the current user
    if (currentUser) {
      this.emailcontrol.setValue(currentUser.email);
    }
  }

  submitmsg() {
    let contactmsg = this.contactmsgControl.value;
    let userEmail = this.utilityService.getUser().email;

    if (contactmsg == '' || contactmsg == null) {
      this.showError = true;
      return;
    }

    let userid = this.utilityService.getUser().id;

    this.navigationService.submitContactUs(userid, contactmsg, userEmail).subscribe((res: any) => {
      this.msgSent = true;

      setTimeout(() => {
        this.contactmsgControl.setValue('');
        this.msgSent = false;
      }, 3000);
    });

  }
}
