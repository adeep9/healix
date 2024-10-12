/**
 * This is the tasks page.
 * Has a list of every task assigned to that particular nurse.
 * userid (and info) is taken from session data.
 * Accordion structure, so can look at any particular day in the future, 
 * if there is a task assigned to it.
 * Tasks are little widgets (button) with minimal information.
 */

import Tasklist from "../components/tasklist";

const Tasks = () => {
  // get userId from session data
  return (
    <main>
      <div className="flex flex-col md:flex-row">
        <div className="w-64 hidden md:block">
          {/* Sidebar or additional content */}
        </div>
        <div className="flex-1 p-4 md:pl-12 md:p-9">
          <h1 className="text-3xl font-medium tracking-tight pb-4 text-emerald-900 hidden md:block">
            Tasks
          </h1>
          <div>
            <hr className="hidden md:block" />
          </div>
          <div className=" mt-16 md:mt-4 h-full w-full">
            <Tasklist/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tasks;






