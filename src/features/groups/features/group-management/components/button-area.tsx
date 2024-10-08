import { useNavigate } from "react-router-dom";
import { useDeleteGroup } from "../api/use-delete-group";

import Swal from "sweetalert2";

export const ButtonArea: React.FC<{ groupId: string | undefined }> = ({
  groupId,
}) => {
  const navigate = useNavigate();
  const { mutate } = useDeleteGroup();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutate({ id: groupId as string });
      }
    });
  };

  return (
    <div className="flex justify-between w-[80%] mt-5">
      <button
        className="bg-[#1c4c9b] hover:bg-[#398dce] text-white font-bold py-2 px-4 rounded mt-2"
        onClick={() => navigate(`/dashboard/groups/create-task/${groupId}`)}
      >
        create-task
      </button>
      <button
        className="bg-[#7e007e] hover:bg-[#b331b3] text-white font-bold py-2 px-4 rounded mt-2"
        onClick={() => navigate(`/dashboard/groups/edit-group/${groupId}`)}
      >
        edit-group
      </button>
      <button
        className="bg-[#7e0000] hover:bg-[#b33131] text-white font-bold py-2 px-4 rounded mt-2"
        onClick={handleDelete}
      >
        delete-group
      </button>
    </div>
  );
};
