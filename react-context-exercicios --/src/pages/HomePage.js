import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserCard from "../components/UserCard";

function HomePage() {
  const { users } = useContext(UserContext);

  return (
    <div>
      <h1>Usuários</h1>
      <div style={styles.container}>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }
};

export default HomePage;
