import React from "react";
import Router from "./routes/Router";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Router />
      </div>
    </UserProvider>
  );
}

export default App;
