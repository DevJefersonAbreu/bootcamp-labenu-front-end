import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserCard = ({ user }) => {
  const { selectedUserId, selectUser } = useContext(UserContext);
  const isSelected = selectedUserId === user.id;

  return (
    <div
      style={{
        ...styles.card,
        backgroundColor: isSelected ? "#e0f7fa" : "#fff",
        borderColor: isSelected ? "#00796b" : "#ddd",
        cursor: "pointer"
      }}
      onClick={() => selectUser(user.id)}
    >
      <h3>{user.name}</h3>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid",
    padding: "10px",
    borderRadius: "5px",
    margin: "10px",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  }
};

export default UserCard;
