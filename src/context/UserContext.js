import { useState, useEffect, createContext, useContext } from 'react';

import axios from 'axios';

const UsersContext = createContext();
export const useUsers = () => useContext(UsersContext);

const UsersContextProvider = (props) => {
  const [users, setUsers] = useState([]);

  const apiUrl = 'https://randomuser.me/api/?results=10';

  const userData = async () => {
    const response = await axios.get(apiUrl);
    const data = response.data.results;
    setUsers(data);
  };

  useEffect(() => {
    userData();
  }, []);

  const values = {
    users,
  };

  return (
    <UsersContext.Provider value={values}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
