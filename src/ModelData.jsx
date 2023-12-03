import React from "react";
import { useTodoContext } from "./Context/TodoContext";
import { Field, Form, Formik } from "formik";

function ModelData({ isUpdate, name, gmail, id, onClose }) {
  const { addTodo, updateTodo } = useTodoContext();
  return (
    <Formik
      initialValues={
        isUpdate
          ? {
              name: name,
              gmail: gmail,
            }
          : {
              name: "",
              gmail: "",
            }
      }
      onSubmit={(values) => {
        isUpdate ? updateTodo(values, id) : addTodo(values);
        onClose();
      }}
    >
      <Form className="flex gap-5 flex-col">
        <div className="flex gap-2 flex-col">
          <label htmlFor="NN" className="cursor-pointer">
            Name :
          </label>
          <Field
            className="focus:outline-none flex-grow p-1.5"
            name="name"
            type="text"
            id="NN"
            required
            minLength={4}
            maxLength={40}
            autoComplete="off"
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="NNN" className="cursor-pointer">
            Email :
          </label>
          <Field
            className="focus:outline-none flex-grow p-1.5"
            name="gmail"
            type="email"
            id="NNN"
            required
            autoComplete="off"
          
          />
        </div>
        <button
          type="submit"
          className="border text-white font-bold tracking-wider active:bg-lime-300"
        >
          {isUpdate ? "update" : "add"} Todo
        </button>
      </Form>
    </Formik>
  );
}

export default ModelData;
