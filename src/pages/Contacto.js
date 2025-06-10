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
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.paper,
}));

const ContactForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
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
    alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
    reset();
  };

  return (
    <ContactContainer>
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
            Contáctanos
          </Typography>

          <Grid container spacing={4}>
            {/* Información de contacto */}
            <Grid item xs={12} md={4}>
              <Box>
                <Typography variant="h5" gutterBottom>
                  Información de Contacto
                </Typography>
                <ContactInfo>
                  <LocationOnIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                  <Typography>
                    Calle 17 Cra 24-21, Barranquilla, Atlántico
                  </Typography>
                </ContactInfo>
                <ContactInfo>
                  <PhoneIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                  <Typography>
                    <a href="tel:+573013920582" style={{ color: 'inherit', textDecoration: 'none' }}>
                      +57 301 392-0582
                    </a>
                  </Typography>
                </ContactInfo>
                <ContactInfo>
                  <EmailIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                  <Typography>
                    <a href="mailto:elrecicladoresp@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                      elrecicladoresp@gmail.com
                    </a>
                  </Typography>
                </ContactInfo>
              </Box>
            </Grid>

            {/* Formulario de contacto */}
            <Grid item xs={12} md={8}>
              <ContactForm>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Nombre"
                        {...register('nombre', { required: 'Este campo es requerido' })}
                        error={!!errors.nombre}
                        helperText={errors.nombre?.message}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Apellido"
                        {...register('apellido', { required: 'Este campo es requerido' })}
                        error={!!errors.apellido}
                        helperText={errors.apellido?.message}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Correo electrónico"
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
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Teléfono"
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
                        label="Mensaje"
                        multiline
                        rows={4}
                        {...register('mensaje', { required: 'Este campo es requerido' })}
                        error={!!errors.mensaje}
                        helperText={errors.mensaje?.message}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
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
          </Grid>
        </motion.div>
      </Container>
    </ContactContainer>
  );
};

export default Contacto; 