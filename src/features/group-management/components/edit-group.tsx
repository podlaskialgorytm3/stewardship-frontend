import { useParams } from "react-router-dom"

export const EditGroup: React.FC = () => {
    const { id } = useParams<{id: string}>();

    return (
        <div>
            <h1>Edit Group</h1>
            {id}
        </div>
    )
}