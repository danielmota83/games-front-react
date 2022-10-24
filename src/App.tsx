import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

