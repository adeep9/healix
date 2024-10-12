/**
 * This is the Care Plan page.
 * This is litterally just for someone to upload a care plan.
 * One at a time only. PDF ONLY!
 * Needs userId, which is handed from parent component (tasks)
 * This links to the ChatGPT API
 */

import DragDropUpload from "../components/ui/draganddropupload";


const CarePlans = () => {
  return (
    <main>
      <div className="flex flex-col md:flex-row">
        <div className="w-64 hidden md:block">
          {/* Sidebar or additional content */}
        </div>
        <div className="flex-1 p-4 md:pl-12 md:p-9">
          <h1 className="text-3xl font-medium tracking-tight pb-4 text-emerald-900 hidden md:block">
            Careplan
          </h1>
          <div>
            <hr className="hidden md:block" />
          </div>
          <div className="p-4 mt-16 md:mt-4 h-full w-full bg-emerald-50">
            <div className="pt-16">
              <DragDropUpload/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CarePlans