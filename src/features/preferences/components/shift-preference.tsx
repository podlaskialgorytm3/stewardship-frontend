import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";

const ShiftPreference: React.FC<{ groupId: string | undefined }> = ({
  groupId,
}) => {
  return (
    <div
      className={`border-primary border-[2px] border-solid w-[600px] flex flex-col items-center rounded-lg  `}
    >
      <h1 className="font-bold text-xl mb-5">shift-preference</h1>
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
          {/* {isLoading && <Loading size={50} />}
          {data?.map((shift: ShiftInterface) => (
            <ShiftTableRow key={shift.id} shift={shift} groupId={groupId} />
          ))} */}
        </TableBody>
      </Table>
    </div>
  );
};

export { ShiftPreference };
