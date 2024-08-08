import Loading  from "../../../shared/components/loading";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../../../shared/themes/themes';
import { Select, MenuItem } from '@mui/material';

import { useState } from "react";

export const CreateSubtask: React.FC<{
    handleNext: () => void,
    handleBack: () => void
}> = ({
    handleNext,
    handleBack
}) => {
    const [subtasks, setSubtasks] = useState<{
        title: string,
        description: string,
        status: string
    }[]>([]);

    const isPending = false;

    const handleAdd = () => {
        setSubtasks((prevStates) => [...prevStates, {
            title: 'title',
            description: 'description',
            status: 'status'
        }])
    }

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xl" sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                {isPending ? 
                <>
                    <Loading size={100} />
                </>
                    :
                <Box
                sx={{
                    marginTop: 8,
                    marginRight: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
                >
                <h1 className='text-3xl font-bold'>create subtask</h1> 
                <Box component="form" noValidate sx={{ mt: 1, width: "400px" }} >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="title"
                        name="name"
                        autoFocus
                        //onChange={() => handleChange('name')}
                        //helperText={formErrors.name}
                        //error={Boolean(formErrors.name)}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="description"
                        label="description"
                        type="text"
                        id="description"
                        required
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
                    <Button
                            fullWidth
                            variant="contained"
                            onClick={() => handleAdd()}
                            sx={{ mt: 3, mb: 2 , mr: 2}}
                            >
                            add
                    </Button>
                </Box>
                    
                    <div className="flex justify-between w-full">
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => handleBack()}
                            sx={{ mt: 3, mb: 2 , mr: 2}}
                            >
                            Back
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => handleNext()}
                            sx={{ mt: 3, mb: 2 }}
                            >
                            Next
                        </Button>
                    </div>
                </Box>
                }
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: '10px',
                    height: "400px",
                    width: "500px",
                    overflow: "scroll",
                }}
                >
                {subtasks.length > 0 ? subtasks.map((subtask, index) => 
                    <Box key={index} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '10px',
                        marginTop: "25px",
                        borderRadius: "30px",
                        width: "400px",
                        boxShadow: "8px -3px 24px -6px rgba(66, 68, 90, 1)",
                    }}>
                        <p>{subtask.title}</p>
                        <p>{subtask.description}</p>
                        <p>{subtask.status}</p>
                    </Box>
                ): 
                    <p>No subtasks added</p>
                }
                </Box>
            </Container>  
            
    </ThemeProvider>
        </>
    )
}