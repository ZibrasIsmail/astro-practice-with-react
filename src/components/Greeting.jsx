import { useState } from "react";

const Greeting = ({ messages = ["Hi", "Hello", "Howdy", "Hey there"] }) => {
  const [greeting, setGreeting] = useState(messages[0]);

  function randomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setGreeting(messages[randomIndex]);
  }

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={randomMessage}>New Greeting</button>
    </div>
  );
};

export default Greeting;
