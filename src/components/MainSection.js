import { Hero } from ".";
import NewsList from "./NewsList";
/** como puedo importart componentes de manera mas global? */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function MainSection() {
  return (
    <main>
       <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={7}>
            <Hero />
          </Grid>
          <Grid item md={5}>
            <NewsList />
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
