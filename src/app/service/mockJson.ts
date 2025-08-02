import {
  AboutInfo,
  ContactInfo,
  Education,
  Job,
  Profile,
  Publication,
  Summary,
  TechKnowledge
} from '../model/models';

export const PROFILE: Profile = {
  firstName: "Luca",
  lastName: "Bolzani",
  description: "I'm a software engineer passionate about technology. My main focus is backend development, but as you can see, I also do some UI work."

}

export const CAREER_SUMMARY: Summary = {
  highlights: [
    "Highlight 1",
    "Highlight 2",
  ]
}

export const ABOUT_INFO: AboutInfo = {
  description: "I've developed this website using Angular. You can find the complete source code on my GitHub account.",
  links: [
    {
      url: "https://github.com/LukeJem/cv-angular",
      description: "GitHub",
      code: "GIT_HUB"
   },
  ]
}

export const CONTACT_INFO: ContactInfo = {
  description: "If you have any questions or need more information, you can contact me on LinkedIn.",
  links: [
    {
      url: "https://www.linkedin.com/in/luca-bolzani-73928a9/",
      description: "LinkedIn",
      code: "LINKEDIN"
    },
  ]
}


export const EXPERIENCES: Job[] = [
  {
    company: "Luxembourg Centre for System Biomedicine",
    workingPeriod: "June 2020 – now",
    location: "Luxembourg",
    role: "Senior Software Engineer – R&D specialist",
    tasks: [
      "Lead the development of a web-based platform for visualization and collaborative analysis of heterogeneous data sets, primarily targeting clinical and experimental sources (Springboot 3, Java 21, VueJs (TypeScript), ElasticSearch, Postgres, Keycloak, microservices, Kubernetes/Openshift)",
      "Chatbot for web application. LLM integration using RAG approach. (LLMA 3.1, Ollama, Spring-AI, Elasticsearch, VueJs)",
      "Designed and implemented ETLs for different standards as OMOP and VCF",
      "Working with SCRUM methodology"
    ],
    toolsFrameworks: "Redis, HELM, Docker, Maven, SonarQube, Nexus, Tailwind, Gitlab, Git"
  },
  {
    company: "Oply",
    workingPeriod: "April 2017 – March 2020",
    location: "Luxembourg",
    role: "Senior Software Engineer",
    tasks: [
      "Develop and maintaining backend software platform (Springboot, WildFly, microservices)",
      "Integration of several tools and framework: Keycloak, Firebase, Segment, AWS",
      "Optimising trip scheduling using machine learning approach (Spark, Scikit)",
      "Custom implementation of car sharing module in Matsim and Silo (large scale agent based transport simulator) on HPC Luxembourg",
      "Working with SCRUM methodology"],
    toolsFrameworks: "Pandas, Numpy, Docker, MySql, MongoDB, SonarQube, Maven, Sbt, Mockito,Jenkins, git, Jira"
  },
  {
    company: "Adneom",
    workingPeriod: "September 2014 –March 2017",
    location: "Luxembourg",
    role: "Consultant - Software Engineer",
    customers: [
      {
        company: "Cardif Lux Vie (BNP Paribas Group)",
        workingPeriod: "3 months",
        role: "Software Engineer",
        tasks: [
          "Develop a new web based platform in Angular (Typescript), Bootstrap and Spring boot",
          "Batch processes developed in Java."
        ],
        toolsFrameworks: "Ibatis, Junit, Maven, Db2, Jenkins, Sql Server, git, XSLT, WebSphere, WebStorm,RAD IBM, Jira"
      },
      {
        company: "Société Générale Securities Services",
        workingPeriod: "1 year and 4 months",
        role: "Software Engineer",
        tasks: [
          "Design and development of software to integrate SWIFT messages from different countries (France, UK, Luxembourg, Ireland, Italy) inside a new centralized application developed by Société Générale. (Java, Xgen, SWT)",
          "Design and development of software to integrate fax orders inside Société Générale transfert agent platform (Java 8, REST/SOAP, Struts2, Javascript, Hibernate)",
          "Writing technical documentation for Société Générale Bangalore IT development team",
          "Software specs: UML",
          "Code reviewing for Société Générale Bangalore IT development team",
          "Working with SCRUM methodology"
        ],
        toolsFrameworks: "Jsp, Junit, Jenkins, XL Deploy, XSLT, SonarQube, Nexus, Maven, Eclipse, Git, Oracle, Jasper Report, Talend, Tomcat, Apache cxf, Jira",
      },
      {
        company: "Cardif Lux Vie (BNP Paribas Group)",
        workingPeriod: "1 year",
        role: "Software Engineer",
        tasks: [
          "New module for simulations of redemption’s contracts. Integration inside a web-based application, using Adobe Flex and Java",
          "ENTRATEL platform integration. Design and development both of software and database, using Java. Creation, parsing and storage of entratel’s messages",
          "Integration of a new module for FATCA auto certification (in Adobe Flex, Java, Visual Rules)",
          "Web services (SOAP) to integrate different applications in the company’s network",
          "Standalone application in Swing",
          "Maintaining software applications, bug tracking by Jira"
        ],
        toolsFrameworks: "Jsp, Ibatis, Junit, Jenkins, Maven, Db2, Sql Server, SVN, XSL, WebSphere, RAD IBM, Jira"
      },
    ]
  },
  {
    company: "FIA  Asset Management S.A.",
    workingPeriod: "August 2012 – August 2014",
    location: "Luxembourg",
    role: "Software Engineer",
    tasks: [
      "Development and maintaining company software applications (web-based applications in GWT and JSP)",
      "SWIFT platform integration; Database and software design using JAVA and JPA; Parsing and storage swift messages",
      "Bloomberg platform integration; Software development (in C# and JAVA) for the connection with internal applications",
      "Evaluation of portfolios performance and report generation; Integration into the web-based application and real time calculation",
      "Desktop application for financial statistical analysis (in C# and OCTAVE)",
    ]
  },
  {
    company: "Digital Storm S.r.l.",
    workingPeriod: "September 2011 - April 2012",
    location: "Milan",
    role: "IT Developer, StreamServe Programmer",
    tasks: [
      "Programming by StreamServe platform",
      "Development of desktop applications (in DELPHI) to integrate the StreamServe platform"
    ]
  },
  {
    company: "Epeitaliana S.r.l.",
    workingPeriod: "November 2009 - December 2010",
    location: "Milan",
    role: "Web Developer",
    tasks: ["Design and development of a Content Management Systems for company website, JSP/Servlet technology"]
  },
]

export const EDUCATIONS: Education[] = [
  {
    degree: "Degree",
    university: "University",
    thesis: "Thesis title"
  },
]

export const PUBLICATIONS: Publication[] = [
  {
    authors: "Authors",
    title: "Paper title",
    location: "Paper presentation",
    link: "link"
  }
]

export const SKILLS: TechKnowledge[] = [
  {
    skillCode: "LANGUAGES",
    name: "Programming languages",
    technologies: [
      "Java",
      "SQL",
      "Matlab/Simulink",
      "Scala",
      "C",
      "ActionScript",
      "Typescript/Javascript",
      "Python"
    ]
  },
  {
    skillCode: "FRAMEWORK",
    name: "Frameworks",
    technologies: [
      "Jpa / Hibernate",
      "Maven",
      "Sbt",
      "Spring Boot",
      "Play",
      "Bootstrap / Tailwind",
      "Ionic",
      "Angular / VueJs",
      "Apache Spark",
      "SciKit / Pandas / Numpy"
    ]
  },
  {
    skillCode: "CLOUD",
    name: "Orchestrators - Claude",
    technologies: ["Kubernetes/ Openshift", "AWS"]

  },
  {
    skillCode: "DB",
    name: "Databases",
    technologies: [
      "Postgres",
      "MicrosoftSQL",
      "Oracle",
      "Mongo DB",
      "ElasticSearch",
      "MySQL",
      "Redis",
      "DB2"
    ]
  },
  {
    skillCode: "WEB_SERVER",
    name: "Web Servers",
    technologies: [
      "Apache Tomcat",
      "Web Sphere",
      "WildFly",
      "Netty"
    ]
  }
]
