import {Component, inject} from '@angular/core';
import {ProfileService} from '../../service/profile-service';
import {TechKnowledge} from '../../model/models';


@Component({
  selector: 'app-skill',
  imports: [
  ],
  templateUrl: './skill.html',
  styleUrl: './skill.css'
})
export class Skill {

  profileService = inject(ProfileService);
  skills: TechKnowledge[];

  constructor() {
    this.skills = this.profileService.getSkills();
  }


}
