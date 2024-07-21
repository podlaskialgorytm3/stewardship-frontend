import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { passwordFormSchema } from '../utils/utils';
import { fromZodError } from 'zod-validation-error';
import useResetPassword  from '../api/use-reset-password';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../../../shared/themes/themes';

import Loading from '../../../shared/components/loading';
import Swal from 'sweetalert2';

export const ResetPassword: React.FC = () => {
  const [ formErrors, setFormErrors ] = useState<{password: string}>({password: ''});
  const {mutate, isPending, isError, error} = useResetPassword();
  const { token } = useParams<{token: string}>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      password: data.get('password') as string,
    }

    try{
      const user = passwordFormSchema.parse(formData);
      setFormErrors({password: ''});
      mutate({newPassword: user.password, token} as {newPassword: string, token: string});
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
            Reset Password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              autoFocus
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
              Reset password
            </Button>
          </Box>
        </Box>
        }
      </Container>  
    </ThemeProvider>
  );
}