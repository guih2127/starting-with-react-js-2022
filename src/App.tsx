import { useState } from "react";
import "./App.css";
import { AppRoutes } from "./routes";

function App() {
  const [tweets, setTweets] = useState<string[]>([
    "Tweet 1",
    "Tweet 2",
    "Tweet 3",
    "Tweet 4",
  ]);

  function createTweet() {
    setTweets([...tweets, "Novo Tweet"]);
  }

  return (
    <AppRoutes />
    // <div>
    //   {tweets.map((tweet) => {
    //     return <Tweet text={tweet} />;
    //   })}

    //   <button
    //     onClick={createTweet}
    //     style={{
    //       backgroundColor: "red",
    //       border: 0,
    //     }}
    //   >
    //     Adicionar Tweet
    //   </button>
    // </div>
  );
}

export default App;
