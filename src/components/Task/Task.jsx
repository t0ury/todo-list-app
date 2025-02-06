/** @format */
import PropTypes from "prop-types";

const Task = ({ id, title, content, completeTask }) => {
  return (
    <li className="item flex flex-row justify-between gap-x-5 py-5">
      <div className="flex min-w-0 gap-x-4 content-center align-middle">
        <h4 className="flex content-center align-middle border rounded-xl py-2  ">
          <span>Title</span>
          <p className="m-2">{title}</p>
        </h4>
        <div className="min-w-0 flex-auto  border rounded-xl">
          <span>Content</span>
          <p className="m-2">{content}</p>
        </div>
      </div>
      <button
        aria-label="complete"
        aria-hidden="true"
        onClick={() => completeTask(id)}>
        Complete
      </button>
    </li>
  );
};
Task.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  completeTask: PropTypes.func.isRequired,
};
export default Task;
