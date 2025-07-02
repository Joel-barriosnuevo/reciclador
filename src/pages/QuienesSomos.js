import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  Avatar,
  Card,
  CardContent,
  Chip,
  Divider,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  Recycling,
  TrendingUp,
  People,
  EmojiEvents,
  CheckCircle,
  Star,
  Business,
  LocationOn,
  Phone,
  Email,
} from '@mui/icons-material';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.paper,
}));

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '60vh',
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

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
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

const StatCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  background: 'linear-gradient(135deg, #2e7d32 0%, #388e3c 100%)',
  color: 'white',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const TeamCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
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

const QuienesSomos = () => {
  const theme = useTheme();

  const stats = [
    { icon: <Recycling fontSize="large" />, number: '15+', label: 'Años de Experiencia' },
    { icon: <TrendingUp fontSize="large" />, number: '50K+', label: 'Toneladas Recicladas' },
    { icon: <People fontSize="large" />, number: '100+', label: 'Empleos Generados' },
    { icon: <EmojiEvents fontSize="large" />, number: '25+', label: 'Premios y Reconocimientos' },
  ];

  const team = [
    {
      name: 'Carlos Rodríguez',
      position: 'Director General',
      avatar: '/img/team1.jpg',
      description: 'Ingeniero ambiental con más de 15 años de experiencia en gestión de residuos.',
    },
    {
      name: 'María González',
      position: 'Gerente Operativa',
      avatar: '/img/team2.jpg',
      description: 'Especialista en logística y operaciones de reciclaje.',
    },
    {
      name: 'Luis Martínez',
      position: 'Director Técnico',
      avatar: '/img/team3.jpg',
      description: 'Experto en tecnologías de reciclaje y sostenibilidad.',
    },
  ];

  const testimonials = [
    {
      name: 'Ana Patricia Botero',
      position: 'Alcaldesa de Barranquilla',
      content: 'El Reciclador ESP ha sido un aliado fundamental en nuestra estrategia de sostenibilidad urbana.',
      rating: 5,
    },
    {
      name: 'Juan Carlos Restrepo',
      position: 'Director Ambiental Regional',
      content: 'Su compromiso con el medio ambiente y la innovación los convierte en referentes del sector.',
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
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    mb: 3,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  Líderes en Reciclaje Sostenible
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                    lineHeight: 1.6,
                  }}
                >
                  Más de 15 años transformando residuos en oportunidades, 
                  construyendo un futuro más limpio y sostenible para el Atlántico.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Chip
                    icon={<CheckCircle />}
                    label="Certificaciones Ambientales"
                    color="primary"
                    variant="filled"
                  />
                  <Chip
                    icon={<EmojiEvents />}
                    label="Premios Nacionales"
                    color="primary"
                    variant="filled"
                  />
                </Box>
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
                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
                  }}
                />
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </HeroSection>

      {/* Estadísticas */}
      <SectionContainer sx={{ backgroundColor: theme.palette.background.default }}>
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
      </SectionContainer>

      {/* Misión, Visión y Valores */}
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
              Nuestra Identidad Corporativa
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                <StyledPaper elevation={3} sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Recycling sx={{ fontSize: 60, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h4" component="h3" gutterBottom color="primary" align="center">
                    Misión
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8, flex: 1 }}>
                    Contribuir al desarrollo sostenible de la región a través de la gestión 
                    integral de residuos sólidos, promoviendo la cultura del reciclaje y 
                    generando valor ambiental, social y económico para nuestros clientes y 
                    la comunidad, mediante tecnologías innovadoras y procesos eficientes.
                  </Typography>
                </StyledPaper>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                <StyledPaper elevation={3} sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <TrendingUp sx={{ fontSize: 60, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h4" component="h3" gutterBottom color="primary" align="center">
                    Visión
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8, flex: 1 }}>
                    Ser reconocidos como la empresa líder en la gestión integral de residuos 
                    sólidos en el departamento del Atlántico, destacando por nuestra innovación, 
                    responsabilidad ambiental y compromiso con la comunidad, siendo referentes 
                    nacionales en sostenibilidad y economía circular.
                  </Typography>
                </StyledPaper>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                <StyledPaper elevation={3} sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <EmojiEvents sx={{ fontSize: 60, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h4" component="h3" gutterBottom color="primary" align="center">
                    Valores
                  </Typography>
                  <Box sx={{ mt: 2, flex: 1 }}>
                    {[
                      'Compromiso ambiental',
                      'Innovación constante',
                      'Responsabilidad social',
                      'Excelencia en el servicio',
                      'Integridad y transparencia',
                      'Trabajo en equipo',
                      'Mejora continua'
                    ].map((valor, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CheckCircle sx={{ color: 'primary.main', mr: 1, fontSize: 20 }} />
                        <Typography variant="body1">{valor}</Typography>
                      </Box>
                    ))}
                  </Box>
                </StyledPaper>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </SectionContainer>

      {/* Equipo Ejecutivo */}
      <SectionContainer sx={{ backgroundColor: theme.palette.background.default }}>
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
              Nuestro Equipo Ejecutivo
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {team.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    style={{ width: '100%' }}
                  >
                    <TeamCard elevation={3} sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Avatar
                        src={member.avatar}
                        sx={{
                          width: 120,
                          height: 120,
                          mx: 'auto',
                          mb: 2,
                          border: '4px solid',
                          borderColor: 'primary.main',
                        }}
                      />
                      <Typography variant="h5" component="h3" gutterBottom align="center">
                        {member.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="primary"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                        align="center"
                      >
                        {member.position}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" align="center" sx={{ flex: 1 }}>
                        {member.description}
                      </Typography>
                    </TeamCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </SectionContainer>

      {/* Testimonios */}
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
              Lo Que Dicen de Nosotros
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    style={{ width: '100%' }}
                  >
                    <TestimonialCard elevation={2} sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ display: 'flex', mb: 2, justifyContent: 'center' }}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} sx={{ color: '#ffc107', fontSize: 20 }} />
                        ))}
                      </Box>
                      <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic', flex: 1 }}>
                        "{testimonial.content}"
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }} align="center">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" align="center">
                        {testimonial.position}
                      </Typography>
                    </TestimonialCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </SectionContainer>

      {/* Información de Contacto */}
      <SectionContainer sx={{ backgroundColor: theme.palette.background.default }}>
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
              Contáctanos
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                <Box sx={{ textAlign: 'center', p: 3, width: '100%' }}>
                  <LocationOn sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Ubicación
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Calle 17 Cra 24-21, Barranquilla, Atlántico<br />
                    Colombia
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                <Box sx={{ textAlign: 'center', p: 3, width: '100%' }}>
                  <Phone sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Teléfono
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    +57 (5) 300-123-4567<br />
                    +57 300-987-6543
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                <Box sx={{ textAlign: 'center', p: 3, width: '100%' }}>
                  <Email sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Email
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    info@elreciclador.com<br />
                    ventas@elreciclador.com
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </SectionContainer>
    </Box>
  );
};

export default QuienesSomos; 