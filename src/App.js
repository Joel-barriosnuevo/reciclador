import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

// Componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TopBar from './components/TopBar';

// Páginas
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/Contacto';
import Legal from './pages/Legal';
import Aliados from './pages/Aliados';

// Tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32', // Verde principal
      light: '#4caf50',
      dark: '#1b5e20',
    },
    secondary: {
      main: '#388e3c', // Verde secundario
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quienes-somos" element={<QuienesSomos />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/aliados" element={<Aliados />} />
            </Routes>
            <Footer />
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
