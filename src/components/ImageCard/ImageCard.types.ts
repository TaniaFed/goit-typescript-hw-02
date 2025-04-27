export interface Image {
    id: string;
    alt_description: string;
    urls: {
        small: string;
        regular: string;
    };
    openModal: (url: string, alt_description: string) => void;
    
}