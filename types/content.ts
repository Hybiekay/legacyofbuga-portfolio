export interface StatItem {
    value: string;
    label: string;
    icon: string;
}

export interface ValueItem {
    title: string;
    description: string;
    icon: string;
}

export interface JourneyItem {
    year: string;
    title: string;
    description: string;
}

export interface ExpertiseItem {
    category: string;
    skills: string[];
    level: number;
}

export interface CertificationItem {
    name: string;
    issuer: string;
    year: string;
}

export interface AboutData {
    name: string;
    title: string;
    tagline: string;
    description: string;
    bio: string;
    mission: string;
    image: string;
    stats: StatItem[];
    values: ValueItem[];
    journey: JourneyItem[];
    expertise: ExpertiseItem[];
    certifications: CertificationItem[];
    cta: {
        primary: string;
        secondary: string;
        contact: string;
    };
}

export interface ContentData {
    about: AboutData;

    social: SocialData; // Add this line
}


export interface SocialPlatform {
    name: string;
    icon: string;
    url: string;
    color: string;
    description: string;
    tooltip: string;
}

export interface FloatingButtonConfig {
    position: 'left' | 'right';
    icon: string;
    tooltip: string;
    openTooltip: string;
    animation: 'bounce' | 'pulse' | 'none';
}

export interface SocialContact {
    email: string;
    phone: string;
    availability: string;
}

export interface SocialData {
    floatingButton: FloatingButtonConfig;
    platforms: SocialPlatform[];
    contact: SocialContact;
}
