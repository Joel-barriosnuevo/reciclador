import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
  width: '100%',
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.primary.light,
  },
}));

const Footer = () => {
  const theme = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        {isHome ? (
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 2 }}>
                <img src="/img/logo.png" alt="El Reciclador" style={{ maxHeight: '70px' }} />
              </Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Empresa prestadora del servicio público de aseo, comprometida con el medio ambiente y la sostenibilidad.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Enlaces
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <FooterLink href="/quienes-somos">¿Quiénes somos?</FooterLink>
                <FooterLink href="/servicios">Servicios</FooterLink>
                <FooterLink href="/normatividad">Normatividad</FooterLink>
                <FooterLink href="/pqr">PQR</FooterLink>
                <FooterLink href="/contacto">Contáctanos</FooterLink>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Contacto
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Calle 17 Cra 24-21, Barranquilla
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                elrecicladoresp@gmail.com
              </Typography>
              <Typography variant="body2">
                +57 301 392-0582
              </Typography>
            </Grid>
          </Grid>
        ) : null}
        <Box sx={{ 
          mt: isHome ? 4 : 0,
          pt: isHome ? 2 : 0,
          borderTop: isHome ? `1px solid ${theme.palette.primary.light}` : 'none',
          textAlign: 'center',
          padding: isHome ? 0 : theme.spacing(2, 0)
        }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} El Reciclador. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 