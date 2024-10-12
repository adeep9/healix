"use client"

import Task from "../ui/task";

const Incompletetask = () => {
    return (
        <main className="pt-4 w-full">
        <h1 className="pb-4 translate-x-2 tracking-tight font-medium">Incomplete Tasks</h1>
        <div className="space-y-3">
          <Task />
          <Task />
          <Task />
        </div>
      </main>
    );
  };
  
  export default Incompletetask;