import { Category } from './category.model';
import { Language } from './language.model';

export class Card {
    id?: number;
    spanish: string;
    translation: string;
    group: number;
    category: Category;
    language: Language;
    createAt?: string;
    editable?: boolean;
}

export class CardStatus {
    card: Card;
    message: string;
}
