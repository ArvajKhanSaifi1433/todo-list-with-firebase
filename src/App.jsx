import React, { useEffect, useState } from "react";
import { BiLogoFirebase, BiSearchAlt2 } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { db } from "./config/firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import Item from "./Componets/Item";
import Model from "./Componets/Model";
import { TodoContextProvider } from "./Context/TodoContext";
import useDisClouse from "./Hook/useDisClouse";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const { click, onOpen, onClose } = useDisClouse();
  // const [query, setQuery] = useState("");

  const addTodo = async (todoData) => {
    try {
      const contactRef = collection(db, "contact");
      await addDoc(contactRef, todoData);
      toast.success("Todo Add Successfully");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = async (todoData, id) => {
    try {
      const contactRef = doc(db, "contact", id);
      await updateDoc(contactRef, todoData);
      toast.success("Todo Update Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await deleteDoc(doc(db, "contact", id));
      toast.success("Todo Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contact");
        onSnapshot(contactRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactList);
          return contactList;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterTodo = (e) => {
    const value = e.target.value;

    const contactRef = collection(db, "contact");
    onSnapshot(contactRef, (snapshot) => {
      const contactList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      const filteredValue = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(value)
      );
      setContacts(filteredValue);
      return filteredValue;
    });
  };

  return (
    <TodoContextProvider value={{ addTodo, deleteTodo, updateTodo }}>
      <div className="bg-black min-h-screen w-full">
        <div className="max-w-sm mx-auto px-1 sm:px-0 flex flex-col  pt-20 gap-5">
          <nav className="flex items-center justify-center sm:gap-2 gap-1 border border-white py-2 sm:px-5 px-2 bg-white rounded-lg ">
            <BiLogoFirebase color="rgb(234 179 8)" size={30} />
            <h1 className="capitalize sm:tracking-wider font-semibold sm:font-bold sm:text-xl  text-lg">
              firebase contact app
            </h1>
          </nav>
          <div className="flex gap-2">
            <div className="relative flex items-center flex-grow">
              <input
                onChange={filterTodo}
                /*  value={query}
                onChange={(e) => setQuery(e.target.value)} */
                type="text"
                className="focus:outline-none bg-black border border-white text-white py-2.5 rounded-lg text-sm pl-8 w-full"
                placeholder="Search here..."
              />
              <div className="absolute px-1">
                <BiSearchAlt2 color="white" size={25} />
              </div>
            </div>
            <div
              className="bg-white p-2 rounded-full cursor-pointer"
              title="Add Todo"
              onClick={() => onOpen()}
            >
              <AiOutlinePlus size={30} color="black" />
            </div>
          </div>
          {contacts
            // .filter((cont) => cont.name.toLowerCase().includes(query))
            .map((item) => {
              return (
                <Item
                  key={item.id}
                  name={item.name}
                  gmail={item.gmail}
                  id={item.id}
                />
              );
            })}
        </div>
      </div>
      <Model click={click} onOpen={onOpen} onClose={onClose} />
      <ToastContainer position="top-center" />
    </TodoContextProvider>
  );
}

export default App;
