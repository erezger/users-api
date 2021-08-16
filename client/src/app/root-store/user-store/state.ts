import { User } from "@app/core/models/user.model";

export interface State {
  users: User[] | null;
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  users: null,
  isLoading: false,
  error: null
}