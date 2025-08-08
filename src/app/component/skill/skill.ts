import {Component, inject} from '@angular/core';
import {ProfileService} from '../../service/profile-service';
import {SearchResult, TechKnowledge} from '../../model/models';
import {Search} from '../search/search';


@Component({
  selector: 'app-skill',
  imports: [
    Search
  ],
  templateUrl: './skill.html',
  styleUrl: './skill.css'
})
export class Skill {

  profileService = inject(ProfileService);
  skills: TechKnowledge[] = [];
  filteredSkills: TechKnowledge[] = [];

  constructor() {
    this.skills = this.profileService.getSkills();
    this.filteredSkills = this.skills;
  }

  getSkills(event: SearchResult) {
    if (event.type === 'SKILLS') {
      this.filteredSkills = event.searchRes as TechKnowledge[];
    }
  }




}
