import { CounterSchema, UserSchema } from 'entities';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}
