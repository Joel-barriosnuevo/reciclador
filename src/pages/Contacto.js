import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  useTheme,
  Card,
  CardContent,
  Chip,
  Divider,
  IconButton,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import {
  LocationOn,
  Phone,
  Email,
  Business,
  AccessTime,
  WhatsApp,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Send,
  CheckCircle,
  Schedule,
  Support,
} from '@mui/icons-material';

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

const ContactContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.paper,
}));

const ContactForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[8],
  border: '1px solid rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    boxShadow: theme.shadows[12],
  },
}));

const ContactCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
  textAlign: 'center',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  border: '1px solid rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
    background: 'linear-gradient(135deg, #2e7d32 0%, #388e3c 100%)',
    color: 'white',
    '& .MuiSvgIcon-root': {
      color: 'white',
    },
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1.5),
  border: '1px solid rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: theme.shadows[4],
  },
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  backgroundColor: 'rgba(46, 125, 50, 0.05)',
  border: '1px solid rgba(46, 125, 50, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(46, 125, 50, 0.1)',
    transform: 'translateX(5px)',
  },
}));

const Contacto = () => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Aquí iría la lógica para enviar el formulario
    alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
    reset();
  };

  const contactMethods = [
    {
      icon: <Phone sx={{ fontSize: 40 }} />,
      title: 'Llámanos',
      subtitle: 'Atención telefónica',
      primary: '+57 (5) 300-123-4567',
      secondary: '+57 300-987-6543',
      action: 'Llamar ahora',
      href: 'tel:+573001234567',
    },
    {
      icon: <WhatsApp sx={{ fontSize: 40 }} />,
      title: 'WhatsApp',
      subtitle: 'Mensaje directo',
      primary: '+57 300-987-6543',
      secondary: 'Respuesta inmediata',
      action: 'Enviar mensaje',
      href: 'https://wa.me/573009876543',
    },
    {
      icon: <Email sx={{ fontSize: 40 }} />,
      title: 'Email',
      subtitle: 'Correo electrónico',
      primary: 'info@elreciclador.com',
      secondary: 'ventas@elreciclador.com',
      action: 'Enviar email',
      href: 'mailto:info@elreciclador.com',
    },
  ];

  const officeHours = [
    { day: 'Lunes - Viernes', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sábados', hours: '8:00 AM - 12:00 PM' },
    { day: 'Domingos', hours: 'Cerrado' },
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
              Contáctanos
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{
                opacity: 0.9,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Estamos aquí para ayudarte. Ponte en contacto con nosotros y descubre 
              cómo podemos transformar tu gestión de residuos.
            </Typography>
          </motion.div>
        </Container>
      </HeroSection>

      {/* Métodos de contacto */}
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
              ¿Cómo te podemos ayudar?
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {contactMethods.map((method, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    style={{ width: '100%' }}
                  >
                    <ContactCard elevation={3} sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ color: 'primary.main', mb: 2, textAlign: 'center' }}>
                        {method.icon}
                      </Box>
                      <Typography variant="h5" component="h3" gutterBottom align="center">
                        {method.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textAlign: 'center' }}>
                        {method.subtitle}
                      </Typography>
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, textAlign: 'center' }}>
                        {method.primary}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: 'center' }}>
                        {method.secondary}
                      </Typography>
                      <Box sx={{ mt: 'auto', textAlign: 'center' }}>
                        <Button
                          component="a"
                          href={method.href}
                          target="_blank"
                          variant="contained"
                          startIcon={<Send />}
                          sx={{
                            backgroundColor: 'primary.main',
                            '&:hover': {
                              backgroundColor: 'primary.dark',
                            },
                          }}
                        >
                          {method.action}
                        </Button>
                      </Box>
                    </ContactCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Formulario y información */}
      <ContactContainer>
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
              Envíanos un mensaje
            </Typography>

            <Grid container spacing={6} justifyContent="center">
              {/* Formulario de contacto */}
              <Grid item xs={12} lg={8}>
                <ContactForm>
                  <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                    Formulario de Contacto
                  </Typography>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Nombre *"
                          {...register('nombre', { required: 'Este campo es requerido' })}
                          error={!!errors.nombre}
                          helperText={errors.nombre?.message}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Apellido *"
                          {...register('apellido', { required: 'Este campo es requerido' })}
                          error={!!errors.apellido}
                          helperText={errors.apellido?.message}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Correo electrónico *"
                          type="email"
                          {...register('email', {
                            required: 'Este campo es requerido',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Correo electrónico inválido',
                            },
                          })}
                          error={!!errors.email}
                          helperText={errors.email?.message}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Teléfono *"
                          {...register('telefono', {
                            required: 'Este campo es requerido',
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message: 'Número de teléfono inválido',
                            },
                          })}
                          error={!!errors.telefono}
                          helperText={errors.telefono?.message}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Empresa"
                          {...register('empresa')}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Asunto *"
                          {...register('asunto', { required: 'Este campo es requerido' })}
                          error={!!errors.asunto}
                          helperText={errors.asunto?.message}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Mensaje *"
                          multiline
                          rows={4}
                          {...register('mensaje', { required: 'Este campo es requerido' })}
                          error={!!errors.mensaje}
                          helperText={errors.mensaje?.message}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Alert severity="info" sx={{ mb: 2 }}>
                          Los campos marcados con * son obligatorios
                        </Alert>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          startIcon={<Send />}
                          sx={{
                            backgroundColor: theme.palette.primary.main,
                            '&:hover': {
                              backgroundColor: theme.palette.primary.dark,
                            },
                          }}
                        >
                          Enviar Mensaje
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </ContactForm>
              </Grid>

              {/* Información de contacto */}
              <Grid item xs={12} lg={4}>
                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                    Información de Contacto
                  </Typography>
                  
                  <ContactInfo>
                    <LocationOn sx={{ mr: 2, color: theme.palette.primary.main }} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Barranquilla, Atlántico
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Colombia
                      </Typography>
                    </Box>
                  </ContactInfo>

                  <ContactInfo>
                    <Phone sx={{ mr: 2, color: theme.palette.primary.main }} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        <a href="tel:+573001234567" style={{ color: 'inherit', textDecoration: 'none' }}>
                          +57 (5) 300-123-4567
                        </a>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <a href="tel:+573009876543" style={{ color: 'inherit', textDecoration: 'none' }}>
                          +57 300-987-6543
                        </a>
                      </Typography>
                    </Box>
                  </ContactInfo>

                  <ContactInfo>
                    <Email sx={{ mr: 2, color: theme.palette.primary.main }} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        <a href="mailto:info@elreciclador.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                          info@elreciclador.com
                        </a>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <a href="mailto:ventas@elreciclador.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                          ventas@elreciclador.com
                        </a>
                      </Typography>
                    </Box>
                  </ContactInfo>

                  <Divider sx={{ my: 3 }} />

                  {/* Horarios de atención */}
                  <Typography variant="h6" gutterBottom>
                    Horarios de Atención
                  </Typography>
                  {officeHours.map((schedule, index) => (
                    <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">{schedule.day}</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {schedule.hours}
                      </Typography>
                    </Box>
                  ))}

                  <Divider sx={{ my: 3 }} />

                  {/* Redes sociales */}
                  <Typography variant="h6" gutterBottom>
                    Síguenos en Redes Sociales
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <SocialButton component="a" href="https://facebook.com" target="_blank">
                      <Facebook />
                    </SocialButton>
                    <SocialButton component="a" href="https://instagram.com" target="_blank">
                      <Instagram />
                    </SocialButton>
                    <SocialButton component="a" href="https://twitter.com" target="_blank">
                      <Twitter />
                    </SocialButton>
                    <SocialButton component="a" href="https://linkedin.com" target="_blank">
                      <LinkedIn />
                    </SocialButton>
                    <SocialButton component="a" href="https://wa.me/573009876543" target="_blank">
                      <WhatsApp />
                    </SocialButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </ContactContainer>

      {/* Mapa y ubicación */}
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
              Nuestra Ubicación
            </Typography>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    height: 400,
                    backgroundColor: '#f5f5f5',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(0,0,0,0.1)',
                  }}
                >
                  <Typography variant="h6" color="text.secondary">
                    Mapa interactivo aquí
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>
                  Oficina Principal
                </Typography>
                <Typography variant="body1" paragraph>
                  Nuestra oficina principal se encuentra ubicada en el corazón de Barranquilla, 
                  estratégicamente posicionada para atender a toda la región del Atlántico.
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <CheckCircle sx={{ color: 'primary.main', mr: 1 }} />
                  <Typography variant="body2">Fácil acceso desde cualquier punto de la ciudad</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <CheckCircle sx={{ color: 'primary.main', mr: 1 }} />
                  <Typography variant="body2">Estacionamiento disponible para visitantes</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <CheckCircle sx={{ color: 'primary.main', mr: 1 }} />
                  <Typography variant="body2">Acceso para personas con movilidad reducida</Typography>
                </Box>
                <Button
                  variant="outlined"
                  startIcon={<LocationOn />}
                  sx={{ mt: 2 }}
                >
                  Ver en Google Maps
                </Button>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Contacto; 