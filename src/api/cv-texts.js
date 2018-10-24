const Languages = [
   {
     id: 'NL',
     name: 'Dutch',
     level: 'Native Speaker',
     Percent: 100,
   },
   {
     id: 'EN',
     name: 'English',
     level: 'Fluent',
     Percent: 90,
   },
   {
     id: 'SE',
     name: 'Swedish',
     level: 'Fluent',
     Percent: 85,
   },
   {
     id: 'FR',
     name: 'French',
     level: 'Basic Understanding',
     Percent: 40,
   },
   {
     id: 'DE',
     name: 'German',
     level: 'Basic Understanding',
     Percent: 40,
   },
   {
     id: 'DK',
     name: 'Danish',
     level: 'Basic Understanding',
     Percent: 30,
   },
   {
     id: 'JP',
     name: 'Japanese',
     level: 'Loading...',
     Percent: 10,
   }
]

const JobExperience = [
  {
    id: 1,
    title: 'Front-End Developer',
    company: 'Virtusa AB',
    description: 'Brian has been responsible for the design and development of secure financial' +
      ' applications for treasuries of large, national and international companies.' +
      ' In this position he has gotten and still gets to further improve his' +
      ' .NET and C# the skills. Brian has dealt with the challenge of translating' +
      ' clients needs and wishes into design and application within a field' +
      ' that is not his area of expertise and is quite foreign to him.',
    startDate: 'Q1 2016',
    endDate: 'Ongoing'
  },
  {
    id: 2,
    title: 'Unit Manager',
    company: 'Gröna Lund',
    description: 'As a unit manager it is important to have a good overview of what' +
      ' is going on and what is or isn’t being done to be able to effectively' +
      ' lead the work group.' +
      ' Brian hase learned a lot about himself, his abilities and how he deals with' +
      ' work tasks, colleagues and guests. He was awarded the title of “Månadens' +
      ' Stjärna” (Star of the Month) and nominated for the award of' +
      ' Rookie of the year during the 2014 season.',
    startDate: 'Q2 2014',
    endDate: 'Q3 2015'
  },
  {
    id: 3,
    title: 'Graphic Designer',
    company: 'De Hollandse Club Stockholm',
    description: 'Brian was responsible for PR and publicity, and the editing and layout of the' +
      ' biannual magazine. As a special project for the 75 year jubilee he' +
      ' created the graphic profile which contained, besides graphic design,' +
      ' (3D) animation.',
    startDate: 'Q1 2014',
    endDate: 'Q1 2019'
  },
  {
    id: 4,
    title: 'Graphic Designer | Webdeveloper',
    company: 'Wåning:ett',
    description: 'Brian ran his own business within graphic design, interaction' +
      ' design, web development and web design. Though he loved' +
      ' the work and the interaction with the clients was very' +
      ' fullfilling, he realized that running his own company was not' +
      ' his thing, since it included so many tasks not related to' +
      ' the actual work that he wants and loves to do.',
    startDate: 'Q1 2013',
    endDate: 'Q4 2014'
  },
  {
    id: 5,
    title: 'Graphic Designer | Webdeveloper',
    company: 'byLO SWEDEN',
    description: "Design of the company’s logo and corporate identity," +
      " development and maintanance of the website, and" +
      " continuous marketing assignments.",
    startDate: 'Q4 2010',
    endDate: 'Q4 2012'
  },
  {
    id: 6,
    title: 'Interaction Designer',
    company: 'Neovici AB',
    description: 'Brian started out at Neovici entering data but presented his' +
      ' skills as an interaction designer, which resulted in a job' +
      ' offer with responsibility of design and development of the' +
      ' interface and user experience of new applications.',
    startDate: 'Q1 2010',
    endDate: 'Q4 2010'
  },
  {
    id: 7,
    title: 'Interaction Designer',
    company: 'Superbus/TUDelft',
    description: "Graduation Project - Design of the personal space and the traveller's" +
      ' experience during their journey with the “Superbus” - a' +
      'concept for public transportation at high speeds.',
    startDate: 'Q3 2007',
    endDate: 'Q2 2008'
  }
]

const Education = [
  {
    id: 1,
    title: 'Architecture',
    level: 'Bachelors Degree (BSc)',
    school: 'Technical University of Delft',
    startDate: 'Q3 1999',
    endDate: 'Q2 2006',
    description: 'Architecture, building and project management, construction and living environment calculations.'
  },
  {
    id: 2,
    title: 'Industrial Design - Design for Interaction',
    level: 'Masters Degree (MSc)',
    school: 'Technical University of Delft',
    startDate: 'Q2 2006',
    endDate: 'Q2 2008',
    description: 'Interface design, user experience, graphic design, product design and user testing.'
  },
  {
    id: 3,
    title: 'IT-Additional Training System Developer .Net',
    level: '',
    school: 'TLexicon',
    startDate: 'Q1 2015',
    endDate: 'Q2 2015',
    description: '.NET1: C# and frond-end web development, application development, testing and project management - .NET2: ASP.NET MVC5.'
  }
]

const Others = [
  {
    id:1,
    title:'Board Member',
    company: 'De Hollandse Club Stockholm',
    startDate: 'Q1 2015',
    endDate: 'Q4 2018',
    description: 'Responsible for PR and publicity, and the development of a professional network in collaboration with The Dutch Chamber of Commerce.',
  },
  {
    id:2,
    title:'Certified Member',
    company: 'Mensa Sweden',
    startDate: 'Q2 2010',
    endDate: '',
    description: 'It is said that a high general intelligence is a very accurate indicator of future work achievements.',
  },
  {
    id:3,
    title:'Self-Fulfilling Project',
    company: 'Total renovation od Terrace House',
    startDate: 'Q2 2008',
    endDate: 'Q2 2009',
    description: 'Brian completed the total renovation of his in The Netherlands where he could put some of the theories learned' +
      ' during his studies into practice. During this period he learned to persist, even through the tougher times - keeping his eye on the target.',
  },
  {
    id:4,
    title:'President of the Board',
    company: 'Student Society Sint Jansbrug',
    startDate: 'Q3 2003',
    endDate: 'Q3 2004',
    description: "As the society's president Brian lead the board meetings as well as the bi-monthly member meetings. During this period he learned" +
      " to resolve conflicts, oversee and lead projects and project groups and speaking in front of large groups of people.",
  },
  {
    id:5,
    title:'Competitive Rower',
    company: 'Student Rowing Club Laga',
    startDate: 'Q3 2002',
    endDate: 'Q3 2005',
    description: 'During the two years as a competitive rower Brian really learned to co-operate with others and to become one with the team' +
      ' and that there is always more left in him to give.',
  }
]

export const getAllLanguages = () => {
  return Languages;
};

export const getAllJobs = () => {
  return JobExperience;
};

export const getAllEducation = () => {
  return Education;
};

export const getAllOthers = () => {
  return Others;
}



export default { Languages, JobExperience, Education, Others, getAllLanguages, getAllJobs, getAllEducation, getAllOthers };
