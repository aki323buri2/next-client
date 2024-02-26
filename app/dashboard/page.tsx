import Dropzone from "@/components/dropzone"
import TableWrapper from "@/components/table/table-wrapper"
import { FileType } from "@/typings"
import { auth } from "@clerk/nextjs" 

export default async function Dashboard() {
  const { user } = auth()
  const skeletonFiles: FileType[] = Array(5).fill(0).map((_, i) => ({
    id: `id of ${i}`, 
    filename: `filename of ${i}`, 
    fullName: `fullName of ${i}`, 
    timestamp: new Date(),   
    downloadURL: `downloadURL of ${i}`,  
    type: `type of ${i}`, 
    size: Math.random(),  
  }))
  console.log({skeletonFiles})
  return (
    <div className="border-t">
      <Dropzone />

      <section className="container space-y-5">
        <h2 className="font-bold">All Files</h2>
        <div>
          {/* TableWrapper */}
          <TableWrapper skeletonFiles={skeletonFiles} />
        </div>
      </section>
    </div>
  )
}