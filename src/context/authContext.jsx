import {createContext, useEffect, useState} from 'react'

export const AuthContext = createContext()

// eslint-disable-next-line
export const AuthProvider = ({children})=>{
    const [token, setToken] = useState(localStorage.getItem('token') || null)
    const [user, setUser] = useState(localStorage.getItem('user') || null);
    
    const login = (user, token) => {
        setUser(user);
        setToken(token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
      };

      const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      };
      const loadUserFromStorage = () => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');
    
        if (storedUser && storedToken) {
          setUser(JSON.parse(storedUser));
          setToken(storedToken);
        }
      };

      useEffect(() => {
        loadUserFromStorage();
      }, []);
    return(
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}