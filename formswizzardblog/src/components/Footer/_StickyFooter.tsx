import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function FooterContent() {
  return (
    <Typography>
      <div variant="body2" color="text.secondary" justifyContent="center" alignItems="center">
        <div >
          <p>
          {'FormsWizard'}
          {' '}
          {new Date().getFullYear()}
          {''}
          </p>
        </div>

        <div color="text.secondary" justifyContent="center" alignItems="center">
          <p>
          {'Funded through '}
          <Link color="inherit" href="https://prototypefund.de/">
            <img src="https://i.postimg.cc/zGJGSPZr/Screenshot-2023-04-04-at-13-50-44.png" width="24rem" height="24rem" alt="Logo" ></img>
            PrototypeFund
          </Link>{' '}
          </p>
        </div>
      </div>
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        bottom: 0,
        position: 'fixed',
        alignItems: 'center',

      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
        <Typography variant="h5" component="h2" gutterBottom>
          {''}
        </Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 4,
          px: 30,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container >
          <FooterContent />
        </Container>
      </Box>
    </Box>
  );
}