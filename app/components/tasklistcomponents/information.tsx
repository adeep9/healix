"use client"

import Offloadedtasks from "./offloadedtask";
import Pasttasks from "./pasttasks";


const Information = () => {
    return (
        <main className="pt-4 w-full">
            <h1 className="pb-4 translate-x-2 tracking-tight font-medium">Report</h1>
            <div className="space-y-3">
                <Pasttasks/>
            </div>
      </main>
    );
  };
  
  export default Information;