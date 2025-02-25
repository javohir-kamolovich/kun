import { Children, createContext, useState } from "react";



export const NameContext = createContext(null);

function NameContextProvider ({Children}) {
 const [name , setName] = useState("Suxrob")
 const [isDark, setIsDark] = useState()

 return (
    <NameContext.Provider value={{name , setName , isDark, setIsDark }}>
        {Children}
    </NameContext.Provider>
 )
}

export default NameContextProvider;