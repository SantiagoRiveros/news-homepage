import { HeroBanner } from "../assets";
import { Button, Grid } from "@mui/material";
import "./styles/Hero.css"

export default function Hero() {
  return (
    <Grid container spacing={2}>
      <Grid md={12}>
        <img src={HeroBanner} alt="hero-banner" />
      </Grid>

      <Grid md={5}>
        <h1>The Bright Future of Web 3.0?</h1>
      </Grid>
      <Grid md={6}>
        <p className="paragraph">
          <br />
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fullfilling its promise?
        </p>
        <Button variant="contained">READ MORE</Button>
      </Grid>
    </Grid>
  );
}
