import "./App.css";
import { Header } from "./components";
import MainSection from "./components/MainSection";
import StarredNews from "./components/StarredNews";
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
