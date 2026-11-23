export interface Article {
  title: string;
  platform: 'Substack' | 'Medium';
  date?: string;
  url: string;
  description: string;
  featured?: boolean;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  additionalRoles?: string;
  responsibilities?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
}

export const PERSONAL_INFO = {
  fullName: "Vincent Kishatin-unimye Adie",
  shortName: "Vincent Adie",
  title: "Content Writer & Copywriter",
  location: "Calabar, Cross River State, Nigeria",
  shortLocation: "Calabar, Nigeria",
  email: "kishaa951@gmail.com",
  phone: "+234 805 922 4970",
  phoneFormatted: "+2348059224970",
  mediumUrl: "https://medium.com/@kishaadie",
  substackUrl: "https://titaestantrums.substack.com",
};

export const WRITING_INTERESTS: string[] = [
  "Long-form Essays",
  "Organizational Behaviour",
  "Workplace Culture",
  "Human-interest Stories",
  "Copywriting",
  "Storytelling",
];

export const ARTICLES: Article[] = [
  {
    title: "There's No Land for Us Beyond the Volga",
    platform: "Substack",
    date: "October 2026",
    url: "https://titaestantrums.substack.com/p/theres-no-land-for-us-beyond-the?utm_source=share&utm_medium=android&r=3ydflz",
    description:
      "A featured long-form essay demonstrating Vincent's interest in historical references, broader perspectives and reflective writing.",
    featured: true,
  },
  {
    title: "Heartstrings 1: Chronicles of Heartbreak",
    platform: "Medium",
    url: "https://medium.com/@kishaadie/if-youve-ever-wondered-how-it-feels-to-be-heartbroken-on-christmas-eve-i-ll-tell-you-how-you-395cbeb70e5d",
    description:
      "A personal storytelling piece exploring heartbreak and emotional experiences through a reflective narrative.",
    featured: false,
  },
  {
    title: "The Ripple Effect of Silence: How Responsiveness Shapes Team Energy and Morale",
    platform: "Medium",
    url: "https://medium.com/@kishaadie/the-ripple-effect-of-silence-how-responsiveness-shapes-team-energy-and-morale-58056e6494d7",
    description:
      "An article exploring workplace communication, responsiveness and the influence of everyday interactions on team energy and morale.",
    featured: false,
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Copywriter (Marketing)",
    organization: "AIESEC in Calabar",
    period: "July 2026 – Present",
    responsibilities: [
      "Write marketing copy and campaign content for the committee's brand and campaigns.",
      "Support marketing communication through clear and audience-focused messaging.",
    ],
  },
  {
    role: "Sales and Account Team Member",
    organization: "AIESEC in Calabar",
    period: "February 2026 – July 2026",
    responsibilities: [
      "Managed more than 10 partner relationships.",
      "Wrote pitches and proposals for corporate partnerships.",
      "Supported partner communication and engagement.",
    ],
  },
  {
    role: "Business Development and Engagement Manager (EWA)",
    organization: "AIESEC in Calabar",
    period: "July 2025 – December 2025",
    responsibilities: [
      "Planned Brand Week.",
      "Planned the SafeSpace mental health initiative.",
    ],
  },
  {
    role: "Organizing Committee President",
    organization: "Global Money Week, AIESEC in Calabar",
    period: "March 2025",
  },
  {
    role: "Operations Team Member",
    organization: "AIESEC in Calabar",
    period: "February 2024 – July 2025",
    additionalRoles: "Business Development Team Member and Account Manager responsibilities",
  },
];

export const EDUCATION: EducationItem = {
  institution: "University of Calabar",
  degree: "B.Sc. Genetics and Biotechnology",
  year: "2026",
};
