/** @format */
import { useState } from "react";
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

const Input = () => {
  const [errors, setErrors] = useState({});
  const [postDetail, setPostDetail] = useState({
    title: "",
    content: "",
  });

  const handClick = (e) => {
    console.log("clicked");
    const isValid = validateData(postDetail);
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
  };

  const handleOnChange = (e) => {
    console.log("on change");

    // get user input data
    const name = e.target.name;
    const value = e.target.value;
    // update state
    setPostDetail({
      ...postDetail,
      [name]: value,
    });
  };

  return (
    <div>
      <label
        htmlFor="title"
        className="form-label">
        Title
      </label>
      <input
        className=""
        type="text"
        placeholder="Please enter 2 to 32 chars" // Updated placeholder text
        onChange={handleOnChange}
        value={postDetail.title}
      />
      {errors.title && <span className="text-danger">{errors.title}</span>}
      <label
        htmlFor="content"
        className="form-label">
        Content
      </label>
      <textarea
        className=""
        name="content"
        placeholder="Please enter 2 to 32 chars"
        onChange={handleOnChange}
        value={postDetail.content}
      />
      <button
        className=""
        type=""
        onClick={handClick}></button>
    </div>
  );
};

export default Input;
