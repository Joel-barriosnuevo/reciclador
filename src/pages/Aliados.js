import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Handshake, ArrowForward } from '@mui/icons-material';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.paper,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  border: '1px solid rgba(0,0,0,0.1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
    borderColor: theme.palette.primary.main,
  },
}));

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '40vh',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #2e7d32 0%, #388e3c 100%)',
  color: 'white',
  overflow: 'hidden',
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
    opacity: 0.1,
    zIndex: 0,
  },
}));

const Aliados = () => {
  const theme = useTheme();

  const aliados = [
    {
      nombre: 'Empresa Municipal de Aseo',
      descripcion: 'Aliado estratégico en la gestión de residuos sólidos urbanos.',
      imagen: '/img/portadaweb.jpg',
    },
    {
      nombre: 'Ministerio de Ambiente',
      descripcion: 'Socio en el desarrollo de políticas ambientales sostenibles.',
      imagen: '/img/mision.jpg',
    },
    {
      nombre: 'Universidad del Atlántico',
      descripcion: 'Colaboración en investigación y desarrollo de tecnologías verdes.',
      imagen: '/img/vision.png',
    },
    {
      nombre: 'Cámara de Comercio',
      descripcion: 'Alianza para el fomento de prácticas empresariales sostenibles.',
      imagen: '/img/rondaservicios.png',
    },
    {
      nombre: 'Corporación Autónoma Regional',
      descripcion: 'Autoridad ambiental regional para la gestión sostenible.',
      imagen: '/img/portadaweb.jpg',
    },
    {
      nombre: 'Asociación de Recicladores',
      descripcion: 'Organización que representa a los recicladores del departamento.',
      imagen: '/img/mision.jpg',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h1"
              component="h1"
              align="center"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 3,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              Nuestros Aliados Estratégicos
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{
                opacity: 0.9,
                maxWidth: 800,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Trabajamos en conjunto con instituciones y empresas comprometidas con el medio ambiente 
              para construir un futuro más sostenible.
            </Typography>
          </motion.div>
        </Container>
      </HeroSection>

      <SectionContainer>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              component="h2"
              align="center"
              gutterBottom
              sx={{ mb: 6 }}
            >
              Alianzas Estratégicas
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {aliados.map((aliado, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{ width: '100%' }}
                  >
                    <StyledCard elevation={3}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={aliado.imagen}
                        alt={aliado.nombre}
                        sx={{
                          objectFit: 'cover',
                          backgroundColor: theme.palette.grey[200],
                        }}
                      />
                      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h3"
                          color="primary"
                          align="center"
                        >
                          {aliado.nombre}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ flex: 1, textAlign: 'center' }}
                        >
                          {aliado.descripcion}
                        </Typography>
                      </CardContent>
                    </StyledCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 8, textAlign: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography variant="h4" component="h2" gutterBottom color="primary">
                  ¿Quieres ser nuestro aliado?
                </Typography>
                <Typography variant="body1" paragraph sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
                  Estamos siempre abiertos a nuevas alianzas estratégicas que nos ayuden a 
                  construir un futuro más sostenible. Si tu organización comparte nuestra 
                  visión y compromiso con el medio ambiente, contáctanos para explorar 
                  oportunidades de colaboración.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Handshake />}
                  endIcon={<ArrowForward />}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Contáctanos
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </SectionContainer>
    </Box>
  );
};

export default Aliados; 