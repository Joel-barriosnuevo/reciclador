import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const TopBarContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: 'white',
  padding: theme.spacing(1, 0),
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'center',
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
}));

const TopBar = () => {
  return (
    <TopBarContainer>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <ContactInfo>
            <Typography variant="body2" component="a" href="tel:+573013920582" sx={{ color: 'white', textDecoration: 'none' }}>
              <PhoneIcon fontSize="small" sx={{ mr: 0.5 }} />
              +57 301 392-0582
            </Typography>
            <Typography variant="body2" component="a" href="mailto:elrecicladoresp@gmail.com" sx={{ color: 'white', textDecoration: 'none' }}>
              <EmailIcon fontSize="small" sx={{ mr: 0.5 }} />
              elrecicladoresp@gmail.com
            </Typography>
            <Typography variant="body2" component="a" 
              href="https://www.google.com/search?q=Calle+17+Cra+24-21%2C+Barranquilla%2C+Atl%C3%A1ntico"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'white', textDecoration: 'none' }}
            >
              <LocationOnIcon fontSize="small" sx={{ mr: 0.5 }} />
              Calle 17 Cra 24-21, Barranquilla
            </Typography>
          </ContactInfo>
          <SocialIcons>
            <IconButton size="small" sx={{ color: 'white' }} component="a" href="https://www.facebook.com/profile.php?id=61577916934554" target="_blank">
              <FacebookIcon />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white' }} component="a" href="https://twitter.com" target="_blank">
              <TwitterIcon />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white' }} component="a" href="https://www.instagram.com/rec_iclador/" target="_blank">
              <InstagramIcon />
            </IconButton>
          </SocialIcons>
        </Box>
      </Container>
    </TopBarContainer>
  );
};

export default TopBar; 