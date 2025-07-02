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
  Chip,
  Avatar,
  Divider,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  Eco,
  TrendingUp,
  People,
  EmojiEvents,
  CheckCircle,
  Star,
  Business,
  LocationOn,
  Phone,
  Email,
  ArrowForward,
  Recycling,
  Nature,
  Support,
} from '@mui/icons-material';

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '90vh',
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
    filter: 'brightness(0.4)',
    zIndex: -1,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.8) 0%, rgba(56, 142, 60, 0.6) 100%)',
    zIndex: -1,
  },
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

const ServiceCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  height: '100%',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  border: '1px solid rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[12],
    background: 'linear-gradient(135deg, #2e7d32 0%, #388e3c 100%)',
    color: 'white',
    '& .MuiSvgIcon-root': {
      color: 'white',
    },
  },
}));

const StatCard = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #2e7d32 0%, #388e3c 100%)',
  color: 'white',
  borderRadius: theme.spacing(2),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
  border: '1px solid rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
}));

const Home = () => {
  const theme = useTheme();

  const services = [
    {
      icon: <Recycling sx={{ fontSize: 60 }} />,
      title: 'Reciclaje Integral',
      description: 'Gestión completa de residuos sólidos con tecnologías avanzadas de reciclaje.',
    },
    {
      icon: <Nature sx={{ fontSize: 60 }} />,
      title: 'Sostenibilidad Ambiental',
      description: 'Soluciones eco-amigables para reducir el impacto ambiental de los residuos.',
    },
    {
      icon: <Support sx={{ fontSize: 60 }} />,
      title: 'Asesoría Técnica',
      description: 'Consultoría especializada en gestión de residuos y economía circular.',
    },
  ];

  const stats = [
    { icon: <Recycling fontSize="large" />, number: '15+', label: 'Años de Experiencia' },
    { icon: <TrendingUp fontSize="large" />, number: '50K+', label: 'Toneladas Recicladas' },
    { icon: <People fontSize="large" />, number: '100+', label: 'Empleos Generados' },
    { icon: <EmojiEvents fontSize="large" />, number: '25+', label: 'Certificaciones' },
  ];

  const testimonials = [
    {
      name: 'Ana Patricia Botero',
      position: 'Alcaldesa de Barranquilla',
      content: 'El Reciclador ESP ha sido fundamental en nuestra estrategia de sostenibilidad urbana.',
      rating: 5,
    },
    {
      name: 'Juan Carlos Restrepo',
      position: 'Director Ambiental Regional',
      content: 'Su compromiso con el medio ambiente los convierte en referentes del sector.',
      rating: 5,
    },
    {
      name: 'Sofía Mendoza',
      position: 'Empresaria Local',
      content: 'Excelente servicio y profesionalismo. Han transformado nuestra gestión de residuos.',
      rating: 5,
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="100%" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Grid container spacing={4} alignItems="center" justifyContent="space-around" sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
              <Grid item xs={12} md={7} lg={6}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 700,
                    mb: 3,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    lineHeight: 1.2,
                    mt: { xs: 6, md: 7 },
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
                    fontWeight: 400,
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
                    opacity: 0.9,
                    lineHeight: 1.6,
                  }}
                >
                  ASOCIACIÓN PARA LA PROMOCIÓN DE ACTIVIDADES DE RECICLAJE EN EL DEPARTAMENTO DEL ATLÁNTICO
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                  <Chip
                    icon={<CheckCircle />}
                    label="Certificaciones Ambientales"
                    color="primary"
                    variant="filled"
                    sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
                  />
                  <Chip
                    icon={<EmojiEvents />}
                    label="Premios Nacionales"
                    color="primary"
                    variant="filled"
                    sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
                  />
                </Box>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    component={RouterLink}
                    to="/quienes-somos"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      backgroundColor: 'white',
                      color: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.9)',
                      },
                    }}
                  >
                    Conoce Más
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/contacto"
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    Contáctanos
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
                <img src="/gifs/caricatura.gif" alt="Caricatura El Reciclador" style={{ maxWidth: '100%', height: '320px', objectFit: 'contain', borderRadius: '50%' }} />
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </HeroSection>

      {/* Estadísticas */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
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
              Nuestros Logros
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {stats.map((stat, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <StatCard>
                      <Box sx={{ mb: 2 }}>{stat.icon}</Box>
                      <Typography variant="h3" component="div" sx={{ fontWeight: 700, mb: 1 }}>
                        {stat.number}
                      </Typography>
                      <Typography variant="body1" sx={{ opacity: 0.9 }}>
                        {stat.label}
                      </Typography>
                    </StatCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Servicios */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.background.paper }}>
        <Container maxWidth="xl">
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
              Nuestros Servicios
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={6} key={index} sx={{ display: 'flex' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    style={{ width: '100%' }}
                  >
                    <ServiceCard elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'row', maxWidth: '400px'}}>
                      <Box sx={{ mb: 3, flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Box sx={{ color: 'primary.main', mb: 2 }}>
                          {service.icon}
                        </Box>
                        <Typography variant="h5" component="h3" gutterBottom align="center">
                          {service.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" align="center" sx={{ flex: 1 }}>
                          {service.description}
                        </Typography>
                      </Box>
                    </ServiceCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Carrusel de imágenes mejorado */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.background.default, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Container>
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
              Nuestras Fortalezas
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                <StyledCard sx={{ height: '100%', display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/img/portadaweb.jpg"
                    alt="Reciclaje Responsable"
                  />
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      Reciclaje Responsable
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph sx={{ flex: 1 }}>
                      Contribuimos al medio ambiente con prácticas sostenibles y responsables, 
                      utilizando tecnologías de vanguardia para maximizar la recuperación de materiales.
                    </Typography>
                    <Box sx={{ mt: 'auto' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CheckCircle sx={{ color: 'primary.main', mr: 1 }} />
                        <Typography variant="body2">Tecnología avanzada</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CheckCircle sx={{ color: 'primary.main', mr: 1 }} />
                        <Typography variant="body2">Procesos certificados</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                <StyledCard sx={{ height: '100%', display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/img/mision.jpg"
                    alt="Servicio Profesional"
                  />
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      Servicio Profesional
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph sx={{ flex: 1 }}>
                      Ofrecemos un servicio de calidad con personal altamente capacitado y 
                      certificado en las mejores prácticas de gestión de residuos.
                    </Typography>
                    <Box sx={{ mt: 'auto' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CheckCircle sx={{ color: 'primary.main', mr: 1 }} />
                        <Typography variant="body2">Personal certificado</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CheckCircle sx={{ color: 'primary.main', mr: 1 }} />
                        <Typography variant="body2">Atención 24/7</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                <StyledCard sx={{ height: '100%', display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="/img/vision.png"
                    alt="Compromiso Ambiental"
                  />
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      Compromiso Ambiental
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph sx={{ flex: 1 }}>
                      Trabajamos por un futuro más limpio y sostenible para todos, 
                      implementando soluciones que reducen el impacto ambiental.
                    </Typography>
                    <Box sx={{ mt: 'auto' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CheckCircle sx={{ color: 'primary.main', mr: 1 }} />
                        <Typography variant="body2">Impacto reducido</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CheckCircle sx={{ color: 'primary.main', mr: 1 }} />
                        <Typography variant="body2">Sostenibilidad</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </StyledCard>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Testimonios */}
      <Box sx={{ py: 8, backgroundColor: theme.palette.background.paper }}>
        <Container>
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
              Lo Que Dicen de Nosotros
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    style={{ width: '100%' }}
                  >
                    <TestimonialCard elevation={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
                      <Box sx={{ display: 'flex', mb: 2 }}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} sx={{ color: '#ffc107', fontSize: 20 }} />
                        ))}
                      </Box>
                      <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic', flex: 1 }}>
                        "{testimonial.content}"
                      </Typography>
                      <Box sx={{ mt: 'auto' }}>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.position}
                        </Typography>
                      </Box>
                    </TestimonialCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, backgroundColor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h3" component="h2" gutterBottom>
                  ¿Listo para Reciclar?
                </Typography>
                <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
                  Únete a nosotros en la construcción de un futuro más sostenible. 
                  Contáctanos hoy mismo y descubre cómo podemos ayudarte.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                <Button
                  component={RouterLink}
                  to="/contacto"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    backgroundColor: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.9)',
                    },
                  }}
                >
                  Contáctanos
                </Button>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 