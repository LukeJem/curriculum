import {Component, inject} from '@angular/core';
import {ProfileService} from '../../service/profile-service';
import {Job} from '../../model/models';

@Component({
  selector: 'app-job-experience',
  imports: [],
  templateUrl: './job-experience.html',
  styleUrl: './job-experience.css'
})
export class JobExperience {

  profileService = inject(ProfileService);
  jobs: Job[] = [];

  constructor() {
    this.jobs = this.profileService.getJobs()/*.slice(0,1)*/;
  }

}
