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
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { url } from '../api';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Login() {
  
  const [email, setEmail] = React.useState(''); // State variable for email
  const [password, setPassword] = React.useState(''); // State variable for password
  const [alertMessage, setAlertMessage] = React.useState('');
  const [alertSeverity, setAlertSeverity] = React.useState('success');
  const [showAlert, setShowAlert] = React.useState(false); 
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log({
    //   email,
    //   password,
    // });
    const data={
        email,
        password
    }
    axios.post(`${url}/users/login`,data)
    .then((res) => {
      if (res.data.message === "Logged Successfully") {
        Cookies.set("token",res.data.token, { expires: 365 });
        Cookies.set("user",res.data.user.userName, { expires: 365 });
        Cookies.set("userId",res.data.user._id, { expires: 365 });
        if(res.data.user.userName == "admin"){
          Cookies.set("isAdmin",res.data.user.userName, { expires: 365 });
        }
        setAlertSeverity('success');
        setAlertMessage('Logged Successfully');
      } 
      else {
        setAlertSeverity('error');
        setAlertMessage(res.data.message);
      }
      setShowAlert(true);
    })
    .catch((err) => console.log(err));
  };
 const nav=useNavigate();
  React.useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
        if(alertSeverity==="success"){
          nav(-2);
      }
      }, 2000)
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <div>
      <Navbar />
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginBottom: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
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
    </div>
  );
}
