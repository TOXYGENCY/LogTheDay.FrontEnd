import { Note } from "./Note";

export interface Attachment {
    id: string;
    name?: string;
    type: string;
    contentLink: string;
    fileType?: string;
    noteId: string;
    note: Note;
}