import { HR } from "./hr";

export class Job {
    jobID!: number;
    role!: string;
    criteria!: string;
    hr: HR = new HR;
}
