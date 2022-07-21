import React,{ createContext, Dispatch, ReactNode, SetStateAction  } from "react";

interface UserProviderType {
  children: ReactNode;
}

interface UserContextData {
  user: string,
  password: string
  //setUser: Dispatch<SetStateAction<string>>
}

export const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider = ({children}: UserProviderType) => (
  <UserContext.Provider value={{user: 'a', password: 'b'}}>
    {children}
  </UserContext.Provider>
);