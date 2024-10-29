import React, { createContext, useContext, useState } from 'react';

const SignUpContext = createContext();

export const SignUpProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    address: '',
    address_postcode: '',
    nickname: '',
  });

  return (
    <SignUpContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </SignUpContext.Provider>
  );
};

export const useSignUp = () => useContext(SignUpContext);