import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../../shared/constants/constants";
import Swal from "sweetalert2";

const fetchTasksToCards = async (groupId: string | undefined) => {
    const response = await fetch(`${API_URL}/stewardship/task-info?groupId=${groupId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });

    if(!response.ok) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        });
    }

    const data = await response.json();

    return data;
}

const useFetchTasksToCards = (groupId: string | undefined) => (
    useQuery({
        queryKey: ['groups','tasks', groupId],
        queryFn: () => fetchTasksToCards(groupId)
    })
)

export default useFetchTasksToCards;