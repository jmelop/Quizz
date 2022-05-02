import { Language } from "./language.model";

export class Card {
    id?: number;
    spanish: string;
    translation: string;
    group: number;
    set: string;
    language: Language;
    createAt?: string;
    editable?: boolean;
}
