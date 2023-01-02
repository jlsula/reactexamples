import { useState, useEffect } from "react";

function UseEffect() {
  const [fact, setFact] = useState("");

  const fetchData = () => {
    fetch("https://catfact.ninja/fact")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFact(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{fact.fact}</div>;
}

export default UseEffect;

// https://catfact.ninja/fact
// {"fact":"A cat has approximately 60 to 80 million olfactory cells (a human has between 5 and 20 million).","length":96}
