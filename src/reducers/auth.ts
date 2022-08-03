import Iuser from "../@types/types"

export enum ActionTypes {
  LOGIN = '',
  LOGOFF = ''
}

export interface AuthState {
  readonly user: Iuser | undefined;
}

const INITIAL_STATE: AuthState = {
  user: {
    username: '',
    password: ''
  },
}

export interface AuthPayload {
  readonly username?: string;
  readonly password?: string;
}

export interface AuthAction {
  type: string;
  payload?: AuthPayload;
}

export const Actions = {
  login: ({ username, password }: AuthPayload): AuthAction => ({
    type: ActionTypes.LOGIN,
    payload: {
      username,
      password,
    },
  }),
  logoff: (): AuthAction => ({
    type: ActionTypes.LOGOFF,
  }),
}

export const reducer = (state = INITIAL_STATE, action: AuthAction): AuthState => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        user: {
          username: action.payload?.username,
          password: action.payload?.password
        },
      };
    case ActionTypes.LOGOFF:
      return {
        ...state,
        user: {
          username: '',
          password: ''
        },
      };
    default:
      return state
  }
}