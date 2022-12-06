import React, { useEffect, useState } from "react";
import { CircularProgress, Container, Grid } from "@mui/material";
import { CountryListItem } from "./components/CountryListItem";
import { SearchBar } from "./components/SearchBar";
import { showErrorToast } from "../../utils/showErrorToast";

export const CountriesList = () => {
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
        showErrorToast();
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
        showErrorToast("ooo ooo");
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
        showErrorToast("ooo ooo");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container fixed>
      <SearchBar
        onTextFieldSubmit={handleSubmit}
        onRegionChange={handleRegionChange}
      />
      {isLoading ? (
        <CircularProgress style={{ display: "block", margin: "10vh auto" }} />
      ) : (
        <Grid container spacing={5} marginY="50px">
          {countries.map((country) => (
            <Grid key={country.name.common} item md={4} sm={6} xs={12}>
              <CountryListItem country={country} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};
