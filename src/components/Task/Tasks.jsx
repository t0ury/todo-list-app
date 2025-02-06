/** @format */
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AddTask, Task } from "./";
import Ajv from "ajv";
import ajvErrors from "ajv-errors";

const schema = {
  type: "object",
  properties: {
    title: {
      type: "string",
      minLength: 2,
      maxLength: 32,
      errorMessage: {
        type: "Tile must be string",
        minLength: "Title must longer than 2 chars",
        maxLength: "Title can not more than 32 chars",
      },
    },
    content: {
      type: "string",
      minLength: 2,
      maxLength: 140,
      errorMessage: {
        type: "Content must be string",
        minLength: "Title must longer than 2 chars",
        maxLength: "Title can not more than 140 chars",
      },
    },
  },
};
const ajv = new Ajv({ allErrors: true });
ajvErrors(ajv);
const validateData = ajv.compile(schema);

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState({});

  const handleInputTitle = (e) => {
    setInputTitle(e.target.value);
  };
  const handleInputContent = (e) => {
    setInputContent(e.target.value);
  };

  const handleAdd = (event) => {
    /** Start data validation */
    event.preventDefault();
    const isValid = validateData({ handleInputTitle, handleInputContent });
    setErrors({});

    if (!isValid) {
      const fieldMessage = {};
      validateData?.errors.forEach((errors) => {
        const field = errors.instancePath.substring(1);
        fieldMessage[field] = errors.message;
      });
      setErrors(fieldMessage);
      return;
    }
    /**  End data validation */

    setTasks((prevState) => [
      ...prevState,
      {
        key: Date.now,
        id: Date.now,
        title: inputTitle,
        content: inputContent,
      },
    ]);
    setInputTitle("");
    setInputContent("");
  };
  const completeTask = (id) => {
    const filterList = tasks.filter((task) => task.id !== id);
    setTasks(filterList);
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("toDoList"));
    data && setTasks(data);
    setIsLoading(false);
  }, []);

  return (
    <>
      <div className="list__header">
        <AddTask
          handleAdd={handleAdd}
          inputTitle={inputTitle}
          inputContent={inputContent}
          errors={errors}
          handleInputTitle={handleInputTitle}
          handleInputContent={handleInputContent}
        />
      </div>
      <div className="list__body">
        <ul className="task-list flex flex-col divide-y-4 divide-gray-200">
          {tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              content={task.content}
              completeTask={completeTask}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tasks;
