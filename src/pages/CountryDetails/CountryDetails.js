import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { showErrorToast } from "../../utils/showErrorToast";

export const CountryDetails = () => {
  const { countryName } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,region,population,flags,subregion,tld,currencies,languages,borders`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong!");
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setCountryDetails(data[0]);
        }
      })
      .catch(() => {
        showErrorToast();
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [countryName]);

  return (
    <Container fixed sx={{ marginTop: 10 }}>
      {isLoading || countryDetails === null ? (
        <CircularProgress style={{ display: "block", margin: "10vh auto" }} />
      ) : (
        <>
          <Button
            component={Link}
            to="/"
            variant="contained"
            startIcon={<KeyboardBackspaceIcon style={{ fill: "white" }} />}
          >
            Go Back
          </Button>
          <Grid
            container
            spacing={5}
            marginTop={5}
            justifyContent="space-between"
          >
            <Grid item xs={5}>
              <img
                style={{ width: "100%" }}
                src={countryDetails.flags.png || countryDetails.flags.svg || ""}
                alt=""
              />
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography color="text.secondary" marginBottom={2}>
                    <span style={{ fontWeight: 600 }}>Native Name:</span>{" "}
                    {countryDetails.name.official}
                  </Typography>
                  <Typography color="text.secondary" marginBottom={2}>
                    <span style={{ fontWeight: 600 }}>Population:</span>{" "}
                    {countryDetails.population}
                  </Typography>
                  <Typography color="text.secondary" marginBottom={2}>
                    <span style={{ fontWeight: 600 }}>Region:</span>{" "}
                    {countryDetails.region}
                  </Typography>
                  <Typography color="text.secondary" marginBottom={2}>
                    <span style={{ fontWeight: 600 }}>Subregion:</span>{" "}
                    {countryDetails.subregion || "-"}
                  </Typography>
                  <Typography color="text.secondary" marginBottom={2}>
                    <span style={{ fontWeight: 600 }}>Capital:</span>{" "}
                    {countryDetails.capital || "-"}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography color="text.secondary" marginBottom={2}>
                    <span style={{ fontWeight: 600 }}>Top Level Domain:</span>{" "}
                    {countryDetails.tld || "-"}
                  </Typography>
                  <Typography color="text.secondary" marginBottom={2}>
                    <span style={{ fontWeight: 600 }}>Currencies:</span>{" "}
                    {Object.values(countryDetails.currencies).map(
                      ({ name }) => `${name}, `
                    ) || "-"}
                  </Typography>
                  <Typography color="text.secondary" marginBottom={2}>
                    <span style={{ fontWeight: 600 }}>Languages:</span>{" "}
                    {Object.values(countryDetails.languages).map(
                      (language) => `${language}, `
                    ) || "-"}
                  </Typography>
                </Grid>
                <Grid item xs={12} marginTop={3}>
                  <Typography color="text.secondary" marginBottom={2}>
                    <span style={{ fontWeight: 600 }}>Border Countries:</span>{" "}
                    {countryDetails.borders.map((border) => (
                      <Button
                        key={border}
                        component={Link}
                        to={`/country-details/${border}`}
                        variant="outlined"
                        style={{ margin: "3px" }}
                      >
                        {border.toLowerCase()}
                      </Button>
                    )) || "-"}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </Container>
  );
};
