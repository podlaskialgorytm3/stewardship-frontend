import { useState, useEffect } from 'react';

import { emailFormSchema } from '../utils/utils';
import { fromZodError } from 'zod-validation-error';
import useSendEmail  from '../api/use-send-email';

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

export const ForgotPassword: React.FC = () => {
  const [ formErrors, setFormErrors ] = useState<{email: string}>({email: ''});
  const {mutate, isPending, isError, error} = useSendEmail();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      email: data.get('email') as string,
    }

    try{
      const user = emailFormSchema.parse(formData);
      setFormErrors({email: ''});
      mutate(user.email);
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
            Forgot Password
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Email
            </Button>
          </Box>
        </Box>
        }
      </Container>  
    </ThemeProvider>
  );
}