import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  useTheme,
  IconButton,
  Divider,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  WhatsApp,
  Email,
  Phone,
  LocationOn,
  Business,
  Recycling,
  TrendingUp,
  EmojiEvents,
} from '@mui/icons-material';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
  padding: theme.spacing(8, 0, 4, 0),
  marginTop: 'auto',
  width: '100%',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #4caf50 0%, #2e7d32 50%, #1b5e20 100%)',
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'none',
  display: 'block',
  padding: theme.spacing(0.5, 0),
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.light,
    transform: 'translateX(5px)',
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  margin: theme.spacing(0.5),
  padding: theme.spacing(1),
  border: '1px solid rgba(255,255,255,0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.light,
    backgroundColor: 'rgba(255,255,255,0.1)',
    transform: 'translateY(-3px)',
    borderColor: theme.palette.primary.light,
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.light,
    fontSize: '1.2rem',
  },
}));

const StatChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.1)',
  color: theme.palette.common.white,
  border: '1px solid rgba(255,255,255,0.2)',
  margin: theme.spacing(0.5),
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
}));

const Footer = () => {
  const theme = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const quickStats = [
    { icon: <Recycling />, label: '15+ Años', value: 'Experiencia' },
    { icon: <TrendingUp />, label: '50K+', value: 'Toneladas' },
    { icon: <EmojiEvents />, label: '25+', value: 'Certificaciones' },
  ];

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="center">
          {/* Información de la empresa */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3, textAlign: 'center' }}>
              <img 
                src="/img/logo.png" 
                alt="El Reciclador" 
                style={{ 
                  maxHeight: '80px',
                  filter: 'brightness(0) invert(1)',
                }} 
              />
            </Box>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, opacity: 0.9, textAlign: 'center' }}>
              Empresa prestadora del servicio público de aseo, comprometida con el medio ambiente 
              y la sostenibilidad. Más de 15 años transformando residuos en oportunidades.
            </Typography>
            
            {/* Estadísticas rápidas */}
            <Box sx={{ mb: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                Nuestros Logros
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                {quickStats.map((stat, index) => (
                  <StatChip
                    key={index}
                    icon={stat.icon}
                    label={`${stat.label} ${stat.value}`}
                    size="small"
                  />
                ))}
              </Box>
            </Box>

            {/* Redes sociales */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Síguenos
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                <SocialIconButton aria-label="Facebook" component="a" href="https://www.facebook.com/profile.php?id=61577916934554" target="_blank">
                  <Facebook />
                </SocialIconButton>
                <SocialIconButton aria-label="Instagram" component="a" href="https://www.instagram.com/rec_iclador/" target="_blank">
                  <Instagram />
                </SocialIconButton>
                <SocialIconButton aria-label="Twitter" component="a" href="https://twitter.com" target="_blank">
                  <Twitter />
                </SocialIconButton>
                <SocialIconButton aria-label="LinkedIn" component="a" href="https://linkedin.com" target="_blank">
                  <LinkedIn />
                </SocialIconButton>
                <SocialIconButton aria-label="WhatsApp" component="a" href="https://wa.me/573013920582" target="_blank">
                  <WhatsApp />
                </SocialIconButton>
              </Box>
            </Box>
          </Grid>

          {/* Enlaces rápidos */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ mb: 3, textAlign: 'center' }}>
              Enlaces Rápidos
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
              <FooterLink href="/">Inicio</FooterLink>
              <FooterLink href="/quienes-somos">¿Quiénes somos?</FooterLink>
              <FooterLink href="/servicios">Servicios</FooterLink>
              <FooterLink href="/aliados">Aliados</FooterLink>
              <FooterLink href="/contacto">Contáctanos</FooterLink>
            </Box>
          </Grid>

          {/* Servicios */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ mb: 3, textAlign: 'center' }}>
              Servicios
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
              <FooterLink href="/servicios#reciclaje">Reciclaje Integral</FooterLink>
              <FooterLink href="/servicios#gestion">Gestión de Residuos</FooterLink>
              <FooterLink href="/servicios#consultoria">Consultoría Ambiental</FooterLink>
              <FooterLink href="/servicios#educacion">Educación Ambiental</FooterLink>
              <FooterLink href="/servicios#tecnologia">Tecnología Verde</FooterLink>
            </Box>
          </Grid>

          {/* Información legal */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ mb: 3, textAlign: 'center' }}>
              Información Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
              <FooterLink href="/legal">Términos y Condiciones</FooterLink>
              <FooterLink href="/legal#privacidad">Política de Privacidad</FooterLink>
              <FooterLink href="/legal#cookies">Política de Cookies</FooterLink>
              <FooterLink href="/pqr">PQR</FooterLink>
              <FooterLink href="/legal#normatividad">Normatividad</FooterLink>
            </Box>
          </Grid>

          {/* Información de contacto */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom sx={{ mb: 3, textAlign: 'center' }}>
              Contacto
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
              <ContactItem sx={{ justifyContent: 'center', textAlign: 'center' }}>
                <LocationOn />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    Calle 17 Cra 24-21, Barranquilla, Atlántico
                  </Typography>
                </Box>
              </ContactItem>
              
              <ContactItem sx={{ justifyContent: 'center', textAlign: 'center' }}>
                <Phone />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    (301) 392-0582
                  </Typography>
                </Box>
              </ContactItem>
              
              <ContactItem sx={{ justifyContent: 'center', textAlign: 'center' }}>
                <Email />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    elrecicladoresp@gmail.com
                  </Typography>
                </Box>
              </ContactItem>
              
              <ContactItem sx={{ justifyContent: 'center', textAlign: 'center' }}>
                <Business />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    Horario de Atención
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Lun - Vie: 8:00 AM - 6:00 PM
                  </Typography>
                </Box>
              </ContactItem>
            </Box>
          </Grid>
        </Grid>

        {/* Línea divisoria */}
        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Información adicional */}
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={{ opacity: 0.8, textAlign: 'center' }}>
              © {new Date().getFullYear()} El Reciclador ESP. Todos los derechos reservados. 
              Empresa comprometida con la sostenibilidad y el medio ambiente.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Chip 
                label="ISO 14001" 
                size="small" 
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.2)',
                }} 
              />
              <Chip 
                label="Certificación Ambiental" 
                size="small" 
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.2)',
                }} 
              />
              <Chip 
                label="Empresa Verde" 
                size="small" 
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.2)',
                }} 
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 