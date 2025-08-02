import {Routes} from '@angular/router';
import {Home} from './component/home/home';
import {JobExperience} from './component/job-experience/job-experience';
import {Skill} from './component/skill/skill';
import {About} from './component/about/about';
import {Contact} from './component/contact/contact';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'experience', component: JobExperience},
  {path: 'skills', component: Skill},
  {path: 'about', component: About},
  {path: 'contact', component: Contact},
];
