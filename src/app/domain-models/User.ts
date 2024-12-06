import { Page } from "./Page";

export interface User {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    avatarImg: string | null;
    regDate: Date;
    regTime: string;
    lastLoginDate: Date;
    pages: Page[];
}