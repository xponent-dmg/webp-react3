import React, { useEffect, useState } from "react";

const Jokerator = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await res.json();
      setJoke(`${data.setup} — ${data.punchline}`);
    } catch (e) {
      setJoke(`${e}: Failed to fetch joke `);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h2>Random Joke</h2>
      {loading ? <p>Loading...</p> : <p>{joke}</p>}
      <button onClick={fetchJoke}>Get Another Joke</button>
    </div>
  );
};

export default Jokerator;
