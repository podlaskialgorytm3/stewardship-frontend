import { useParams } from "react-router-dom";
import { passwordFormSchema } from "../utils/utils";
import useErrorMessage from "../../../shared/hooks/use-error-message";
import useMutateData from "../../../shared/hooks/use-mutate-data";
import { useResetPassword } from "../api/use-reset-password";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "../../../shared/themes/themes";

import Loading from "../../../shared/components/loading";

export const ResetPassword: React.FC = () => {
  const { mutate, isPending, isError, error } = useResetPassword();
  const { formErrors, handleSubmit, handleChange } = useMutateData({
    data: ["password", "token"],
    schema: passwordFormSchema,
    mutate: mutate,
    DEFAULT_STATE: { password: "", token: "" },
  });
  const { token } = useParams<{ token: string }>();

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
              Reset Password
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
                id="password"
                label="Password"
                name="password"
                type="password"
                autoFocus
                onChange={() => handleChange("password")}
                helperText={formErrors.password}
                error={Boolean(formErrors.password)}
              />
              <TextField
                value={token}
                required
                id="token"
                name="token"
                sx={{ display: "none" }}
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
        )}
      </Container>
    </ThemeProvider>
  );
};
