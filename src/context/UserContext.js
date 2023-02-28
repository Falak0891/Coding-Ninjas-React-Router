import { createContext, useState, useContext, useEffect } from 'react';
import ErrorToast from '../components/error-toast/ErrorToast';
import Loader from '../components/loader/Loader';

const UserContext = createContext();

const useAuth = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
    }, 4000);
    return () => clearTimeout(timer);
  }, [error]);

  const login = async (email, password) => {

  };

  const register = async (email, password) => {

  };

  const logout = () => {

  };

  return (
    <UserContext.Provider
      value={{
        login,
        logout,
        register,
        user,
      }}
    >
      {error && <ErrorToast error={error} setError={setError} />}
      {loading ? <Loader /> : children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, useAuth };
