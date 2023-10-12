export enum TopLevelCategoty {
    Courses,
    Services,
    Books,
    Products,
}

export class NestPageModel {
    firstLevelCategory: TopLevelCategoty;
    secondCategory: string;
    title: string;
    category: string;
    hh?: {
        count: number;
        juniorSalary: number;
        middleSalary: number;
        seniorSalary: number;
    };
    advantages: {
        title: string;
        description: string;
    }[];
    seoText: string;
    tagsTitle: string;
    tags: string[];
}