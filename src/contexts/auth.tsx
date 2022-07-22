import React,{ createContext, Dispatch, ReactNode, SetStateAction, useContext, useState  } from "react";

interface UserProviderType {
  children: ReactNode;
}

export const authContext = createContext({
  username: '',
  setUserNaime: (text:string) => {}
})

export const AuthContext = createContext({} as any)

function AuthProvider({children}: UserProviderType){
  const [user, setUser] = useState({})

  function signIn(username:string, password: string){
    setUser({
      username: username,
      password: password
    })
  }

  return(
    <AuthContext.Provider value={{nome: "", signIn, user}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;