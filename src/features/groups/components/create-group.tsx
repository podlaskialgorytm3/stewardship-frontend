import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../../../shared/themes/themes';

import Loading from '../../../shared/components/loading';

export const CreateGroup = () => {
    const isPending = false;   

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
          <h1 className='text-3xl font-bold'>Create Group</h1> 
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="group-name"
              name="name"
              autoFocus
            //   onChange={() => handleChange('email')}
            //   helperText={formErrors.email}
            //   error={Boolean(formErrors.email)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="category"
              label="group-category"
              type="text"
              id="category"
            //   onChange={() => handleChange('password')}
            //   helperText={formErrors.password}
            //   error={Boolean(formErrors.password)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create group
            </Button>
          </Box>
        </Box>
        }
      </Container>  
    </ThemeProvider>
    );
}