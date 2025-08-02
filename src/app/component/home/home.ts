import {Component, inject} from '@angular/core';
import {ProfileService} from '../../service/profile-service';
import {Profile} from '../../model/models';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  profileService = inject(ProfileService);
  profileInfo: Profile;

  constructor() {
    this.profileInfo = this.profileService.getProfile();
  }

}
