import React, { useState, useEffect } from 'react'
import AuthForm from "./components/AuthForm";
import AuthContext from './store/Auth-context'
import Home from './components/Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const storedLoggedInfo = localStorage.getItem('isLoggedIn')

    if (storedLoggedInfo === 'true') {
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', 'true')
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
      }}
    >
        {!isLoggedIn && <AuthForm onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
    </AuthContext.Provider>
  )
}

export default App;
