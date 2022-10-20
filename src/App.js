import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Container } from "@chakra-ui/react";

function App() {
  return (
    <Container maxW='container.md'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/profile" element={< Profile/>}/>
          <Route/>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
