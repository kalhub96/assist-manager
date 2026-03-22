export interface Assist {
    id: string;
    name: string;
    type: "image" | "video" | "document";
    url: string;
}