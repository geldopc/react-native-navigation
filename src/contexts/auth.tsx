import React,{ createContext, ReactNode, useState  } from "react";

interface UserProviderType {
  children: ReactNode;
}

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
    <AuthContext.Provider value={{signIn, user}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;