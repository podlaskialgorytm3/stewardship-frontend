import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";

const EmploymentTypePreference: React.FC<{ groupId: string | undefined }> = ({
  groupId,
}) => {
  return (
    <div
      className={`border-primary border-[2px] border-solid w-[350px] flex flex-col items-center rounded-lg m-5`}
    >
      <h1 className="font-bold text-xl mb-5 mt-5">
        employment-type-preference
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>name</TableHead>
            <TableHead>working hours</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* {isLoading && <Loading size={50} />}
          {data?.map((employmentType: EmploymentTypeInterface) => (
            <EmploymentTypeRow
              key={employmentType.id}
              employmentType={employmentType}
              groupId={groupId}
            />
          ))} */}
        </TableBody>
      </Table>
    </div>
  );
};

export { EmploymentTypePreference };
