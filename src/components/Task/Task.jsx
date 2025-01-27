/** @format */

const Task = (props) => {
  return (
    <li
      key=""
      className="item flex flex-row justify-between gap-x-5 py-5">
      <div className="flex min-w-0 gap-x-4 content-center align-middle">
        <h4 className="flex content-center align-middle border rounded-xl py-2  ">
            task
            </h4>
        <div className="min-w-0 flex-auto  border rounded-xl">
          <p className="m-2">
            details...details...details...details...details...details...details...details...details...
            details...details...details...details...details...details...details...details...details...
          </p>
        </div>
      </div>
      <button>Complete</button>
    </li>
  );
};

export default Task;
