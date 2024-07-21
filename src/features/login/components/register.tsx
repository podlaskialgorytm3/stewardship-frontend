import { useState } from 'react';

import { DEFAULT_REGISTER_STATE } from '../constants/constants';
import { RegisterForm } from '../types/types';
import { registerFormSchema } from '../utils/utils';
import { fromZodError } from 'zod-validation-error';
import  useRegister  from '../api/use-register';

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

export const Register: React.FC = () => {
  const [ formErrors, setFormErrors ] = useState<RegisterForm>(DEFAULT_REGISTER_STATE);
  const { mutate, isPending, isError, error } = useRegister();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
            email: data.get('email') as string,
            password: data.get('password') as string,
            name: data.get('name') as string,
            img: data.get('img') as string
    }

    try{
      const user = registerFormSchema.parse(formData);
      setFormErrors(DEFAULT_REGISTER_STATE);
      mutate(user)
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

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
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
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={() => handleChange('name')}
              helperText={formErrors.name}
              error={Boolean(formErrors.name)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="img"
              label="Image"
              name="img"
              autoComplete="img"
              autoFocus
              onChange={() => handleChange('img')}
              helperText={formErrors.img}
              error={Boolean(formErrors.img)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email-register"
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
              autoComplete="password-register"
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
      </Container>
    </ThemeProvider>
  );
}