import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "../../../shared/themes/themes";

import { Loading } from "../../../shared/components/loading";
import { useCreateGroup } from "../api/use-create-group";
import useMutateData from "../../../shared/hooks/use-mutate-data";
import { groupSchema } from "../utils/utils";
import { DEFAULT_GROUP_STATE } from "../constants/constants";
import { useErrorMessage } from "../../../shared/hooks/use-error-message";

export const CreateGroup = () => {
  const { mutate, isPending, isError, error } = useCreateGroup();
  const { formErrors, handleSubmit, handleChange } = useMutateData({
    data: ["name", "category"],
    schema: groupSchema,
    mutate: mutate,
    DEFAULT_STATE: DEFAULT_GROUP_STATE,
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
            <h1 className="text-3xl font-bold">create-group</h1>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={handleSubmit}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="group-name"
                name="name"
                autoFocus
                onChange={() => handleChange("name")}
                helperText={formErrors.name}
                error={Boolean(formErrors.name)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="category"
                label="group-category"
                type="text"
                id="category"
                onChange={() => handleChange("category")}
                helperText={formErrors.category}
                error={Boolean(formErrors.category)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                create-group
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
};
