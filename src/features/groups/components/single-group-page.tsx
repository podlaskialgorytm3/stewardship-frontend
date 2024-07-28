import { useParams } from "react-router-dom";

import { AuthError } from "../../../shared/components/auth-error";
import useBelongGroup from "../api/use-belong-group";

export const SingleGroupPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data: isBelongGroup, isLoading: isLoadingBelongGroup } = useBelongGroup(id as string);
    

    return (
        <div> 
            {(isBelongGroup && !isLoadingBelongGroup )? (
                <div>
                    <h1>Group</h1>
                </div>
            ):(
                <AuthError>You are not belong to group!</AuthError>
            )}
        </div>
    );
}