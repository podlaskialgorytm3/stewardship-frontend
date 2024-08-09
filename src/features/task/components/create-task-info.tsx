import { useParams } from "react-router-dom"
import Loading  from "../../../shared/components/loading";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Select, MenuItem } from '@mui/material';

import useHandleTaskInfo from '../hooks/use-handle-task-info';
import { TaskInterface } from "../types/types";

export const CreateTaskInfo: React.FC<{
    tasks: TaskInterface,
    setTasks: React.Dispatch<React.SetStateAction<TaskInterface>>
}> = ({
    tasks,
    setTasks
}) => {
    const { id } = useParams<{id: string}>();
    const { onSubmit, register, errors, handleSubmit } = useHandleTaskInfo({
        setTasks
    });
    const isPending = false;

    return (
        <>
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
                <h1 className='text-3xl font-bold'>create-task</h1> 
                <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
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
                        fullWidth
                        id="task-name"
                        label="task-name"
                        autoFocus
                        defaultValue={tasks["task-name"] || ""}
                        {...register('task-name')}
                        error={!!errors['task-name']}
                        helperText={errors['task-name'] ? String(errors['task-name']?.message) : ''}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="start-date"
                        type="datetime-local"
                        id="start-date"
                        defaultValue={tasks["start-date"]  || ""}
                        {...register('start-date')}
                        error={!!errors['start-date']}
                        helperText={errors['start-date'] ? String(errors['start-date']?.message) : ''}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="end-date"
                        type="datetime-local"
                        id="end-date"
                        defaultValue={tasks["end-date"]  || ""}
                        {...register('end-date')}
                        error={!!errors['end-date']}
                        helperText={errors['end-date'] ? String(errors['end-date']?.message) : ''}
                    />
                    <Select
                        required
                        label="status"
                        {...register('status')}
                        id="status"
                        fullWidth
                        placeholder="status"
                        defaultValue={tasks.status || "waiting"}
                        sx={{mt: 2}}
                    >
                        <MenuItem value={"done"}>done</MenuItem>
                        <MenuItem value={"in progress"}>in progress</MenuItem>
                        <MenuItem value={"waiting"}>waiting</MenuItem>
                    </Select>
                    <Select
                        required
                        label="priority"
                        {...register('priority')}
                        id="priority"
                        fullWidth
                        placeholder="priority"
                        defaultValue={tasks.priority || "medium priority"}
                        sx={{mt: 2}}
                    >
                        <MenuItem value={"low priority"}>low priority</MenuItem>
                        <MenuItem value={"medium priority"}>medium priority</MenuItem>
                        <MenuItem value={"high priority"}>high priority</MenuItem>
                    </Select>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="comments"
                        type="text"
                        id="comments"
                        defaultValue={tasks.comments}
                        {...register('comments')}
                        error={!!errors['comments']}
                        helperText={errors['comments'] ? String(errors['comments']?.message) : ''}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        save
                    </Button>
                </Box>
                </Box>
                }
            </Container>  
    </>
    )
}