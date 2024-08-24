import { useSendRequest } from "../api/use-send-request";
import { useCancelRequest } from "../api/use-cancel-request";
import { useGroupButton } from "../hooks/use-group-button";
import { Loading } from "../../../shared/components/loading";

export const GroupButton = ({
  typeOfMember,
  groupId,
}: {
  typeOfMember: string;
  groupId: string;
}) => {
  const { mutate: sendRequestMutate, isPending: sendRequestPending } =
    useSendRequest();
  const { mutate: cancelRequestMutate, isPending: cancelRequestPending } =
    useCancelRequest();
  const { membership, handleClick } = useGroupButton({
    sendRequestMutate,
    cancelRequestMutate,
    groupId,
    typeOfMember,
  });
  return (
    <>
      {sendRequestPending || cancelRequestPending ? (
        <Loading size={50} />
      ) : (
        <button
          className={`${membership.color} text-white px-4 py-2 rounded-lg cursor-pointer`}
          onClick={() => handleClick(membership.type)}
        >
          {membership.text}
        </button>
      )}
    </>
  );
};
