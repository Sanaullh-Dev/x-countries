import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  const api = "https://xcountries-backend.azurewebsites.net/all";

  // Fetch countries data from the API when the component mounts
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          justifyItems: "center",
          margin: "20px auto",
          width: "80%",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {countries.length &&
          countries.map((country) => (
            <div
              key={country.abbr}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                textAlign: "center",
                width: "120px",
                marginBottom: "auto",
              }}
            >
              <img
                src={country.flag}
                alt={"Flag of " + country.abbr}
                style={{ width: "100px", height: "60px" }}
              />
              <p>{country.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
