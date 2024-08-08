import Loading  from "../../../shared/components/loading";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../../../shared/themes/themes';
import { Select, MenuItem } from '@mui/material';

import useHadleSubtask from '../hooks/use-handle-subtask';
import { subtaskSchema } from "../utils/utils";

export const CreateSubtask: React.FC<{
    handleNext: () => void,
    handleBack: () => void
}> = ({
    handleNext,
    handleBack
}) => {
    const { formErrors, handleAdd, handleChange, handleDelete, subtasks } = useHadleSubtask({
        data: ['title', 'description', 'status'],
        schema: subtaskSchema,
        DEFAULT_STATE: {
            title: '',
            description: '',
            status: ''
        }
    })

    const isPending = false;


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
                <Box component="form" noValidate sx={{ mt: 1, width: "400px" }} onSubmit={handleAdd} >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="title"
                        name="title"
                        autoFocus
                        onChange={() => handleChange('title')}
                        helperText={formErrors.title}
                        error={Boolean(formErrors.title)}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="description"
                        label="description"
                        type="text"
                        id="description"
                        required
                        onChange={() => handleChange('description')}
                        helperText={formErrors.description}
                        error={Boolean(formErrors.description)}
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
                        onChange={() => handleChange('status')}
                        error={Boolean(formErrors.status)}
                    >
                        <MenuItem value={"done"}>done</MenuItem>
                        <MenuItem value={"in progress"}>in progress</MenuItem>
                        <MenuItem value={"waiting"}>waiting</MenuItem>
                    </Select>
                    <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 , mr: 2}}
                            type="submit"
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
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '10px',
                        marginTop: "25px",
                        borderRadius: "30px",
                        width: "400px",
                        boxShadow: "8px -3px 24px -6px rgba(66, 68, 90, 1)",
                    }}>
                        <div className="flex flex-col items-center justify-center w-[75%]">
                            <p className="text-2xl">{subtask.title}</p>
                            <p>{subtask.description}</p>
                            <p className={`${subtask.status === 'done' ? 'text-green-700' : subtask.status === 'waiting' ? 'text-yellow-400' : 'text-orange-600'}`}>{subtask.status}</p>
                        </div>
                        <div className="flex flex-col items-center justify-center w-[25%]">
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 , backgroundColor: 'red'}}
                                onClick={() => handleDelete(index)}
                                >
                                delete
                            </Button>
                        </div>
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