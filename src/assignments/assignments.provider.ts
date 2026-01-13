import { Assignment } from "./entities/assignment.entity";

export const userProviders = [
  {
    provide: 'ASSIGNMENT_REPOSITORY',
    useValue: Assignment,
  },
];