import { useParams } from "react-router-dom";

import { AuthError } from "../../../shared/components/auth-error";
import useBelongGroup from "../api/use-belong-group";

import { Members } from "../../members/components/members";

export const SingleGroupPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data: isBelongGroup, isLoading: isLoadingBelongGroup } = useBelongGroup(id as string);

    return (
        <div> 
            {(isBelongGroup && !isLoadingBelongGroup )? (
                <div className="flex justify-center items-center w-[1300px] mt-10">
                    <div className="w-[70%]">
                        Page with managmenting group
                    </div>
                    <Members groupId={id} />
                </div>
            ):(
                <AuthError>You are not belong to group!</AuthError>
            )}
        </div>
    );
}