import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useTodoContext } from "../Context/TodoContext";
import Model from "./Model";
import useDisClouse from "../Hook/useDisClouse";

function Item({ name, gmail, id }) {
  const { deleteTodo } = useTodoContext();
  const { click, onOpen, onClose } = useDisClouse();
  return (
    <>
      <div className="bg-yellow-200 pl-1 py-1 rounded-lg">
        <div className="flex gap-2 items-center">
          <FaRegUserCircle color="rgb(234 150 0)" size={30} />
          <div className="flex flex-col flex-grow">
            <h2 className="text-black font-semibold">{name}</h2>
            <p className="text-[10px]">{gmail}</p>
          </div>
          <div className="flex items-center gap-2">
            <FiEdit
              size={30}
              color="black"
              className="cursor-pointer"
              onClick={() => onOpen()}
            />
            <div
              onClick={() => deleteTodo(id)}
              className="cursor-pointer text-[#ea9600] active:text-red-500"
            >
              <MdDeleteForever size={30} />
            </div>
          </div>
        </div>
      </div>
      <Model
        isUpdate
        click={click}
        onClose={onClose}
        name={name}
        gmail={gmail}
        id={id}
      />
    </>
  );
}

export default Item;
