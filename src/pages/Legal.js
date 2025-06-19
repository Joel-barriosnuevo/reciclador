import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  Business,
  Description,
  VerifiedUser,
  Assignment,
  Gavel,
  Security,
  Policy,
} from '@mui/icons-material';

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.paper,
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

const LegalCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  border: '1px solid rgba(0,0,0,0.1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
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

const Legal = () => {
  const theme = useTheme();

  const legalInfo = [
    {
      title: 'Información Legal',
      items: [
        { icon: <Business />, text: 'Razón Social: El Reciclador ESP' },
        { icon: <Description />, text: 'NIT: [Número de NIT]' },
        { icon: <VerifiedUser />, text: 'Cámara de Comercio: [Número de registro]' },
      ],
    },
    {
      title: 'Documentos Legales',
      items: [
        { icon: <Assignment />, text: 'Licencia Ambiental' },
        { icon: <Assignment />, text: 'Permiso de Aprovechamiento' },
        { icon: <Assignment />, text: 'Certificación ISO 14001' },
      ],
    },
  ];

  const complianceAreas = [
    {
      icon: <Gavel />,
      title: 'Cumplimiento Normativo',
      description: 'Cumplimos con todas las normativas ambientales y legales establecidas.',
    },
    {
      icon: <Security />,
      title: 'Seguridad y Transparencia',
      description: 'Mantenemos altos estándares de seguridad y transparencia en todas nuestras operaciones.',
    },
    {
      icon: <Policy />,
      title: 'Políticas Ambientales',
      description: 'Implementamos políticas ambientales que superan los estándares requeridos.',
    },
    {
      icon: <VerifiedUser />,
      title: 'Certificaciones',
      description: 'Contamos con todas las certificaciones necesarias para operar en el sector.',
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
              Información Legal
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
              Transparencia y cumplimiento normativo en todas nuestras operaciones
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
              Documentación Legal
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {legalInfo.map((section, index) => (
                <Grid item xs={12} sm={6} md={6} key={index} sx={{ display: 'flex' }}>
                  <StyledPaper elevation={3} sx={{ width: '100%' }}>
                    <Typography
                      variant="h4"
                      component="h3"
                      gutterBottom
                      color="primary"
                      sx={{ mb: 3 }}
                      align="center"
                    >
                      {section.title}
                    </Typography>
                    <List sx={{ flex: 1 }}>
                      {section.items.map((item, itemIndex) => (
                        <ListItem key={itemIndex}>
                          <ListItemIcon sx={{ color: theme.palette.primary.main }}>
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText primary={item.text} />
                        </ListItem>
                      ))}
                    </List>
                  </StyledPaper>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 8 }}>
              <Typography variant="h3" component="h2" gutterBottom color="primary" align="center" sx={{ mb: 6 }}>
                Cumplimiento Normativo
              </Typography>
              
              <Grid container spacing={4} justifyContent="center">
                {complianceAreas.map((area, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex' }}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      style={{ width: '100%' }}
                    >
                      <LegalCard elevation={3}>
                        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                          <Box sx={{ color: 'primary.main', mb: 2 }}>
                            {area.icon}
                          </Box>
                          <Typography variant="h6" component="h3" gutterBottom>
                            {area.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
                            {area.description}
                          </Typography>
                        </CardContent>
                      </LegalCard>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 6, textAlign: 'center' }}>
                <Typography variant="h5" component="h3" gutterBottom color="primary">
                  Compromiso con la Transparencia
                </Typography>
                <Typography variant="body1" paragraph sx={{ maxWidth: 800, mx: 'auto', mb: 3 }}>
                  El Reciclador ESP cumple con todas las normativas ambientales y legales 
                  establecidas por las autoridades competentes. Nuestras operaciones están 
                  reguladas y certificadas según los estándares nacionales e internacionales 
                  de gestión ambiental y manejo de residuos sólidos.
                </Typography>
                <Typography variant="body1" paragraph sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
                  Mantenemos un compromiso constante con la transparencia y el cumplimiento 
                  de todas las regulaciones aplicables, asegurando que nuestras prácticas 
                  comerciales y operativas cumplan con los más altos estándares de calidad 
                  y responsabilidad ambiental.
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Chip 
                    label="ISO 14001" 
                    color="primary" 
                    variant="outlined"
                    icon={<VerifiedUser />}
                  />
                  <Chip 
                    label="Licencia Ambiental" 
                    color="primary" 
                    variant="outlined"
                    icon={<Assignment />}
                  />
                  <Chip 
                    label="Cumplimiento Normativo" 
                    color="primary" 
                    variant="outlined"
                    icon={<Gavel />}
                  />
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </SectionContainer>
    </Box>
  );
};

export default Legal; 