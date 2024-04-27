/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import "./JokesGenerator.css";
import { useState } from "react";

function JokesGenerator() {
  const [joke, setJoke] = useState("");
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function fetchJoke() {
        try {
          setLoading(true);
          const res = await fetch(
            "https://sv443.net/jokeapi/v2/joke/Programming?type=single"
          );
          const data = await res.json();
          setJoke(data.joke);
          setError("");
        } catch (err) {
          console.error(err.message);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }
      setError("");
      setJoke("");
      fetchJoke();
    },
    [count]
  );

  return (
    <div className="app">
      <h1>Jokes Generator Using React and Joke Api</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Click to generate a Joke
      </button>
      {loading ? <Loader /> : <p>{joke}</p>}
      {!loading && error && <Error err={error} />}
    </div>
  );
}

function Loader() {
  return <p style={{ color: "White", fontSize: "50px" }}>Loading...</p>;
}

function Error({ err }) {
  return <p>{err}</p>;
}

export default JokesGenerator;
