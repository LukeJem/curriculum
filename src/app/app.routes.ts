import {Routes} from '@angular/router';
import {Home} from './component/home/home';
import {JobExperience} from './component/job-experience/job-experience';
import {Skill} from './component/skill/skill';
import {About} from './component/about/about';
import {Contact} from './component/contact/contact';
import {environment} from '../environments/environment';

export const routes: Routes = [
  {path: '', component: Home},
  {path: environment.prefixPath + 'experience', component: JobExperience},
  {path: environment.prefixPath + 'skills', component: Skill},
  {path: environment.prefixPath + 'about', component: About},
  {path: environment.prefixPath + 'contact', component: Contact},
];
