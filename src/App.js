import "./App.css";
import { MainSection, StarredNews, Header } from "./components";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <Box>
          <Header />
          <MainSection />
          <StarredNews />
        </Box>
      </Container>
    </>
  );
}

export default App;
