import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";
import Swal from "sweetalert2";

import { TaskPageResponse } from "../types/types";

const fetchTask = async (taskInfoId: string) => {
    const response = await fetch(`${API_URL}/stewardship/task-info/${taskInfoId}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });

    if(!response.ok){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'something-went-wrong'
        })
    }

    const data = await response.json();

    return data as TaskPageResponse;
}

const useFetchTask = (taskInfoId: string) => (
    useQuery({
        queryKey: ['task',"subtask", taskInfoId],
        queryFn: () => fetchTask(taskInfoId)
    })
)

export default useFetchTask;