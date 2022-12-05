import React from "react";
import { Container, Grid } from "@mui/material";
import { FlagCard } from "./FlagCard";

export const CountriesList = ({ countries = [] }) => {
  return (
    <Container fixed>
      <Grid container spacing={5} marginY="50px">
        {countries.map((country) => (
          <Grid key={country.name.common} item md={4} sm={6} xs={12}>
            <FlagCard country={country} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
