import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";

import { useParams } from "react-router-dom";

import { useFetchEmploymentTypes } from "../api/use-fetch-employment-types";

import { Loading } from "../../../shared/components/loading";
import { EmploymentTypeRow } from "./employment-type-row";

import { EmploymentTypeInterface } from "../types/types";

const EmploymentTypesContainer: React.FC<{}> = () => {
  const { id: groupId } = useParams<{ id: string | undefined }>();

  const { data, isLoading } = useFetchEmploymentTypes({ groupId } as {
    groupId: string;
  });

  return (
    <div className="w-[92%] mt-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>name</TableHead>
            <TableHead>working hours</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading && <Loading size={50} />}
          {data?.map((employmentType: EmploymentTypeInterface) => (
            <EmploymentTypeRow
              key={employmentType.id}
              employmentType={employmentType}
              groupId={groupId}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export { EmploymentTypesContainer };
