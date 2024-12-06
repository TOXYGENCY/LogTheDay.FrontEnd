import { Note } from "./Note";

export interface Tag {
    id: string;
    pageId: string | null;
    title: string | null;
    description: string | null;
    notes: Note[];
}