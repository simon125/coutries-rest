import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header style={{ background: "white" }}>
      <Container fixed>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={8}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                fontWeight: "600",
                fontSize: 22,
                margin: "15px 0",
                display: "block",
              }}
            >
              Where in the world?
            </Link>
          </Grid>

          <Grid item xs={4}>
            Dark mode in the future
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};
