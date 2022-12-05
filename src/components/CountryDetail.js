import { Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";

export const CountryDetail = (country) => {
  const { id } = useParams();
  /**
   * nativeName
   * population
   * region
   * subregion
   * capital
   * topLevelDomain
   * Currencies
   * Languages
   *
   * borderCountries
   */

  console.log(id);
  return <Container fixed>CountryDetail</Container>;
};
