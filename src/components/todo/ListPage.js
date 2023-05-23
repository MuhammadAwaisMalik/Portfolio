import React, { useCallback, useState } from "react";
import ListItems from "./ListItems";

const ListPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState("");
  const form = { email, name };
  const TodoItem = (e) => {
    e.preventDefault();
    if (name && email) {
      setTodo((t) => [...t, form]);
      setEmail("");
      setName("");
      setError("");
    } else {
      setError("All Fields are Required");
    }
  };
  const removeTodo = useCallback(
    (index) => {
      const newTodos = [...todo];
      newTodos.splice(index, 1);
      setTodo(newTodos);
    },
    [todo]
  );

  return (
    <>
      <div className="container mt-5">
        <div className="row pt-5">
          <div className="col-6 shadow py-5">
            <form className="m-auto w-50 mt-5">
              <h3>Add Details</h3>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address :
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="text-center p-3">
                <span className="text-danger">{error}</span>
              </div>
              <div className="text-center">
                <button onClick={TodoItem} className="btn btn-outline-success">
                  Add Item
                </button>
              </div>
            </form>
          </div>
          <div className="col-6">
            <ListItems todo={todo} remove={removeTodo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPage;
