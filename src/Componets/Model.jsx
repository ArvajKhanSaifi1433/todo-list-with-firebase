import React from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
import ModelData from "../ModelData";

function Model({ click, onClose, isUpdate, name, gmail, id }) {
  return createPortal(
    <div
      className={`bg-black/10 backdrop-blur-sm fixed inset-0 ${
        click ? "" : "hidden"
      }`}
    >
      <div className="max-w-sm min-h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 mx-auto mt-40 relative rounded-xl overflow-hidden pt-11 pb-3 px-3">
        <div className="absolute right-0 top-0 bg-white p-1 rounded-bl-xl active:text-purple-600 cursor-pointer active:bg-black">
          <div onClick={() => onClose()}>
            <HiOutlineXMark size={30} />
          </div>
        </div>
        <ModelData isUpdate={isUpdate} name={name} gmail={gmail} id={id} onClose={onClose} />
        {/* <input type="date" autoComplete="off" disabled name="" id="" /> */}
        {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Model;
