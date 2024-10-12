/**
 * Need to have two columns as well as a button where you can see past 'tasks'.
 * 
 * one column is in progress tasks 
 * second column is tasks that are not completed
 * need a section to show offloaded tasks and the completed ones. 
 * each different column will be a separate component
 */

import Currenttask from "./tasklistcomponents/currenttask";
import Incompletetask from "./tasklistcomponents/incompletetask";
import Information from "./tasklistcomponents/information";

const Tasklist = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="min-h-64">
        <Currenttask />
      </div>

      {/* Incompletetask with a vertical border */}
      <div className="min-h-64">
        <Incompletetask />
      </div>

      <div className="min-h-64">
        <Information />
      </div>
    </main>
  );
};

export default Tasklist;

  

