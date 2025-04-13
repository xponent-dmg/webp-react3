import { useEffect, useState } from "react";

export function Header(props) {
  const [now, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="header">
      <h1>{props.title}</h1>
      <h3>{now.toLocaleTimeString()}</h3>
    </div>
  );
}

export function Content() {
  const jokes = [
    {
      setup: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!",
    },
    {
      setup: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field!",
    },
    {
      setup: "Why don't skeletons fight each other?",
      punchline: "They don't have the guts.",
    },
    {
      setup: "How does a penguin build its house?",
      punchline: "Igloos it together.",
    },
    { setup: "What do you call fake spaghetti?", punchline: "An impasta!" },
  ];

  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  };

  const [joke, setJoke] = useState(getRandomJoke());

  const handleNewJoke = () => {
    setJoke(getRandomJoke());
  };

  return (
    <div className="content">
      <p>
        <strong>{joke.setup}</strong>
      </p>
      <p>{joke.punchline}</p>
      <button onClick={handleNewJoke}>Get another joke</button>
    </div>
  );
}

export function Footer() {
  return (
    <div className="footer">
      <h3>Jokerator &copy;</h3>
    </div>
  );
}
