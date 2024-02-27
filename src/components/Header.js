import { Logo, NavBar } from "./";
import { Box, Grid } from "@mui/material";

export default function Header() {
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Logo />
          </Grid>
          <Grid item xs={5}>
            <NavBar />
          </Grid>
        </Grid>
      </Box>
    </header>
  );
}
