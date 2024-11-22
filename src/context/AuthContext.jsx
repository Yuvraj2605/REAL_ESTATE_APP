import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";
import { useCookies } from 'react-cookie';

export const AuthContext = createContext();

export const AuthcontextProvider = ({ children }) => {
 // const [cookies, setCookie] = useCookies(['user'])
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const updateFun = (user) => {

    setCurrentUser(user);
    
  };

  useEffect(() => {
   
    localStorage.setItem("user", JSON.stringify(currentUser));
     
    //setCookie("user",currentUser?.token)
    //console.log(cookies)
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateFun }}>
      {children}
    </AuthContext.Provider>
  );
};
