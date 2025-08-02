import {Component, inject} from '@angular/core';
import {ProfileService} from '../../service/profile-service';
import {Publication} from '../../model/models';

@Component({
  selector: 'app-papers',
  imports: [],
  templateUrl: './papers.html',
  styleUrl: './papers.css'
})
export class Papers {

  profileService = inject(ProfileService);
  publications: Publication[] = [];

  constructor() {
    this.publications = this.profileService.getPublications();
  }

}
