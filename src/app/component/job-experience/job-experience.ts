import {Component, inject} from '@angular/core';
import {ProfileService} from '../../service/profile-service';
import {Job, SearchResult} from '../../model/models';
import {Search} from '../search/search';

@Component({
  selector: 'app-job-experience',
  imports: [
    Search
  ],
  templateUrl: './job-experience.html',
  styleUrl: './job-experience.css'
})
export class JobExperience {

  profileService = inject(ProfileService);
  jobs: Job[] = [];
  filteredJobs: Job[] = [];

  constructor() {
    this.jobs = this.profileService.getJobs();
    this.filteredJobs = this.jobs;
  }

  getExperiences(event: SearchResult) {
    if (event.type === 'JOBS') {
      this.filteredJobs = event.searchRes as Job[];
      //res.forEach((job: Job) => {console.log(job.role)})
    }
  }

}
