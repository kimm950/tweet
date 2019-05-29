import React, { useState } from "react";
import Tweet from "./Tweet";



function App() {
  const [user, setUser] = useState([
    { name: 'Ed', message: "Hello there" },
    { name: 'John', message: "Hello there" },
    { name: "Traversy", message: "Hello there" }



  ]);


  return (
    <div className="app">
      {user.map(user => (
        <Tweet name={user.name} message={user.message} />

      ))}

    </div>
  );
}






export default App;
