import React from "react";
import Button from "./Button.jsx";
const NewTask = () => {
  return (
    <div className="flex items-center gap-4 ">
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <Button>Add Task</Button>
    </div>
  );
};

export default NewTask;
