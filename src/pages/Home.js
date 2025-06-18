import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '80vh',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url("/img/portadaweb.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'brightness(0.5)',
    zIndex: -1,
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const Home = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              EL RECICLADOR ESP
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                mb: 3,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              EMPRESA PRESTADORA DEL SERVICIO PÚBLICO DE ASEO
            </Typography>
            <Typography
              variant="h3"
              component="p"
              sx={{
                fontSize: { xs: '1rem', md: '1.25rem' },
                mb: 4,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              ASOCIACIÓN PARA LA PROMOCIÓN DE ACTIVIDADES DE RECICLAJE EN EL DEPARTAMENTO DEL ATLÁNTICO
            </Typography>
            <Button
              component={RouterLink}
              to="/portafolio"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              Ver Portafolio
            </Button>
          </motion.div>
        </Container>
      </HeroSection>

      {/* Carrusel de imágenes */}
      <Box sx={{ py: 6, backgroundColor: theme.palette.background.paper }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="200"
                  image="/img/portadaweb.jpg"
                  alt="Reciclaje Responsable"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Reciclaje Responsable
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Contribuimos al medio ambiente con prácticas sostenibles y responsables.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="200"
                  image="/img/mision.jpg"
                  alt="Servicio Profesional"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Servicio Profesional
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Ofrecemos un servicio de calidad con personal altamente capacitado.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="200"
                  image="/img/vision.png"
                  alt="Compromiso Ambiental"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Compromiso Ambiental
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Trabajamos por un futuro más limpio y sostenible para todos.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 