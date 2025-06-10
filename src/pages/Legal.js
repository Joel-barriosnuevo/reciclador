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
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import DescriptionIcon from '@mui/icons-material/Description';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AssignmentIcon from '@mui/icons-material/Assignment';

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

const Legal = () => {
  const theme = useTheme();

  const legalInfo = [
    {
      title: 'Información Legal',
      items: [
        { icon: <BusinessIcon />, text: 'Razón Social: El Reciclador ESP' },
        { icon: <DescriptionIcon />, text: 'NIT: [Número de NIT]' },
        { icon: <VerifiedUserIcon />, text: 'Cámara de Comercio: [Número de registro]' },
      ],
    },
    {
      title: 'Documentos Legales',
      items: [
        { icon: <AssignmentIcon />, text: 'Licencia Ambiental' },
        { icon: <AssignmentIcon />, text: 'Permiso de Aprovechamiento' },
        { icon: <AssignmentIcon />, text: 'Certificación ISO 14001' },
      ],
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
              Información Legal
            </Typography>

            <Grid container spacing={4}>
              {legalInfo.map((section, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <StyledPaper elevation={3}>
                    <Typography
                      variant="h4"
                      component="h2"
                      gutterBottom
                      color="primary"
                      sx={{ mb: 3 }}
                    >
                      {section.title}
                    </Typography>
                    <List>
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

            <Box sx={{ mt: 6 }}>
              <Typography variant="h4" component="h2" gutterBottom color="primary">
                Cumplimiento Normativo
              </Typography>
              <Typography variant="body1" paragraph>
                El Reciclador ESP cumple con todas las normativas ambientales y legales 
                establecidas por las autoridades competentes. Nuestras operaciones están 
                reguladas y certificadas según los estándares nacionales e internacionales 
                de gestión ambiental y manejo de residuos sólidos.
              </Typography>
              <Typography variant="body1" paragraph>
                Mantenemos un compromiso constante con la transparencia y el cumplimiento 
                de todas las regulaciones aplicables, asegurando que nuestras prácticas 
                comerciales y operativas cumplan con los más altos estándares de calidad 
                y responsabilidad ambiental.
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </SectionContainer>
    </Box>
  );
};

export default Legal; 