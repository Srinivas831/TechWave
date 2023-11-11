import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {useNavigate} from "react-router-dom";
import { url } from '../api';
// https://calm-gold-slug-toga.cyclic.app/
function Signup() {
  const defaultTheme = createTheme();

  // Define state variables for storing user input
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [alertMessage, setAlertMessage] = React.useState('');
  const [alertSeverity, setAlertSeverity] = React.useState('success');
  const [showAlert, setShowAlert] = React.useState(false); 
    const nav=useNavigate();

  // const isAuth=Cookies.get("token");

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can access the user input values from the state variables
    console.log({
      firstName,
      lastName,
      email,
      password,
    });
    const newData={
        userName:firstName,
        email:email,
        password:password
    }
    axios.post(`${url}/users/register`, newData)
    .then((res) => {
      if (res.data.message === "Registered Successfully") {
        setAlertSeverity('success');
        setAlertMessage('Registered Successfully');
      } 
      else {
        setAlertSeverity('error');
        setAlertMessage(res.data.message);
      }
      setShowAlert(true);
    })
    .catch((err) => console.log(err));
  };
  
  React.useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
        if(alertSeverity==="success"){
            nav("/login");
        }
      }, 2000)
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
  
    <ThemeProvider theme={defaultTheme}>
       
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginBottom:4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      {showAlert && (
        <Stack
        sx={{
          width: ["48%", "20%"],
          position: 'fixed',
          top: ['90%'], 
          right: '0.1%', 
          transform: 'translate(-30%, -30%)',
        }}
        spacing={2}
      >
          <Alert variant="filled" severity={alertSeverity}>
            {alertMessage}
          </Alert>
        </Stack>
      )}
    </ThemeProvider>
  );
}

export default Signup;
