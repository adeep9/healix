/**
 * This is the Patients page.
 * It will have a list of each patient.
 * Search bar at the top to search patients.
 * Each patient is a little widget (button) with minimal information
 * UserId is handed from parent component (tasks). 
 * Patient information is gotten from patients API
 */

const Patients = () => {
  //get list of patients from API 

  return (
    <main>
      <div className="flex flex-col md:flex-row">
        <div className="w-64 hidden md:block">
          {/* Sidebar or additional content */}
        </div>
        <div className="flex-1 p-4 md:pl-12 md:p-9">
          <h1 className="text-3xl font-medium tracking-tight pb-4 text-emerald-900 hidden md:block">
            Patients
          </h1>
          <div>
            <hr className="hidden md:block" />
          </div>
          <div className="p-4 mt-16 md:mt-4 h-full w-full bg-purple-50">
            {/* Add your content here */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Patients