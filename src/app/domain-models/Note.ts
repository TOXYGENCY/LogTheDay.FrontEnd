import { Attachment } from "./Attachment";
import { Page } from "./Page";
import { Tag } from "./Tag";

export interface Note {
    id: string;
    pageId: string | null;
    title: string | null;
    description: string | null;
    status: string | null;
    priority: number | null;
    score: number | null;
    iconLink: string | null;
    creationDate: Date;
    creationTime: string;
    lastModifiedDate: Date | null;
    lastModifiedTime: Date | null;
    primaryColor: string | null;
    secondaryColor: string | null;
    attachments: Attachment[];
    page: Page;
    tags: Tag[];
}
