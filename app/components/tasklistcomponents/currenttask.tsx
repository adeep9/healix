"use client";

import Task from "../ui/task";

const Currenttask = () => {
  return (
    <main className="pt-4 w-full">
      <h1 className="pb-4 translate-x-2 tracking-tight font-medium">Current Tasks</h1>
      <div className="space-y-3">
        <Task />
        <Task />
      </div>
    </main>
  );
};

export default Currenttask;
