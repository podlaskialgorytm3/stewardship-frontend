import { DEFAULT_LOGIN_STATE } from "../constants/constants";
import { loginFormSchema } from "../utils/utils";
import { Loading } from "../../../shared/components/loading";
import { useLogin } from "../api/use-login";
import useMutateData from "../../../shared/hooks/use-mutate-data";
import { useErrorMessage } from "../../../shared/hooks/use-error-message";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "../../../shared/themes/themes";
import { NavLink } from "react-router-dom";

export const Login: React.FC = () => {
  const { mutate, isPending, isError, error } = useLogin();
  const { formErrors, handleSubmit, handleChange } = useMutateData({
    data: ["email", "password"],
    schema: loginFormSchema,
    mutate: mutate,
    DEFAULT_STATE: DEFAULT_LOGIN_STATE,
  });
  useErrorMessage({ error: error || { message: "" }, isError });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isPending ? (
          <>
            <Loading size={100} />
          </>
        ) : (
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={() => handleChange("email")}
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
                onChange={() => handleChange("password")}
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
                  <NavLink
                    to="/forgot-password"
                    className="text-sm hover:underline"
                  >
                    {"Forgot password?"}
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink to="/register" className="text-sm hover:underline">
                    {"Don't you have account? Sign Up"}
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
};
