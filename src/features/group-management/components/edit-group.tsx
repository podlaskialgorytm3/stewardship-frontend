import { useParams } from "react-router-dom"
import useCheckRole from "../../../api/hooks/use-check-role";
import useFetchGroup from "../api/use-fetch-group";
import useErrorMessage from "../../../shared/hooks/use-error-message";
import { AuthError } from "../../../shared/components/auth-error";
import Loading  from "../../../shared/components/loading";
import useMutateData from "../../../shared/hooks/use-mutate-data";
import { groupSchema } from "../utils/utils";
import { DEFAULT_GROUP_STATE } from "../../groups/constants/constants";
import useUpdateGroup from "../api/use-update-group";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../../../shared/themes/themes';

export const EditGroup: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const {data: isAdmin, isLoading: roleLoading } = useCheckRole(id as string) 
    const { data, isLoading, isError, error } = useFetchGroup(id as string);
    const { mutate, isPending } = useUpdateGroup();
    const { formErrors, handleSubmit, handleChange } = useMutateData({
        data: ['id', 'name', 'category'],
        schema: groupSchema,
        mutate: mutate,
        DEFAULT_STATE: DEFAULT_GROUP_STATE,
    });


    useErrorMessage({isError, error } as {isError: boolean, error: {message: string}});
    return (
        <>
            {
                !isLoading && !roleLoading && isAdmin && data ? (
                  
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
                                <h1 className='text-3xl font-bold'>Edit group</h1> 
                                <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit} >
                                <TextField
                                        margin="normal"
                                        defaultValue={id}
                                        required
                                        fullWidth
                                        id="id"
                                        label="id"
                                        name="id"
                                        autoFocus
                                        sx={{display: 'none'}}
                                    />
                                    <TextField
                                        margin="normal"
                                        defaultValue={data?.name}
                                        required
                                        fullWidth
                                        id="name"
                                        label="group-name"
                                        name="name"
                                        autoFocus
                                        onChange={() => handleChange('name')}
                                        helperText={formErrors.name}
                                        error={Boolean(formErrors.name)}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="category"
                                        label="group-category"
                                        defaultValue={data?.category}
                                        type="text"
                                        id="category"
                                        onChange={() => handleChange('category')}
                                        helperText={formErrors.category}
                                        error={Boolean(formErrors.category)}
                                    />
                                    <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    >
                                    Edit group
                                    </Button>
                                </Box>
                                </Box>
                                }
                            </Container>  
                    </ThemeProvider>
                ) : (
                    <AuthError>
                        You are not authorized to edit this group
                    </AuthError>
                )
            }
        </>
    )
}