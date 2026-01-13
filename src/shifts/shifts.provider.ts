import { Shift } from "./entities/shift.entity";

export const userProviders = [
  {
    provide: 'SHIFT_REPOSITORY',
    useValue: Shift,
  },
];