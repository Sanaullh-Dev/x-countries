import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  // countries = [
  // { name: "Afghanistan", flag: "https://flagcdn.com/w320/af.png", abbr: "af" },
  // ] ]
  useEffect(() => {
    fetch("https://xcountries-backend.azurewebsites.net/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  return (
    <div className="App">
      <h1>Welcome to the Country App</h1>
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
        {countries.length > 0 ? (
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
                alt={"Flag of " + country.name}
                style={{ width: "100px", height: "60px" }}
              />
              <p>{country.name}</p>
            </div>
          ))
        ) : (
          <p>Loading countries...</p>
        )}
      </div>
    </div>
  );
}

export default App;
