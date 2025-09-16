export type SectionId = 'home' | 'about' | 'team' | 'events';

export interface TeamMember {
  name: string;
  title: string;
  degree: string;
  linkedinUrl: string;
  imageUrl: string;
  quote: string;
}

export interface Event {
  title: string;
  description: string;
  imageUrl: string;
}
