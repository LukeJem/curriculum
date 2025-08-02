export type Profile = {
  firstName: string;
  lastName: string;
  description: string;
  birthday?: string;
  email?: string;
  phone?: string;
}

export  type LinkCode = "GIT_HUB" | "LINKEDIN";

export type Link = {
  url: string;
  description: string;
  code: LinkCode
}

export interface Info {
  description: string
  links: Link[]
}

export interface AboutInfo extends Info {}

export interface ContactInfo extends Info {}

export type Summary = {
  highlights: string[];
}

export type Job = {
  company: string;
  workingPeriod: string;
  location?: string;
  customers?: Job[];
  role: string;
  tasks?: string[];
  toolsFrameworks?: string;
};

export type Education = {
  degree: string;
  university: string;
  thesis: string;
  thesisDescription?: string;
}

export type Publication = {
  authors: string;
  title: string;
  location?: string;
  link: string;
}

export type Certification = {
  name: string;
  authority: string;
  link: string;
}

export type SkillCode = "LANGUAGES" | "FRAMEWORK" | "CLOUD" | "DB" | "WEB_SERVER"
export type TechKnowledge = {
  skillCode: SkillCode;
  name: string;
  technologies: string[]
}

export type LanguageLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type Language = {
  understanding: LanguageLevel;
  speaking: LanguageLevel;
  writing: LanguageLevel;
  certification?: string;
}


