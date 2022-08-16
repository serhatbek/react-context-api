import { useState, useEffect, createContext, useContext } from 'react';

import axios from 'axios';

const UsersContext = createContext();
export const useUsers = () => useContext(UsersContext);

const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState();

  const apiUrl = 'https://randomuser.me/api/?results=5';

  const userData = async () => {
    const response = await axios.get(apiUrl);
    const data = await response.data.results;
    setUsers(data);
  };

  useEffect(() => {
    userData();
  }, []);

  const values = {
    users,
  };

  return (
    <UsersContext.Provider value={values}>{children}</UsersContext.Provider>
  );
};

export default UsersContextProvider;
