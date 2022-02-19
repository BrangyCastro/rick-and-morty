import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card/Card";
import { fechDataCharacter } from "./services/character";

function App() {
  const [state, setState] = useState({
    data: [],
    loading: false,
  });

  const handleCharacterData = async () => {
    setState((old) => ({ ...old, loading: true }));
    try {
      const results = await fechDataCharacter();
      setState((old) => ({ ...old, loading: false, data: results }));
    } catch (error) {
      setState((old) => ({ ...old, loading: false }));
    }
  };

  useEffect(() => {
    handleCharacterData();
  }, []);

  return (
    <section className="container">
      <div className="content">
        {state.loading ? (
          <p className="text-grey">Loading</p>
        ) : (
          <>
            {state.data.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </>
        )}
      </div>
    </section>
  );
}

export default App;
