
import type { TeamMember, Event } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Shriya Sharma',
    title: 'President',
    degree: 'MS in Computer Science',
    linkedinUrl: 'https://www.linkedin.com/in/shriyasharmacs26/',
    imageUrl: '/public/Shriya.jpg',
    quote: 'GWICS is about building a community where every woman in tech feels seen, heard, and empowered to achieve her dreams.'
  },{
    name: 'Dr. James Geller',
    title: 'Academic Advisor',
    degree: 'Professor, Ying Wu College of Computing',
    linkedinUrl: 'https://www.linkedin.com/in/gwics-njit/',
    imageUrl: '/public/Geller.png',
    quote: 'Guiding the next generation of women leaders in technology is an honor. GWICS plays a vital role in this mission at NJIT.'
  },
  
  {
    name: 'Snehal Nikalje',
    title: 'Vice President',
    degree: 'MS in CyberSecurity',
    linkedinUrl: 'https://www.linkedin.com/in/snehalnikalje/',
    imageUrl: '/public/Snehal Nikalje.jpg',
    quote: 'We rise by lifting others. GWICS provides the platform to connect, learn, and grow together in the vast field of computing.'
  },
  {
    name: 'Nithyashree Raman Sujatha',
    title: 'Secretary',
    degree: 'MS in Data Science',
    linkedinUrl: 'https://www.linkedin.com/in/nithya-shree-raman-sujatha-610663240/',
    imageUrl: '/public/Nithya Shree.jpg',
    quote: 'Being part of GWICS means creating a supportive network that fosters both academic and personal development for women in tech.'
  },
  {
    name: 'Jyothsna Ravi Prakash',
    title: 'Treasurer',
    degree: 'MS in Computer Science',
    linkedinUrl: 'https://www.linkedin.com/in/jyothsna-ravi-prakash-50827b2a2/',
    imageUrl: '/public/jyotsna.jpg',
    quote: 'Empowerment through collaboration is at the heart of GWICS. It’s a privilege to support our members on their journey.'
  },
  {
    name: 'Kaviya Sree R M',
    title: 'Event Coordinator',
    degree: 'MS in Artificial Intelligence',
    linkedinUrl: 'https://www.linkedin.com/in/kaviya-sree-rm/',
    imageUrl: '/public/Kaviya.jpg',
    quote: 'I love bringing people together. At GWICS, we create events that are not just informative but also fun and inspiring.'
  },
  {
    name: 'Ishita Desai',
    title: 'Social Media Coordinator',
    degree: 'MS in Computer Science',
    linkedinUrl: 'https://www.linkedin.com/in/ishitadesai27/',
    imageUrl: '/public/ishita.jpg',
    quote: 'Through social media, we can amplify the voices of women in computing and showcase the incredible work being done at GWICS.'
  }
];

export const UPCOMING_EVENTS: Event[] = [
  {
    title: 'Women Enjoying Bagels',
    description: 'To end the semester on a good note, connecting with women in the university over delicious bagels and coffee.',
    imageUrl: '/public/bagel.png',
  },
  {
    title: 'Cybersecurity Workshop: Beyond the Basics',
    description: 'A hands-on session focusing on the latest trends and tools in artificial intelligence. Bring your laptops!',
    imageUrl: '/public/cnc.jpg',
  },
  {
    title: 'AI Digital Surveillance: Ethics & Tech',
    description: 'Explore the ethical implications and technical aspects of AI in surveillance with industry experts.',
    imageUrl: 'public/ai.jpg',
  },
  {
    title: 'Next Level of Web Development',
    description: 'Dive into advanced frameworks and modern practices for building dynamic, scalable websites.',
    imageUrl: 'https://picsum.photos/seed/web-dev/800/600',
  },
  {
    title: 'Navigating DEI Implications in STEAM',
    description: 'A critical discussion on diversity, equity, and inclusion, and how they apply to the fields of STEAM.',
    imageUrl: 'public/stem.jpeg',
  },
  {
    title: 'De-Stress Before End Sem',
    description: 'A fun, relaxing event with yoga, games, and snacks to help members unwind and prepare for final exams.',
    imageUrl: 'https://picsum.photos/seed/de-stress/800/600',
  }
];

export const PAST_EVENTS: Event[] = [
  {
    title: 'Women Enjoying Bagels',
    description: 'Kicked off the academic year by welcoming new and returning members with an evening of networking and fun.',
    imageUrl: 'public/bagel.png',
  },
  {
    title: 'Interactive Talk',
    description: 'Hosted an inspiring Tech Talk with Angelique Taylor from top tech companies who shared their career journeys and insights.',
    imageUrl: 'public/tech talk.png',
  },
  {
    title: 'Compete with SQL',
    description: 'A friendly competition where members solved coding challenges, sharpened their skills, and won prizes.',
    imageUrl: '/public/sql.jpg',
  },
    {
    title: 'Hackathon',
    description: 'Hackathon for Graduate Students in Computer and Business Majors',
    imageUrl: '/public/hackathon.jpg',
  }
];
