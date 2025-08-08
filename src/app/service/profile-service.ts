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

  getJobsByTerm(searchTerm: string): Job[] {
    const searchTermL = searchTerm.toLowerCase();
    return this.getJobs().filter(job =>{
      return job.company.toLowerCase().includes(searchTermL) ||
              job.workingPeriod.toLowerCase().includes(searchTermL) ||
              job.location?.toLowerCase().includes(searchTermL) ||
              job.tasks?.find(task => task.toLowerCase().includes(searchTermL)) !== undefined ||
              job.role.toLowerCase().includes(searchTermL) ||
              job.toolsFrameworks?.toLowerCase().includes(searchTermL) ||
              job.customers?.find(customer =>
                  customer.company.toLowerCase().includes(searchTermL) ||
                  customer.workingPeriod.toLowerCase().includes(searchTermL) ||
                  customer.toolsFrameworks?.toLowerCase().includes(searchTermL) ||
                  customer.tasks?.find(task => task.toLowerCase().includes(searchTermL)) !== undefined
              )
      }
    );
  }

  getSkillsByTerm(searchTerm: string): TechKnowledge[] {
    const searchTermL = searchTerm.toLowerCase();
    return this.getSkills().filter(techKnowledge => {
      return techKnowledge.name.toLowerCase().includes(searchTermL) ||
        techKnowledge.technologies.find(tech => tech.toLowerCase().includes(searchTermL)) !== undefined;
    });
  }





}
