import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    axios.get("https://api-labenusers.onrender.com/users")
      .then(response => setUsers(response.data))
      .catch(error => console.error("Erro ao buscar usuários:", error));
  }, []);

  const selectUser = (id) => {
    setSelectedUserId(id);
  };

  return (
    <UserContext.Provider value={{ users, selectedUserId, selectUser }}>
      {children}
    </UserContext.Provider>
  );
};
