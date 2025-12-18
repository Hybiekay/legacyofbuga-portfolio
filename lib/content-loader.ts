import contentData from '@/data/content.json';
import { ContentData, SocialData } from '@/types/content';

export async function getAboutContent(): Promise<ContentData['about']> {
    // Simulate API call delay in development
    if (process.env.NODE_ENV === 'development') {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    return contentData.about;
}

export async function getSocialContent(): Promise<SocialData> {
    if (process.env.NODE_ENV === 'development') {
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    return contentData.social as SocialData;
}

export function getAllContent(): ContentData {
    return contentData as ContentData;
}


