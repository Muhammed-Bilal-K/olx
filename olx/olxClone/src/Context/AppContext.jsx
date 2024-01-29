import { createContext, useState } from 'react'

export const AppContext = createContext()
export const AuthContext = createContext(null);


export default function Context({ children }) {
    const [user, setUser] = useState(null)

    return (
        <AuthContext.Provider value={{ user: user, setUser: setUser }}>
            {children}
        </AuthContext.Provider>
    )
}