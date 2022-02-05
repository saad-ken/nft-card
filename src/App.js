import { ThemeProvider } from "styled-components";
import Nft from "./components/Nft";

const theme = {
  neutral: {
    VerydarkbluemainBG: "hsl(217, 54%, 11%)",
    VerydarkbluecardBG: "hsl(216, 50%, 16%)",
    Verydarkblueline: "hsl(215, 32%, 27%)",
    White: "hsl(0, 0%, 100%)",
  },
  primary: {
    Softblue: "hsl(215, 51%, 70%)",
    Cyan: " hsl(178, 100%, 50%)",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nft />
    </ThemeProvider>
  );
}

export default App;
