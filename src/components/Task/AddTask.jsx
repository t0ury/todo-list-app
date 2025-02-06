/** @format */

import PropTypes from "prop-types";

const AddTask = ({
  handleAdd,
  inputTitle,
  inputContent,
  errors,
  handleInputTitle,
  handleInputContent,
}) => {
  return (
    <div>
      {/* <form className=" py-2 flex flex-row items-center justify-between"> */}
      <label
        htmlFor="title"
        className="form-label p-5">
        Title
      </label>
      <div className="flex flex-col ">
        <input
          className="p-5"
          type="text"
          name="title"
          placeholder="Please enter 2 to 32 chars" // Updated placeholder text
          value={inputTitle}
          onChange={handleInputTitle}
        />
        {errors.title && (
          <>
            <div
              className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert">
              <svg
                className="shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <span className="font-medium">Danger alert!</span>
              {errors.title}
            </div>
          </>
        )}
      </div>
      <label
        htmlFor="content"
        className="form-label p-5">
        Content
      </label>
      <div className="flex flex-col ">
        <textarea
          className="p-5"
          name="content"
          placeholder="Please enter 2 to 32 chars"
          value={inputContent}
          onChange={handleInputContent}
        />

        {errors.content && (
          <>
            <div
              className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert">
              <svg
                className="shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <span className="font-medium">Danger alert!</span>
              {errors.content}
            </div>
          </>
        )}
      </div>
      <button
        className=""
        type=""
        onClick={handleAdd}>
        Add
      </button>
      {/* </form> */}
    </div>
  );
};
AddTask.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  handleInputContent: PropTypes.func.isRequired,
  handleInputTitle: PropTypes.func.isRequired,
  inputTitle: PropTypes.string.isRequired,
  inputContent: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
};
export default AddTask;
