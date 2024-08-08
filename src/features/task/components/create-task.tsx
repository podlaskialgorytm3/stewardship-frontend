import { useParams } from "react-router-dom"
import Loading  from "../../../shared/components/loading";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../../../shared/themes/themes';
import { Select, MenuItem } from '@mui/material';

export const CreateTask: React.FC<{
    handleNext: () => void
}> = ({
    handleNext
}) => {
    const { id } = useParams<{id: string}>();

    const isPending = false;

    return (
        <>
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
                <h1 className='text-3xl font-bold'>Create task</h1> 
                <Box component="form" noValidate sx={{ mt: 1 }} >
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
                        required
                        fullWidth
                        id="name"
                        label="task-name"
                        name="name"
                        autoFocus
                        //onChange={() => handleChange('name')}
                        //helperText={formErrors.name}
                        //error={Boolean(formErrors.name)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="start-date"
                        label="start-date"
                        type="datetime-local"
                        id="start-date"
                        //onChange={() => handleChange('category')}
                        //helperText={formErrors.category}
                        //error={Boolean(formErrors.category)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="end-date"
                        label="end-date"
                        type="datetime-local"
                        id="end-date"
                        //onChange={() => handleChange('category')}
                        //helperText={formErrors.category}
                        //error={Boolean(formErrors.category)}
                    />
                    <Select
                        required
                        label="status"
                        name="status"
                        id="status"
                        fullWidth
                        placeholder="status"
                        defaultValue={"waiting"}
                        sx={{mt: 2}}
                        //onChange={() => handleChange('category')}
                        //helperText={formErrors.category}
                        //error={Boolean(formErrors.category)}
                    >
                        <MenuItem value={"done"}>done</MenuItem>
                        <MenuItem value={"in progress"}>in progress</MenuItem>
                        <MenuItem value={"waiting"}>waiting</MenuItem>
                    </Select>
                    <Select
                        required
                        label="priority"
                        name="priority"
                        id="priority"
                        fullWidth
                        placeholder="priority"
                        defaultValue={"medium priority"}
                        sx={{mt: 2}}
                        //onChange={() => handleChange('category')}
                        //helperText={formErrors.category}
                        //error={Boolean(formErrors.category)}
                    >
                        <MenuItem value={"low priority"}>low priority</MenuItem>
                        <MenuItem value={"medium priority"}>medium priority</MenuItem>
                        <MenuItem value={"high priority"}>high priority</MenuItem>
                    </Select>
                    <TextField
                        margin="normal"
                        fullWidth
                        name="comments"
                        label="comments"
                        type="text"
                        id="comments"
                        //onChange={() => handleChange('category')}
                        //helperText={formErrors.category}
                        //error={Boolean(formErrors.category)}
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={() => handleNext()}
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Next
                    </Button>
                </Box>
                </Box>
                }
            </Container>  
    </ThemeProvider>
        </>
    )
}