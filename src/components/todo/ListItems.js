import React, { memo } from "react";

const ListItems = ({ todo, remove }) => {
  return (
    <>
      <div>
        {todo.map((item, index) => {
          return (
            <>
              <div>
                <table className="table  m-auto">
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Name</th>
                      <th>Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={index}>
                      <td>{item.email}</td>
                      <td>{item.name}</td>
                      <td>
                        <button
                          onClick={() => {
                            remove(index);
                          }}
                          className="btn btn-outline-danger"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default memo(ListItems);
