import { emailFormSchema } from '../utils/utils';
import Loading from '../../../shared/components/loading';
import useSendEmail  from '../api/use-send-email';
import useMutateData from '../../../shared/hooks/use-mutate-data';
import useErrorMessage from '../../../shared/hooks/use-error-message';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../../../shared/themes/themes';

export const ForgotPassword: React.FC = () => {
  const { mutate, isPending, isError, error} = useSendEmail();
  const { formErrors, handleSubmit, handleChange } = useMutateData({
    data: ['email'],
    schema: emailFormSchema,
    mutate: mutate,
    DEFAULT_STATE: { email: '' },
  });
  useErrorMessage({ error: error || { message: '' }, isError });

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