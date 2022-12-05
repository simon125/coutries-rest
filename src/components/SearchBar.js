import React, { useState } from "react";
import { Container, Grid, MenuItem, Select, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = (props) => {
  const { onTextFieldSubmit, onRegionChange } = props;
  const [textFieldValue, setTextFieldValue] = useState("");
  const [regionSelectValue, setRegionSelectValue] = useState("all");

  return (
    <Container fixed>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        marginTop={"10px"}
      >
        <Grid
          item
          xs={5}
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            onTextFieldSubmit(textFieldValue);
          }}
        >
          <TextField
            placeholder="Search for a country"
            variant="outlined"
            style={{ background: "white" }}
            value={textFieldValue}
            onChange={(e) => setTextFieldValue(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon style={{ marginRight: 5 }} />,
            }}
          />
        </Grid>

        <Grid item xs={5}>
          <Select
            fullWidth
            style={{ background: "white", color: "black" }}
            value={regionSelectValue}
            placeholder="Select the region"
            onChange={(e) => {
              setRegionSelectValue(e.target.value);
              onRegionChange(e.target.value);
              setTextFieldValue("");
            }}
          >
            <MenuItem value="all" disabled>
              Select the region
            </MenuItem>
            <MenuItem value={"europe"}>Europe</MenuItem>
            <MenuItem value={"africa"}>Africa</MenuItem>
            <MenuItem value={"americas"}>Americas</MenuItem>
            <MenuItem value={"asia"}>Asia</MenuItem>
            <MenuItem value={"oceania"}>Oceania</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </Container>
  );
};
