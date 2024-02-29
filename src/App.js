import "./App.css";
import { MainSection, StarredNews, Header } from "./components";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Dictionary from "./components/Dictionary";

function App() {
  return (
    <>
      <Dictionary />
      {/* <Container maxWidth="lg">
        <Box>
          <Header />
          <MainSection />
          <StarredNews />
        </Box>
      </Container> */}
    </>
  );
}

export default App;
