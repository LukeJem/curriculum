import {Component, inject} from '@angular/core';
import {ProfileService} from '../../service/profile-service';
import {AboutInfo} from '../../model/models';
import {Information} from '../information/information';

@Component({
  selector: 'app-about',
  imports: [
    Information
  ],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  profileService = inject(ProfileService);
  aboutInfo: AboutInfo;

  constructor() {
    this.aboutInfo = this.profileService.getAboutInfo();
  }





}
