export interface Item {
    title: string;
    description: string;
    programType: 'series' | 'movie';
    releaseYear: number;
    images: {[key:string]: Image};
}

export interface Image {
    url: string;
    width: number;
    height: number;
}