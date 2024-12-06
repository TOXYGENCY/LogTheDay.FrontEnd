import { Note } from "./Note";
import { User } from "./User";

export interface Page {
    id: string;
    userId: string;
    title?: string;
    description?: string;
    iconLink?: string;
    type: string;
    privacyType: number;
    customCss?: string;
    creationDate: Date;
    creationTime: Date;
    lastModifiedDate: Date;
    lastModifiedTime: Date;
    notes: Note[];
    user: User;
}