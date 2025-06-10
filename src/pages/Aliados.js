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
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.paper,
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
  ];

  return (
    <Box>
      <SectionContainer>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              component="h1"
              align="center"
              gutterBottom
              sx={{ mb: 6 }}
            >
              Nuestros Aliados
            </Typography>

            <Typography
              variant="h5"
              component="p"
              align="center"
              color="text.secondary"
              sx={{ mb: 8 }}
            >
              Trabajamos en conjunto con instituciones y empresas comprometidas con el medio ambiente
            </Typography>

            <Grid container spacing={4}>
              {aliados.map((aliado, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <StyledCard>
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
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          color="primary"
                        >
                          {aliado.nombre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {aliado.descripcion}
                        </Typography>
                      </CardContent>
                    </StyledCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 8, textAlign: 'center' }}>
              <Typography variant="h4" component="h2" gutterBottom color="primary">
                ¿Quieres ser nuestro aliado?
              </Typography>
              <Typography variant="body1" paragraph>
                Estamos siempre abiertos a nuevas alianzas estratégicas que nos ayuden a 
                construir un futuro más sostenible. Si tu organización comparte nuestra 
                visión y compromiso con el medio ambiente, contáctanos para explorar 
                oportunidades de colaboración.
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </SectionContainer>
    </Box>
  );
};

export default Aliados; 