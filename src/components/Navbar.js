import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GavelIcon from '@mui/icons-material/Gavel';
import HandshakeIcon from '@mui/icons-material/Handshake';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const drawerWidth = 72;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.primary.dark,
    borderRadius: '24px',
    margin: 'auto 0',
    right: 10,
    left: 'auto',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    
    alignItems: 'center',
    boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5, 0, 1.5, 0),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledListItemButton = styled(ListItemButton)(({ theme, active }) => ({
  margin: theme.spacing(0.3, 0.8),
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 1.5),
  '&:hover': {
    backgroundColor: 'rgba(46, 125, 50, 0.1)',
    transform: 'translateX(5px)',
    transition: 'all 0.3s ease',
  },
  ...(active && {
    backgroundColor: 'rgba(46, 125, 50, 0.1)',
    borderLeft: `4px solid ${theme.palette.primary.main}`,
  }),
}));

const QuickAccessButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2, 0),
  alignSelf: 'center',
  background: theme.palette.background.paper,
  color: theme.palette.primary.main,
  boxShadow: '0 2px 8px rgba(46,125,50,0.10)',
  borderRadius: 16,
  width: 48,
  height: 48,
  '&:hover': {
    background: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    transform: 'scale(1.08) rotate(-10deg)',
    transition: 'all 0.2s',
  },
}));

const QuickAccessIcon = styled(MenuIcon)(({ theme }) => ({
  fontSize: 32,
}));

const QuickAccessItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.5, 2),
  borderRadius: theme.spacing(1),
  cursor: 'pointer',
  transition: 'background 0.2s',
  '&:hover': {
    background: theme.palette.primary.light,
    color: theme.palette.primary.dark,
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  margin: theme.spacing(0.5),
  padding: theme.spacing(1),
  '&:hover': {
    color: theme.palette.primary.light,
    transform: 'scale(1.1)',
    transition: 'all 0.2s',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '2rem',
  },
}));

const SocialContainer = styled(Box)(({ theme }) => ({
  marginTop: 'auto',
  marginBottom: '0',
  padding: theme.spacing(2, 0),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(6),
  backgroundColor: 'rgba(163, 202, 165, 0.15)',
  width: '100%',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(46, 125, 50, 0.2)',
}));

const LogoTopLeft = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: theme.spacing(2),
  left: theme.spacing(2),
  zIndex: 1200,
  '& img': {
    height: '70px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  }
}));

const pages = [
  { name: 'Inicio', path: '/', icon: <HomeIcon /> },
  { name: '¿Quiénes somos?', path: '/quienes-somos', icon: <InfoIcon /> },
  { name: 'Contacto', path: '/contacto', icon: <ContactMailIcon /> },
  { name: 'Legal', path: '/legal', icon: <GavelIcon /> },
  { name: 'Aliados', path: '/aliados', icon: <HandshakeIcon /> },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const [quickOpen, setQuickOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleQuickOpen = () => setQuickOpen(true);
  const handleQuickClose = () => setQuickOpen(false);

  const drawer = (
    <>
      <LogoContainer>
        <img src="/img/logo.png" alt="El Reciclador" style={{ maxHeight: '40px', borderRadius: 8 }} />
      </LogoContainer>
      <QuickAccessButton onClick={handleQuickOpen} aria-label="Acceso rápido">
        <QuickAccessIcon />
      </QuickAccessButton>
      <SocialContainer>
        <SocialIconButton aria-label="Facebook" component="a" href="https://facebook.com" target="_blank">
          <FacebookIcon />
        </SocialIconButton>
        <SocialIconButton aria-label="Instagram" component="a" href="https://instagram.com" target="_blank">
          <InstagramIcon />
        </SocialIconButton>
        <SocialIconButton aria-label="Twitter" component="a" href="https://twitter.com" target="_blank">
          <TwitterIcon />
        </SocialIconButton>
        <SocialIconButton aria-label="LinkedIn" component="a" href="https://linkedin.com" target="_blank">
          <LinkedInIcon />
        </SocialIconButton>
      </SocialContainer>
    </>
  );

  return (
    <>
      <LogoTopLeft>
        <img src="/img/logo.png" alt="El Reciclador" />
      </LogoTopLeft>
      <Box
        component="nav"
        sx={{ 
          width: { md: drawerWidth }, 
          flexShrink: { md: 0 }, 
          position: 'fixed', 
          right: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          height: '80vh', 
          zIndex: 1201,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <StyledDrawer variant="permanent" anchor="right" open>
          <QuickAccessButton onClick={handleQuickOpen} aria-label="Acceso rápido">
            <QuickAccessIcon />
          </QuickAccessButton>
          <SocialContainer>
            <SocialIconButton aria-label="Facebook" component="a" href="https://facebook.com" target="_blank">
              <FacebookIcon />
            </SocialIconButton>
            <SocialIconButton aria-label="Instagram" component="a" href="https://instagram.com" target="_blank">
              <InstagramIcon />
            </SocialIconButton>
            <SocialIconButton aria-label="Twitter" component="a" href="https://twitter.com" target="_blank">
              <TwitterIcon />
            </SocialIconButton>
            <SocialIconButton aria-label="LinkedIn" component="a" href="https://linkedin.com" target="_blank">
              <LinkedInIcon />
            </SocialIconButton>
          </SocialContainer>
        </StyledDrawer>
      </Box>
      <Dialog
        open={quickOpen}
        onClose={handleQuickClose}
        maxWidth={false}
        PaperProps={{
          sx: {
            position: 'fixed',
            top: 32,
            right: 100,
            m: 0,
            width: 300,
            borderRadius: 6,
            bgcolor: 'background.paper',
            boxShadow: 24,
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(0,0,0,0.7)',
          },
        }}
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, bgcolor: 'primary.main', color: '#fff' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img src="/img/logo.png" alt="El Reciclador" style={{ height: '32px', borderRadius: 8 }} />
            <Typography variant="h6" sx={{ fontWeight: 100, fontSize: '1rem' }}>Accesos rápidos</Typography>
          </Box>
          <IconButton onClick={handleQuickClose} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ bgcolor: 'background.paper', p: 3 }}>
          {pages.map((page) => (
            <QuickAccessItem
              key={page.name}
              onClick={() => {
                setQuickOpen(false);
                window.location.href = page.path;
              }}
            >
              <Box sx={{ color: 'primary.main', display: 'flex', alignItems: 'center' }}>{page.icon}</Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>{page.name}</Typography>
            </QuickAccessItem>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar; 