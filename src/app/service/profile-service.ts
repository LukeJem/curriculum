import {Injectable} from '@angular/core';
import {AboutInfo, ContactInfo, Education, Job, Profile, Publication, Summary, TechKnowledge} from '../model/models';
import {
  ABOUT_INFO,
  CAREER_SUMMARY,
  CONTACT_INFO,
  EDUCATIONS,
  EXPERIENCES,
  PROFILE,
  PUBLICATIONS,
  SKILLS
} from './mockJson';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  getProfile(): Profile {
    return PROFILE;
  }

  getAboutInfo(): AboutInfo {
    return ABOUT_INFO;
  }

  getContactInfo(): ContactInfo {
    return CONTACT_INFO;
  }

  getCareerSummary(): Summary {
    return CAREER_SUMMARY;
  }

  getJobs(): Job[] {
    return EXPERIENCES;
  }

  getEducations(): Education[] {
    return EDUCATIONS;
  }

  getPublications(): Publication[] {
    return PUBLICATIONS;
  }

  getSkills(): TechKnowledge[] {
    return SKILLS;
  }

}
