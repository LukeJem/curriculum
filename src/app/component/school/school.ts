import {Component, inject} from '@angular/core';
import {ProfileService} from '../../service/profile-service';
import {Education} from '../../model/models';

@Component({
  selector: 'app-school',
  imports: [],
  templateUrl: './school.html',
  styleUrl: './school.css'
})
export class School {

  profileService = inject(ProfileService);
  educations: Education[] = [];

  constructor() {
    this.educations = this.profileService.getEducations();
  }

}
