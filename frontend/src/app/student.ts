import { Job } from "./job";

export class Student {
    id!: number;
    name!: string;
    email!: string;
    password!: string;
    university!: string;
    resume!: Blob ;
    acceptedJob!: Job;
}
