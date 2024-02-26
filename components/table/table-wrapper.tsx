import { FileType } from "@/typings";
import { DataTable } from "./data-table";
import { columns } from "./colmns";

export default function TableWrapper(
  { skeletonFiles }: { skeletonFiles: FileType[]}
) {
  return (
    <div>
      <DataTable columns={columns} data={skeletonFiles} />
    </div>
  )
}