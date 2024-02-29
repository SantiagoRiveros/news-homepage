import { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [word, setWord] = useState();
  const [search, setSearch] = useState();
  const [theme, setTheme] = useState("light");

  const handleWord = (e) => {
    setWord(e.target.value);
  };

  const handleSearch = () => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((data) => {
        console.log(data.data);
        setSearch(data.data);
      })
      .catch((e) => console.error(e));
  };

  const handleTheme = () => {
    console.log(theme);
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleWord}
        className={theme === "light" ? "lightMode" : "darkMode"}
      />
      <button onClick={() => handleSearch()}>Search Word</button>
      <button onClick={() => handleTheme()}>Set Theme</button>
      {search ? (
        <div>
          <h1>{search[0].word}</h1>
          <h5>{search[0].phonetic}</h5>
          <audio
            src={search[0].phonetics[search[0].phonetics.length - 1].audio}
            autoPlay
          />
          {search[0].meanings.map((searchTerm, index) => {
            return (
              <div key={index}>
                <label>{searchTerm.partOfSpeech}</label>
                <ul>
                  {searchTerm.definitions.map((definition, index) => {
                    return <li key={index}>{definition.definition}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
