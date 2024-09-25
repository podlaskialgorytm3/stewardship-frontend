import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";

import { useParams } from "react-router-dom";

import { Loading } from "../../../../src/shared/components/loading";
import { ShiftTableRow } from "./shift-table-row";

import { useFetchShifts } from "../api/use-fetch-shfits";
import { ShiftInterface } from "../types/types";

const ShiftContainer: React.FC = () => {
  const { id: groupId } = useParams<{ id: string | undefined }>();

  const { data, isLoading } = useFetchShifts({ groupId: groupId! });

  return (
    <div className="w-[90%] mt-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>name</TableHead>
            <TableHead>start from</TableHead>
            <TableHead>start to</TableHead>
            <TableHead>end from</TableHead>
            <TableHead>end to</TableHead>
            <TableHead>min daily hours</TableHead>
            <TableHead>max daily hours</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading && <Loading size={50} />}
          {data?.map((shift: ShiftInterface) => (
            <ShiftTableRow key={shift.id} shift={shift} groupId={groupId} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export { ShiftContainer };
