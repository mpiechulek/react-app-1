import React, { createContext, useState } from 'react'

interface InitContextProps {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext({

    isLoggedIn: false,

    setIsLoggedIn: (value: boolean) => {}
});

export const AuthContextProvider = (props: any) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (

        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>

            {props.children}

        </AuthContext.Provider>

    )
}