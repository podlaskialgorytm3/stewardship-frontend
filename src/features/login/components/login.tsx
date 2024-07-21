import { useState, useEffect } from 'react';

import { DEFAULT_LOGIN_STATE } from '../constants/constants';
import { LoginForm } from '../types/types';
import { loginFormSchema } from '../utils/utils';
import { fromZodError } from 'zod-validation-error';
import { useLogin } from '../api/use-login';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../../../shared/themes/themes';

import Loading from '../../../shared/components/loading';
import Swal from 'sweetalert2';

export const Login: React.FC = () => {
  const [ formErrors, setFormErrors ] = useState<LoginForm>(DEFAULT_LOGIN_STATE);
  const { mutate, isPending, isError, error } = useLogin();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      email: data.get('email') as string,
      password: data.get('password') as string
    }

    try{
      const user = loginFormSchema.parse(formData);
      setFormErrors(DEFAULT_LOGIN_STATE);
      mutate(user);

    }
    catch(error: any){
      const validationError = fromZodError(error);
      validationError.details.forEach((detail) => {
        setFormErrors((prevState) => (
          {
            ...prevState,
            [detail.path[0]]: detail.message
          }
        ))
      })
    }

  };

  const handleChange = (name: string) => {
    setFormErrors((prevState) => (
      {
        ...prevState,
        [name]: ''
      }
    ))
  }

  useEffect(() => {
    if(isError){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error?.message
      })
    }
  },[isError, error])

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      {isPending ? 
      <>
        <Loading size={100} />
      </>
      :
        <Box
          sx={{
            marginTop: 8,
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
              onChange={() => handleChange('email')}
              helperText={formErrors.email}
              error={Boolean(formErrors.email)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
              onChange={() => handleChange('password')}
              helperText={formErrors.password}
              error={Boolean(formErrors.password)}
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
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        }
      </Container>  
    </ThemeProvider>
  );
}