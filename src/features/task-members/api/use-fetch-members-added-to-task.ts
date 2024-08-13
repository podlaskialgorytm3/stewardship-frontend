import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";
import { Member } from "../types/types";
import Swal from "sweetalert2";

const fetchMembersAddedToTask = async (taskInfoId: string) => {
    const resposne = await fetch(`${API_URL}/stewardship/task-affilation?taskInfo=${taskInfoId}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });

    if(!resposne.ok){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        });
    }

    const data = await resposne.json();

    return data as Member[];
}

const useFetchMembersAddedToTask = (taskInfoId: string) => (
    useQuery({
        queryKey: ['tasks', taskInfoId],
        queryFn: () => fetchMembersAddedToTask(taskInfoId)
    })
)