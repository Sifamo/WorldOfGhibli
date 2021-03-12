export interface Film{
    id: number;
    title: string;
    original__title: string;
    original__title_romanised: string;
    description: string;
    director: string;
    producer: string;
    release_date: string;
    cover?: string;
}