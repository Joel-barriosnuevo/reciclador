import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.paper,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const QuienesSomos = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
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
              ¿Quiénes Somos?
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" paragraph>
                  El Reciclador ESP es una empresa prestadora del servicio público de aseo, 
                  comprometida con el medio ambiente y la sostenibilidad. Nuestra misión es 
                  promover y ejecutar actividades de reciclaje en el departamento del Atlántico, 
                  contribuyendo a la preservación del medio ambiente y al desarrollo sostenible 
                  de nuestra región.
                </Typography>
                <Typography variant="body1" paragraph>
                  Con años de experiencia en el sector, nos hemos consolidado como líderes en 
                  la gestión integral de residuos sólidos, ofreciendo soluciones innovadoras y 
                  sostenibles para el manejo de desechos.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src="/img/logo.png"
                  alt="El Reciclador"
                  sx={{
                    width: '100%',
                    maxWidth: 400,
                    height: 'auto',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </SectionContainer>

      {/* Misión, Visión y Valores */}
      <SectionContainer sx={{ backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <StyledPaper elevation={3}>
                <Typography variant="h4" component="h2" gutterBottom color="primary">
                  Misión
                </Typography>
                <Typography variant="body1">
                  Contribuir al desarrollo sostenible de la región a través de la gestión 
                  integral de residuos sólidos, promoviendo la cultura del reciclaje y 
                  generando valor ambiental, social y económico para nuestros clientes y 
                  la comunidad.
                </Typography>
              </StyledPaper>
            </Grid>
            <Grid item xs={12} md={4}>
              <StyledPaper elevation={3}>
                <Typography variant="h4" component="h2" gutterBottom color="primary">
                  Visión
                </Typography>
                <Typography variant="body1">
                  Ser reconocidos como la empresa líder en la gestión integral de residuos 
                  sólidos en el departamento del Atlántico, destacando por nuestra innovación, 
                  responsabilidad ambiental y compromiso con la comunidad.
                </Typography>
              </StyledPaper>
            </Grid>
            <Grid item xs={12} md={4}>
              <StyledPaper elevation={3}>
                <Typography variant="h4" component="h2" gutterBottom color="primary">
                  Valores
                </Typography>
                <Typography variant="body1" component="div">
                  <ul style={{ paddingLeft: '20px' }}>
                    <li>Compromiso ambiental</li>
                    <li>Innovación constante</li>
                    <li>Responsabilidad social</li>
                    <li>Excelencia en el servicio</li>
                    <li>Integridad y transparencia</li>
                  </ul>
                </Typography>
              </StyledPaper>
            </Grid>
          </Grid>
        </Container>
      </SectionContainer>
    </Box>
  );
};

export default QuienesSomos; 