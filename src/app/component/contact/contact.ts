import {Component, inject} from '@angular/core';
import {ProfileService} from '../../service/profile-service';
import {ContactInfo} from '../../model/models';
import {Information} from '../information/information';

@Component({
  selector: 'app-contact',
  imports: [
    Information
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  profileService = inject(ProfileService);
  contactInfo: ContactInfo;

  constructor() {
    this.contactInfo = this.profileService.getContactInfo();
  }

}
