import Input from "./Input.jsx";

export default function newProject() {
  return (
    <div>
      <menu>
        <li>
          <button>cancel</button>
        </li>
        <li>
          <button>save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea={true} />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
