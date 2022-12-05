import { CircularProgress, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { CountriesList } from "./components/CountriesList";
import { SearchBar } from "./components/SearchBar";

import { Routes, Route } from "react-router-dom";
import { CountryDetail } from "./components/CountryDetail";

function App() {
  const [countries, setCountrie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong!");
      })
      .then((data) => {
        setCountrie(data);
      })
      .catch(() => {
        alert("ooo ooo");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = (searchPhrase) => {
    setIsLoading(true);
    fetch(
      `https://restcountries.com/v3.1/name/${searchPhrase}?fields=name,capital,region,population,flags`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong!");
      })
      .then((data) => {
        setCountrie(data);
      })
      .catch(() => {
        alert("ooo ooo");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleRegionChange = (region) => {
    setIsLoading(true);
    fetch(
      `https://restcountries.com/v3.1/region/${region}?fields=name,capital,region,population,flags`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong!");
      })
      .then((data) => {
        setCountrie(data);
      })
      .catch(() => {
        alert("ooo ooo");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <header style={{ background: "white" }}>
        <Container fixed>
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={8}>
              <h1>Where in the world?</h1>
            </Grid>

            <Grid item xs={4}>
              Dark mode in the future
            </Grid>
          </Grid>
        </Container>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <SearchBar
                  onTextFieldSubmit={handleSubmit}
                  onRegionChange={handleRegionChange}
                />
                {isLoading ? (
                  <CircularProgress
                    style={{ display: "block", margin: "10vh auto" }}
                  />
                ) : (
                  <CountriesList countries={countries} />
                )}
              </>
            }
          />
          <Route
            path="/country-details/:id"
            element={
              <>
                <CountryDetail />
              </>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
