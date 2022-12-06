import React from "react";
import { Link } from "react-router-dom";
import { CardContent, CardMedia, Card, Typography } from "@mui/material";

export const CountryListItem = (props) => {
  return (
    <Link to={`/country-details/${props.country.name.common}`}>
      <Card>
        <CardMedia
          component="img"
          image={props.country.flags.png || props.country.flags.svg || ""}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.country.name.common}
          </Typography>
          <Typography color="text.secondary" marginBottom={1}>
            <span style={{ fontWeight: 600 }}>Population:</span>{" "}
            {props.country.population}
          </Typography>
          <Typography color="text.secondary" marginBottom={1}>
            <span style={{ fontWeight: 600 }}>Region:</span>{" "}
            {props.country.region}
          </Typography>
          <Typography color="text.secondary" marginBottom={1}>
            <span style={{ fontWeight: 600 }}>Capital:</span>{" "}
            {props.country.capital}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

// ?fields=name,capital,region,population,flag
